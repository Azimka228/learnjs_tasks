// TASK 1
// Почему в коде ниже return false не работает?
//
// 	<script>
// 		function handler() {
// 			alert( "..." );
// 			return false;
// 		}
// 	</script>
//
// 	<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

//answer
// <script>
// 	function handler(e) {
// 		alert("...");
// 		e.preventDefault();
// 	}
// </script>
//
// <a href="https://w3.org" onclick="handler(e)">w3.org</a>