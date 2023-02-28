// TASK 2
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//
// Например:
//
// 	let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
	const currentDay = date.getDay()
	switch (currentDay) {
		case 0: {
			return 'ВС'
		}
		case 1: {
			return 'ПН'
		}
		case 2: {
			return 'ВТ'
		}
		case 3: {
			return 'СР'
		}
		case 4: {
			return 'ЧТ'
		}
		case 5: {
			return 'ПТ'
		}
		case 6: {
			return 'СБ'
		}
	}
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) );