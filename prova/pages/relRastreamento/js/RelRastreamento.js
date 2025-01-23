Cmp.RelRastreamento = function() {
    
    var private = {

        render: function() {

            Cmp.createInput({
                id: 'inputPlaca',
                renderTo: '#divInputPlaca',
                label: 'Placa do veículo',
                width: '200px'
            });

            // Área de pesquisa 2
            Cmp.createInput({
                id: 'inputFuncionario',
                renderTo: '#divInputFuncionario',
                label: 'Funcionário',
                width: '200px'
            });

            // Área de pesquisa 3
            Cmp.createInput({
                id: 'inputData',
                renderTo: '#divInputData',
                label: 'Data do registro',
                width: '200px'
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar3',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createGrid({
                id: 'gridDadosRastreamentos',
                renderTo: '#divCmpGridRastreamento',
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
                        width: 150
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
                url: 'index.php?mdl=relRastreamento&file=ds_rastreamento.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue(),
                    funcionario: Cmp.get('inputFuncionario').getValue(),
                    data: Cmp.get('inputData').getValue()
                },
                success: function(res) {
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                        const formattedData = $.map(res.data, function(item) {
                            return {
                                ...item,
                                diferenca_velocidade: item.diferenca_velocidade + '%'
                            };
                        });

                        console.log(formattedData);
                        Cmp.get('gridDadosRastreamentos').loadData(formattedData);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        }

    };

    this.init = function() {
        private.render();
    }

}