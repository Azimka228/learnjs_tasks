// TASK 1
// Имеется <select>:
//
// <select id="genres">
// <option value="rock">Рок</option>
// 	<option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:
//
// 	Выведите значение и текст выбранного пункта.
// 	Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

//answer
// 1.
// let selectedOption = genres.options[genres.selectedIndex];
// alert( selectedOption.value );
// alert( selectedOption.text );
//
// 2.
// let newOption = new Option("Классика", "classic");
// genres.append(newOption);
//
// 3.
// newOption.selected = true;