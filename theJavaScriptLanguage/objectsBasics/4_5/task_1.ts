// TASK 1
// Возможно ли создать функции A и B, чтобы new A() == new B()?
//
// 	function A() { ... }
// 	function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true
// Если да – приведите пример вашего кода.

//answer

//Только если объявить внешную переменную, то тогда можно
// let obj = {
// 	test: 'data'
// };
//
// function A() { return obj }
// function B() { return obj }
//
// alert( new A() === new B() ); // true