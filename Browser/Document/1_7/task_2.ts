// TASK 2
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
//
// <ol id="elem">
// 	<li>Привет</li>
// 	<li>Мир</li>
// 	</ol>
//
// 	<script>
// 	function clear(elem) { /* ваш код */ }
//
// clear(elem)
// </script>

function clear(elem) {
	elem.innerHTML = '';
}