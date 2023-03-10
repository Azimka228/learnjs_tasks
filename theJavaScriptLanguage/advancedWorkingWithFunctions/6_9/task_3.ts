// TASK 3

const debounce = (callback: () => void, wait: number) => {
	let timeoutId: any = null;
	return (...args) => {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			return callback.apply(null, args);
		}, wait);
	};
}