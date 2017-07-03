console.log('merde ca colle avec tous');
if(!localStorage.getItem('names')){
	let names = [];
	localStorage.setItem('names',JSON.stringify(names));
}else{
	let names =JSON.parse(localStorage.getItem('names'));
	let hist = '';
	names.forEach(name => {
		hist = hist + name +"<br/>";
	})
	document.getElementById('hist').innerHTML = hist;
}

document.getElementById('clickMe').addEventListener('click',() =>{
	let nom = {
		name: document.getElementById('content').value 
	};
	let maj = nom.name.charAt(0).toUpperCase()+nom.name.substring(1).toLowerCase()
	let names =JSON.parse(localStorage.getItem('names'));
	names.push(maj);
	let hist = '';
	names.forEach(name => {
		hist = hist + name +"<br/>";
	})
	document.getElementById('receiver').innerHTML = `bonjour ${maj}`;
	document.getElementById('hist').innerHTML = hist;
	if(document.getElementById('content').value == ''){
		document.getElementById('receiver').innerHTML = 'Bonjour Pere Noël';
	}
	localStorage.setItem('names',JSON.stringify(names));
});
document.getElementById('searchBtn').addEventListener('click', ()=>{
	let names =JSON.parse(localStorage.getItem('names'));
	let search = document.getElementById('search').value;
	let filterHistory = names.filter(name => {
		return name.toLowerCase().startsWith(search.toLowerCase());

	});
	document.getElementById('hist').innerHTML = filterHistory;
})
