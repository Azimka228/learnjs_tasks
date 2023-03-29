// TASK 2
// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
//
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
//
// 	class HttpError extends Error {
// 	constructor(response) {
// 		super(`${response.status} for ${response.url}`);
// 		this.name = 'HttpError';
// 		this.response = response;
// 	}
// }
//
// function loadJson(url) {
// 	return fetch(url)
// 		.then(response => {
// 			if (response.status == 200) {
// 				return response.json();
// 			} else {
// 				throw new HttpError(response);
// 			}
// 		})
// }
//
// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
// 	let name = prompt("Введите логин?", "iliakan");
//
// 	return loadJson(`https://api.github.com/users/${name}`)
// 		.then(user => {
// 			alert(`Полное имя: ${user.name}.`);
// 			return user;
// 		})
// 		.catch(err => {
// 			if (err instanceof HttpError && err.response.status == 404) {
// 				alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
// 				return demoGithubUser();
// 			} else {
// 				throw err;
// 			}
// 		});
// }
//
// demoGithubUser();

//answer
class HttpError extends Error {
	response: any;

	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = "HttpError";
		this.response = response;
	}
}

async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
		return response.json();
	} else {
		throw new HttpError(response);
	}
}

async function demoGithubUser() {

	let user;
	while (true) {
		let name = prompt("Введите логин?", "iliakan");

		try {
			user = await loadJson(`https://api.github.com/users/${name}`);
			break;
		} catch (err) {
			if (err instanceof HttpError && err.response.status == 404) {
				alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
			} else {
				throw err;
			}
		}
	}

	alert(`Полное имя: ${user.name}.`);
	return user;
}

demoGithubUser();