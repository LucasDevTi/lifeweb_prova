## Alterações feitas em component.js
- Linha 177~183
	Para adicionar na `<td>` de diferença de velocidade o char '%', passei como um novo atributo uma ``flag`` percentual

```js
let perc = '';
if(col.percentual){
	perc = '%';
}
rTr.append($('<td>', {
	align: col.align || ''
}).html(`${row[col.field]}${perc}`));
```
