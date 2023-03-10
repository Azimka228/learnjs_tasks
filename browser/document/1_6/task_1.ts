// TASK 1
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
//
// <!DOCTYPE html>
// <html>
// 	<body>
//
// 		<div data-widget-name="menu">Choose the genre</div>
//
// <script>
// /* your code */
// </script>
// </body>
// </html>


//answer
let element = document.querySelector('[data-widget-name]');

alert(element.getAttribute('data-widget-name'));