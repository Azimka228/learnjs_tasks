// TASK 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
// 	Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//
// 	let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

//answer
function copySorted(arr) {
	let newArr = [...arr]
	return newArr.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );