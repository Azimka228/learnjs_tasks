// TASK 1
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
// 	Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
// 	Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

//answer

function aclean(arr) {
 let obj = {};

 for (let i = 0; i < arr.length; i++) {
  let sorted = arr[i].toLowerCase().split("").sort().join("");
  obj[sorted] = arr[i];
 }

 return Object.values(obj);
}