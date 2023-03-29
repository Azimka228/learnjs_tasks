// TASK 1
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
//
// function loadJson(url) {
// 	return fetch(url)
// 		.then(response => {
// 			if (response.status == 200) {
// 				return response.json();
// 			} else {
// 				throw new Error(response.status);
// 			}
// 		})
// }
//
// loadJson('no-such-user.json') // (3)
// 	.catch(alert); // Error: 404

//answer
async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200) {
		let json = await response.json(); 
		return json;
	}

	throw new Error(String(response.status));
}

loadJson('no-such-user.json')
	.catch(alert);