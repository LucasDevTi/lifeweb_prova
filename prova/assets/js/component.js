var Cmp = {

    componentList: [],

    ready: $,

    get(cmpId) {
        var myCmp = Cmp.componentList.find(item => item.id == cmpId);
        return myCmp != undefined ? myCmp.cmp : null;
    },

    request: function (config) {
        if (config.url == undefined && config.url == '') {
            if (typeof config.failure == 'function') {
                config.failure('Param url required');
            }
            return;
        }

        var params = typeof config.params == 'object' ? config.params : {};

        $.ajax({
            type: 'POST',
            url: config.url,
            data: params
        }).then(function (res) {
            var response = null;
            try {
                response = JSON.parse(res);
            } catch(e) {
                response = res;
            }

            if (typeof config.success == 'function') {
                config.success(response);
            }

        }, function (e) {
            if (typeof config.failure == 'function') {
                config.failure(e);
            }
        });
    },

    button: function (config) {
        if (config.id != undefined) {
            Cmp.componentList.push({
                id: config.id,
                cmp: this
            });
        }

        var type = config.type || 'primary';

        var btn = $('<button>', {
            type: 'button',
            class: 'btn btn-' + type
        }).html(config.text || '');

        if (typeof config.handler == 'function') {
            btn.click(config.handler);
        }

        if (config.renderTo) {
            $(config.renderTo).append(btn);
        }

        this.destroy = function () {
            btn.remove();
        }
    },

    input: function(config) {
        if (config.id == undefined || config.id == '') {
            return;
        }

        Cmp.componentList.push({
            id: config.id,
            cmp: this
        });

        var mainEl = $('<div>', { class: 'form-group', width: config.width || '100%' });

        if(config.label != undefined) {
            mainEl.append(
                $('<label>', { for: config.id }).html(config.label)
            );
        }

        var input = $('<input>', { 
            type: config.type || 'text',
            id: config.id,
            class: 'form-control',
            placeholder: config.placeholder || '', 
            value: config.value || '',
            min: config.min || '',
            max: config.max || '' 
        });

        mainEl.append(input);

        if(config.renderTo) {
            $(config.renderTo).append(mainEl);
        }
        
        if(config.onlyLetter === true){
            input.on('input', function () {
                var value = input.val();
                var newValue = value.replace(/[^a-zA-Z\s]/g, '');
                if (value !== newValue) {
                    input.val(newValue);
                }
            });
        }

        this.getValue = function() {
            var val = input.val();
            return val == '' ? null : val;
        }

        this.destroy = function() {
            mainEl.remove();
        }
    },

    grid: function(config) {
        if (config.id == undefined || config.id == '') {
            return;
        }

        Cmp.componentList.push({
            id: config.id,
            cmp: this
        });

        var table = $('<table>', { id: config.id, class: config.class });

        var thead = $('<thead>');
        var tbody = $('<tbody>');

        var tr = $('<tr>');

        config.header.forEach(function(item, index) {
            tr.append(
                $('<th>', {
                    id: item.field + '-' + index,
                    width: item.width || 'auto',
                    align: item.align || 'left'
                }).html(item.text)
            );
        });

        thead.append(tr);

        table.append(thead);
        table.append(tbody);

        if(config.renderTo) {
            $(config.renderTo).append(table);
        }

        table.DataTable({
            pageLength: 20,
            autoWidth: false
        });

        this.loadData = function(data) {

            table.DataTable().destroy();

            tbody.html('');

            data.forEach(function(row) {
                var rTr = $('<tr>');

                if(config.tipo_table) {
                    if(config.tipo_table === 'table_rastreamento' && row['diferenca_velocidade']){
                        if(row['diferenca_velocidade'] >= 50){
                            rTr.addClass('bg-danger');
                        }else if(row['diferenca_velocidade'] >= 20){
                            rTr.addClass('bg-warning');
                        }
                    }
                }
                
                config.header.forEach(function(col) {
                    
                    let perc = '';
                    if(col.percentual){
                        perc = '%';
                    }

                    rTr.append($('<td>', {
                        align: col.align || ''
                    }).html(`${row[col.field]}${perc}`));
                });
                tbody.append(rTr);
            });

            table.DataTable({
                pageLength: 20,
                autoWidth: false
            });
        }
    },

    showLoading: function() {
        $('#loadingWindow').modal({
            show: true,
            backdrop: 'static'
        });
    },

    hideLoading: function() {
        setTimeout(function() {
            $('#loadingWindow').modal('hide');
        }, 500);
    },

    showErrorMessage: function(message) {
        $('#errorWindow .alert > span').html(message);
        $('#errorWindow').modal({
            show: true
        });
    },

    createButton: function (config) {
        return new Cmp.button(config);
    },

    createInput: function(config) {
        return new Cmp.input(config);
    },

    createGrid: function(config) {
        return new Cmp.grid(config);
    }

};