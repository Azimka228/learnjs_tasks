// TASK 2
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
//
// 	Так это должно работать:

//answer
let contents = document.querySelector(".contents") as HTMLElement

contents.onclick = function (event) {

	function handleLink(href) {
		let isLeaving = confirm(`Leave for ${href}?`);
		if (!isLeaving) {
			event.preventDefault()
		}
		;
	}
	const target = (event.target as HTMLElement)
	let parentContainer = target.closest("a");

	if (parentContainer && contents.contains(target)) {
		return handleLink(parentContainer.getAttribute("href"));
	}
};