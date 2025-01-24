Cmp.RelVeiculoacimavelocidade = function() {
    
    var private = {

        render: function() {

            Cmp.createInput({
                id: 'inputPlaca',
                placeholder: 'Digite a placa',
                renderTo: '#divInputPlaca',
                label: 'Placa do veículo',
                width: '250px',
                maxlength: 7,
                handler: function() {
                    private.buscar();
                }
            });

            /*  Área de pesquisa 2 */
            Cmp.createInput({
                id: 'inputFuncionario',
                placeholder: 'Digite o nome',
                renderTo: '#divInputFuncionario',
                label: 'Funcionário',
                width: '250px',
                onlyLetter: true,
                handler: function() {
                    private.buscar();
                }
            });

            /*  Área de pesquisa 3 */
            Cmp.createInput({
                id: 'inputData',
                type: 'text',
                placeholder: 'Escolha a data',
                renderTo: '#divInputData',
                label: 'Data do registro',
                width: '250px',
                daterange: true,
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar3',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createButton({
                id: 'btnLimpar',
                renderTo: '#divBtnConsultar3',
                text: 'Limpar',
                type: 'warning',
                icon_class: 'fa fa-times',
                handler: function() {
                    private.limpar();
                }
            });

            Cmp.createGrid({
                id: 'gridDadosRastreamentos',
                class: 'table table-striped',
                renderTo: '#divCmpGridRastreamento',
                tipo_table: 'table_rastreamento',
                header: [
                    {
                        text: 'Placa',
                        field: 'placa'
                    }, {
                        text: 'Funcionário',
                        field: 'funcionario',
                        width: 150
                    }, {
                        text: 'Data',
                        field: 'data',
                        width: 250
                    }, {
                        text: 'Vel. Max.',
                        field: 'vel_maxima',
                        width: 150
                    }, {
                        text: 'Vel. Reg.',
                        field: 'vel_registrada',
                        width: 150
                    }, {
                        text: 'Diff. Vel.',
                        field: 'diferenca_velocidade',
                        width: 150,
                        percentual: true
                    }, {
                        text: 'Latitude',
                        field: 'latitude',
                        width: 150
                    }, {
                        text: 'Longitude',
                        field: 'longitude',
                        width: 150
                    },
                ]
            });
        },

        buscar: function() {
            Cmp.showLoading();

            Cmp.request({
                url: 'index.php?mdl=relVeiculoacimavelocidade&file=ds_veiculoacimavelocidade.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue(),
                    funcionario: Cmp.get('inputFuncionario').getValue(),
                    data: Cmp.get('inputData').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        Cmp.get('gridDadosRastreamentos').loadData(res.data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        },

        limpar: function(){
            $('#inputFuncionario').val('');
            $('#inputPlaca').val('');
            $('#inputData').val('');
            this.buscar();
        }
    };

    this.init = function() {
        private.render();
    }

}