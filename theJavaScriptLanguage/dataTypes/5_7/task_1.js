// TASK 1
// Допустим, у нас есть массив arr.
//
//  Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
//
//  Например:
//
// function unique(arr) {
//  /* ваш код */
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//  "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
//
//  P.P.S. Используйте Set для хранения уникальных значений.


//answer
function unique(arr) {
 let newArr = new Set(arr)
 return Array.from(newArr);
}