const { frutas, dinero } = require('./data');

import yosay from 'yosay';

console.log(yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

frutas.forEach((fruta) => {
	console.count(fruta);
});

console.log(dinero);
