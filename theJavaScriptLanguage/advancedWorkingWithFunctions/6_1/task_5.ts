// TASK 5

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
// 	Сделайте два решения: с использованием цикла и через рекурсию.

let list1 = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// 1.
function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next);
	}
	alert(list.value);
}

// 2.
function printReverseList2(list) {
	let arr = [];
	let tmp = list;

	while (tmp) {
		arr.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		alert( arr[i] );
	}
}





