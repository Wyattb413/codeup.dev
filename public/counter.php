<?php 

function pageCtrl() {
	$numCount = [];
	if (isset($_GET['numCount'])) {
		$numCount['number'] = $_GET['numCount'];
	} else {
		$numCount['number'] = 0;
	}
	return $numCount;
}

extract(pageCtrl());

?>


<!DOCTYPE html>
<html>
	<head>
		<title>Counter PHP</title>
		<style type="text/css">
			body {
				text-align: center;
				background: url(/img/cave.jpeg);
				background-color: black;
				background-size: cover;
			}

			h1 {
				color: white;
				margin-top: 10%;
			}

			h2 {
				margin-top: 5%;
			}

			.button1 {
			    text-decoration: none; 
			    font: menu;
			    display: inline-block; 
			    padding: 5px 15px;
			    background: blue; 
			    color: white;
			    border-style: solid; 
			    border-width: 10px;
			    border-color: black;
			}

			.button2 {
			    text-decoration: none; 
			    font: menu;
			    display: inline-block; 
			    padding: 5px 10px;
			    background: blue; 
			    color: white;
			    border-style: solid; 
			    border-width: 10px;
			    border-color: red;
			}

			a:active {
			    border-color: white;
			}
		</style>
	</head>
	<body>
		<h1>Welcome to My Counter!</h1>
		<h2><?= $number; ?></h2>
		<a class="button1" href="http://codeup.dev/counter.php?numCount=<?= $number + 1 ?>">up!</a>
		<a class="button2" href="http://codeup.dev/counter.php?numCount=<?= $number - 1 ?>">¡uʍop</a>
	</body>
</html>