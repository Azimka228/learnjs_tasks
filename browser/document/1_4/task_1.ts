// TASK 1
// Вот документ с таблицей и формой.
//
// 	Как найти?…
//
// Таблицу с id="age-table".
// 	Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// 	Первый input в этой форме.
// 	Последний input в этой форме.


// 1.
let table = document.getElementById('age-table')

// 2.
document.querySelectorAll('#age-table label')

// 3.
table.querySelector('td')

// 4. 
let form = document.querySelector('form[name="search"]')

// 5.
form.querySelector('input')

// 6.
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]