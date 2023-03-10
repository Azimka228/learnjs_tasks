// TASK 4
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
//
// 	Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.
//
// 	Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, откуда оно взято.
//
// 	Например, мы хотим отслеживать движения мыши.
//
// 	В браузере мы можем объявить функцию, которая будет запускаться при каждом движении указателя и получать его местоположение. Во время активного использования мыши эта функция запускается очень часто, это может происходить около 100 раз в секунду (каждые 10 мс).

//answer
function throttle(func, ms) {

	let isThrottled = false,
		savedArgs,
		savedThis;

	function wrapper() {

		if (isThrottled) { // (2)
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments); // (1)

		isThrottled = true;

		setTimeout(function () {
			isThrottled = false; // (3)
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}