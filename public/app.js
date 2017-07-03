'use strict';

console.log('merde ca colle avec tous');
if (!localStorage.getItem('names')) {
	var names = [];
	localStorage.setItem('names', JSON.stringify(names));
} else {
	var _names = JSON.parse(localStorage.getItem('names'));
	var hist = '';
	_names.forEach(function (name) {
		hist = hist + name + "<br/>";
	});
	document.getElementById('hist').innerHTML = hist;
}

document.getElementById('clickMe').addEventListener('click', function () {
	var nom = {
		name: document.getElementById('content').value
	};
	var maj = nom.name.charAt(0).toUpperCase() + nom.name.substring(1).toLowerCase();
	var names = JSON.parse(localStorage.getItem('names'));
	names.push(maj);
	var hist = '';
	names.forEach(function (name) {
		hist = hist + name + "<br/>";
	});
	document.getElementById('receiver').innerHTML = 'bonjour ' + maj;
	document.getElementById('hist').innerHTML = hist;
	if (document.getElementById('content').value == '') {
		document.getElementById('receiver').innerHTML = 'Bonjour Pere Noël';
	}
	localStorage.setItem('names', JSON.stringify(names));
});
document.getElementById('searchBtn').addEventListener('click', function () {
	var names = JSON.parse(localStorage.getItem('names'));
	var search = document.getElementById('search').value;
	var filterHistory = names.filter(function (name) {
		return name.toLowerCase().startsWith(search.toLowerCase());
	});
	document.getElementById('hist').innerHTML = filterHistory;
});
