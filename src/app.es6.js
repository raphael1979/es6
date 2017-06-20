console.log('merde ca colle avec tous');

document.getElementById('clickMe').addEventListener('click',() =>{
	let Nom = {name: document.getElementById('content').value };
	document.getElementById('receiver').innerHTML = `bonjour ${Nom.name}`;
	if(document.getElementById('content').value == ''){
		document.getElementById('receiver').innerHTML = 'Bonjour Pere Noël';
	}
	sessionStorage.setItem(('autosave','content').value);
});

