console.log('merde ca colle avec tous');

// // let name = prompt("Enter your name please");
// // console.log(name);

// // const hello = `*** Bonjour ${name} ! *** `;

// // console.log(hello);

// .addEventListener('click', e => { e.preventDefault(); });
// let fruit = {name: 'banana', color: 'yellow'};
// let describe = `This ${fruit.name} is ${fruit.color}`;
// console.log(describe);

document.getElementById('clickMe').addEventListener('click',() =>{
	document.getElementById('receiver').innerHTML = 'Bonjour '.concat(document.getElementById('content').value);
	if(document.getElementById('content').value == ''){
		document.getElementById('receiver').innerHTML = 'Bonjour Pere Noël';
	}
});
