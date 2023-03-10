// TASK 2
// Если elem – произвольный узел DOM-элемента…
//
// Правда, что elem.lastChild.nextSibling всегда равен null?
// 	Правда, что elem.children[0].previousSibling всегда равен null ?

//answer
// 1. Да, Верно. Элемент elem.lastChild всегда последний и у него нет nextSibling.
// 2. Нет, Неверно. Потому что elem.children[0] – потомок-элемент. перед ним ещё могут быть эелменты, тот же текст.

