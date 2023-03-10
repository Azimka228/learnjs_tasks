// TASK 1
// В ифрейме ниже располагается документ с зелёным «полем».
//
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
//
// 	В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
//
//
// 	Ваш код должен при помощи DOM получить четыре пары координат:
//
// 	верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.
//
// 	P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.


//answer
let elem = document.querySelector('.elem')
let field = document.querySelector('.field')
let coords = elem.getBoundingClientRect();

let task1 = [coords.left, coords.top];
let task2 = [coords.right, coords.bottom];
let task3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
let task4 = [
	coords.left + elem.clientLeft + elem.clientWidth,
	coords.top + elem.clientTop + elem.clientHeight
];