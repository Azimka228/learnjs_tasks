// TASK 8
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
// 	Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// 	В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// 	В противном случае, если меньше часа, вывести "m мин. назад".
// 	В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// 	Например:
//
// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

//answer
function formatDate(date) {
	let diff = Number(new Date()) - date;

	if (diff < 1000) { // меньше 1 секунды
		return "прямо сейчас";
	}

	let sec = Math.floor(diff / 1000);

	if (sec < 60) {
		return sec + " сек. назад";
	}

	let min = Math.floor(diff / 60000)

	if (min < 60) {
		return min + " мин. назад";
	}
	let options = {
		year: "numeric" as const,
		month: "numeric" as const,
		day: "numeric" as const,
		hour: "numeric" as const,
		minute: "numeric" as const,
		second: "numeric" as const,
		hour12: false,
		timeZone: "America/Los_Angeles",
	};

	return (new Intl.DateTimeFormat("default", options).format(date)).replace(/\//g, ".")
		.slice(0,-3)
}