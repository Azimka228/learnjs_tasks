// TASK 6
// Есть дерево, организованное в виде вложенных списков ul/li.
//
// 	Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

//answer
let lis:any = document.getElementsByTagName('li');

for (let li of lis) {
	let descendantsCount = li.getElementsByTagName('li').length;
	if (!descendantsCount) continue;

	li.firstChild.data += ' [' + descendantsCount + ']';
}