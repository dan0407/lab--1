const { frutas, dinero } = require('./data');

const cowsay = require('cowsay');
console.log(
	cowsay.say({
		text: 'frutas',
		e: 'oO',
		T: 'U ',
	})
);

frutas.forEach((fruta) => {
	console.count(fruta);
});

console.log(dinero);
