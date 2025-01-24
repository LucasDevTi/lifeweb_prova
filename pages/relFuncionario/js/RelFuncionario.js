Cmp.RelFuncionario = function() {
    
    var private = {

        render: function() {

            Cmp.createInput({
                id: 'inputNome',
                renderTo: '#divInputNome',
                label: 'Nome do funcionário',
                width: '100%',
                placeholder:'Digite o nome',
                onlyLetter: true,
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
                id: 'gridDadosFuncionario',
                class: 'table table-striped',
                renderTo: '#divCmpGridFuncionario',
                header: [
                    {
                        text: 'Nome',
                        field: 'nome'
                    }, {
                        text: 'Função',
                        field: 'funcao',
                        width: 200
                    }
                ]
            });
        },

        buscar: function() {
            Cmp.showLoading();

            Cmp.request({
                url: 'index.php?mdl=relFuncionario&file=ds_funcionario.php',
                params: {
                    nome: Cmp.get('inputNome').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosFuncionario').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        },

        limpar: function(){
            $('#inputNome').val('');
            this.buscar();
        }

    };

    this.init = function() {
        private.render();
    }

}