// TASK 4
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
//
// 	Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
//
// 	let hamster = {
// 		stomach: [],
//
// 		eat(food) {
// 			this.stomach.push(food);
// 		}
// 	};
//
// let speedy = {
// 	__proto__: hamster
// };
//
// let lazy = {
// 	__proto__: hamster
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

//answer
let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	}
};

let speedy = {
	__proto__: hamster,
	stomach: []
};

let lazy = {
	__proto__: hamster,
	stomach: []
};

// @ts-ignore
speedy.eat("apple");
alert( speedy.stomach );


alert( lazy.stomach );
