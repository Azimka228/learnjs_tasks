// TASK 1
// Здесь функция makeUser возвращает объект.
//
// 	Каким будет результат при обращении к свойству объекта ref? Почему?
//
// 	function makeUser() {
// 		return {
// 			name: "John",
// 			ref: this
// 		};
// 	}
//
// 	let user = makeUser();
//
// alert( user.ref.name ); // Каким будет результат?

//answer
//Будет ошибка, потому что вызов будет внутри функции и будет равен undefined