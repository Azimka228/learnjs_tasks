// TASK 1
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
//
// 	function ask(question, yes, no) {
// 		if (confirm(question)) yes()
// 		else no();
// 	}
//
// ask(
// 	"Вы согласны?",
// 	function() { alert("Вы согласились."); },
// 	function() { alert("Вы отменили выполнение."); }
// );

//answer
const ask = (question, yes, no) =>{
		if (confirm(question)) yes()
		else no();
	}

	// В ответе выше я это сделал для практики

ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.")
);

