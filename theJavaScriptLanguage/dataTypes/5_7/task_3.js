// TASK 3
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
//
//  Но это не выходит:
//
//  let map = new Map();
//
// map.set("name", "John");
//
// let keys = map.keys();
//
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


//answer
// Нужно исправить let keys = map.keys() на
let keys = Array.from(map.keys());