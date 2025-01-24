Cmp.RelVeiculo = function() {
    
    var private = {

        render: function() {

            Cmp.createInput({
                id: 'inputPlaca',
                renderTo: '#divInputPlaca',
                label: 'Placa do veículo',
                width: '200px',
                placeholder: 'Digite a placa',
                maxlength: 7,
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createButton({
                id: 'btnLimpar',
                renderTo: '#divBtnConsultar',
                text: 'Limpar',
                type: 'warning',
                icon_class: 'fa fa-times',
                handler: function() {
                    private.limpar();
                }
            });

            Cmp.createGrid({
                id: 'gridDadosVeiculos',
                class: 'table table-striped',
                renderTo: '#divCmpGridVeiculo',
                header: [
                    {
                        text: 'Nome',
                        field: 'nome'
                    }, {
                        text: 'Placa',
                        field: 'placa',
                        width: 150
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 150
                    }
                ]
            });
        },

        buscar: function() {
            Cmp.showLoading();

            Cmp.request({
                url: 'index.php?mdl=relVeiculo&file=ds_veiculo.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosVeiculos').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        },

        limpar: function(){
            $('#inputPlaca').val('');
            this.buscar();
        }
    };

    this.init = function() {
        private.render();
    }

}