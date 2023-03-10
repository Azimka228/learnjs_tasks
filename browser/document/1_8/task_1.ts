// TASK 1
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
//
// 	Пример объекта options:
//
// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// 	showNotification({
// 		top: 10, // 10px от верхней границы окна (по умолчанию 0px)
// 		right: 10, // 10px от правого края окна (по умолчанию 0px)
// 		html: "Hello!", // HTML-уведомление
// 		className: "welcome" // дополнительный класс для div (необязательно)
// 	});

//answer
function showNotification({top = 0, right = 0, className, html}) {

	let notification = document.createElement('div');
	notification.className = "notification";
	if (className) {
		notification.classList.add(className);
	}

	notification.style.top = top + 'px';
	notification.style.right = right + 'px';

	notification.innerHTML = html;
	document.body.append(notification);

	setTimeout(() => notification.remove(), 1500);
}