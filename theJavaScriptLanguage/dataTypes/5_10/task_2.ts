// TASK 2
// У нас есть объект salaries с зарплатами:
//
// 	let salaries = {
// 		"John": 100,
// 		"Pete": 300,
// 		"Mary": 250
// 	};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
// 	Если объект salaries пустой, то нужно вернуть null.
// 	Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// 	P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {

	// @ts-ignore
	let workers = Object.entries(salaries);
	let [maxName, maxSalary] = workers[0] ?? [null, 0];

	for (let i = 1; i < workers.length; i++) {
		let [name, salary] = workers[i];

		if (salary > maxSalary) {
			maxName = name;
			maxSalary = salary;
		}

	}

	return maxName;
}