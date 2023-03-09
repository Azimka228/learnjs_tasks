// TASK 7
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
// 	Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

//answer
function getSecondsToday() {
	let currentDate:any = new Date();
	let today:any = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1);
	return Math.round(currentDate - today / 1000);
}