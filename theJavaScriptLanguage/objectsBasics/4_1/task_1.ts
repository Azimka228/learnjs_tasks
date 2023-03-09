// TASK 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
// 	Создайте пустой объект user.
// 	Добавьте свойство name со значением John.
// 	Добавьте свойство surname со значением Smith.
// 	Измените значение свойства name на Pete.
// 	Удалите свойство name из объекта.

//answer
let user:any = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;