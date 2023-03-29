// TASK 1
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
//
// class Rabbit extends Object {
//  constructor(name) {
//   this.name = name;
//  }
// }
//
// let rabbit = new Rabbit("Кроль");
//
// alert( rabbit.hasOwnProperty('name') ); // Ошибка

//answer
class Rabbit extends Object {
 constructor(name) {
  super();
  this.name = name;
 }
}

let rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty('name')); // true