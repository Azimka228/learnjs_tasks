// TASK 4
// Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
//
//
// 	Требования:
//
// 		Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:
//
// 	Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// 	Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.


//answer
let field1 = document.getElementById('field')
let ball = document.getElementById('ball')
field1.onclick = function(event) {

	// координаты поля относительно окна браузера
	// @ts-ignore
	let fieldCoords = this.getBoundingClientRect();

	let ballCoords = {
		top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
		left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
	};

	if (ballCoords.top < 0) ballCoords.top = 0;
	if (ballCoords.left < 0) ballCoords.left = 0;
	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
		ballCoords.left = field.clientWidth - ball.clientWidth;
	}
	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
		ballCoords.top = field.clientHeight - ball.clientHeight;
	}

	ball.style.left = ballCoords.left + 'px';
	ball.style.top = ballCoords.top + 'px';
}