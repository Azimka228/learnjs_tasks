// TASK 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
//
// 	Да, именно таким образом, используя двойные круглые скобки (не опечатка).
//
// Например:
//
// 	sum(1)(2) = 3
// sum(5)(-1) = 4


//answer
function sum1 (a) {

	return function(b) {
		return a + b;
	};

}