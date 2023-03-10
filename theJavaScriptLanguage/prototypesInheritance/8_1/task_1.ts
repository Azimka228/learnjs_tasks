// TASK 1
// В приведённом ниже коде создаются и изменяются два объекта.
//
// 	Какие значения показываются в процессе выполнения кода?
//
// 	let animal = {
// 		jumps: null
// 	};
// let rabbit = {
// 	__proto__: animal,
// 	jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? (3)


// answer
// 1. true
// 2. null
// 3. undefined