// TASK 1
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// answer
document.getElementById('hider').onclick = function() {
	document.getElementById('text').style.display = 'none';
}