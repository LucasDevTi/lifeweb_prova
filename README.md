## Alterações feitas em component.js
- Linha 53,54
	- Possibilidade de adicionar ícones personalizados aos botões
```js
var type = config.type || 'primary mr-2';
var icon_class = config.icon_class ? config.icon_class + ' mr-2' : 'fas fa-search mr-2';
```

- Linha 95~102
	- Novos atributos  para o  input
	```js
var input = $('<input>', { 
	type: config.type || 'text',
	id: config.id,
	class: 'form-control',
	placeholder: config.placeholder || '', 
	value: config.value || '',
	maxlength: config.maxlength || '' 
});
```

- Linha 110~118
	- ``Flag`` personalizada para inputs que aceitam somente letras, por exemplo: nome de funcionário.
	```js
if(config.onlyLetter === true){
	input.on('input', function () {
		var value = input.val();
		var newValue = value.replace(/[^a-zA-Z\s]/g, '');
		if (value !== newValue) {
			input.val(newValue);
		}
	});
}
```

- Linha 120~128
	- Disponibilizando para os inputs a opção de buscar ao apertar a tecla ``Enter``
	```js
if(config.handler){
	input.on('keydown', function (e) {
		if (e.key === 'Enter') {
			if (typeof config.handler === 'function') {
				config.handler();
			}
		}
	});
}
```

- Linha 130~158
	- Configuração para o ``dateragerpicker``
	```js
if(config.daterange === true){
	$(`#${config.id}`).daterangepicker({
		opens: 'left',
		autoUpdateInput: false,
		showDropdowns: true,
		maxDate: moment(),
		locale: {
			cancelLabel: 'Limpar',
			format: 'DD/MM/YYYY',
			separator: ' - ',
			applyLabel: 'Aplicar',
			customRangeLabel: 'Personalizado',
			daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
			monthNames: [
				'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
				'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
			],
			firstDay: 0
		}
	});

	$(`#${config.id}`).on('apply.daterangepicker', function(ev, picker) {
		$(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
	});

	$(`#${config.id}`).on('cancel.daterangepicker', function(ev, picker) {
		$(this).val('');
	});
}
```

- Linha 180
	- Tabela com classe personalizada:
```js
var table = $('<table>', { id: config.id, class: config.class });
```

- Linha 220~228
	- ``Flag`` especifica para o relatório de veículos acima da velocidade, onde veículos com 50% ou mais de diferença recebem o background vermelho e  20% ou mais recebem amarelo.
	```js
if(config.tipo_table) {
	if(config.tipo_table === 'table_rastreamento' && row['diferenca_velocidade']){
		if(row['diferenca_velocidade'] >= 50){
			rTr.addClass('bg-danger');
		}else if(row['diferenca_velocidade'] >= 20){
			rTr.addClass('bg-warning');
		}
	}
}
```

- Linha 232~239
	- Formatação para mostrar caractere de %
```js
let perc = '';
if(col.percentual){
	perc = '%';
}

rTr.append($('<td>', {
	align: col.align || ''
}).html(`${row[col.field]}${perc}`));
```


## Funcionalidade de limpar
- Uma nova funcionalidade de limpar  os campos e em seguida fazer a busca geral foi adicionada