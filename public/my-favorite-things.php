<!DOCTYPE html>
<html>
<head>
	<title>My Favorite Things</title>
	<style type="text/css">
		
		body {
			background-image: url(/img/earth.jpeg);
			background-size: cover; 
		}

		table {
			text-align: center;
		}

		.datatable tr:nth-child(odd) {
		  background-color: maroon;
		  color: #fff;
		}

	</style>
</head>
<body>

	<h1>My Favorite Things</h1>

	<?php 

		function getFiveFavoriteThings() {
			$file = 'my-favorite-things.txt';
			$handle = fopen($file, 'r');
			$fileContent = fread($handle, filesize($file));
			fclose($handle);

			$favoriteThingsArray = explode("\n", $fileContent);
			return $favoriteThingsArray;
		}

		$fiveFavoriteThings = getFiveFavoriteThings();
	?>

		<!-- <table border="1">
			<?php for ($i=0; $i < sizeof($fiveFavoriteThings); $i++): ?>
					<tr>
					<td><?php echo "$fiveFavoriteThings[$i]" ?></td>
					</tr>
			<?php endfor; ?>
		</table> -->

		<?php 
		$tableStr = "<table border='1' class='datatable'>";

		for ($i=0; $i < sizeof($fiveFavoriteThings); $i++) {
				$tableStr .= "<tr>";
				$tableStr .= "<td>{$fiveFavoriteThings[$i]}</td>";
				$tableStr .= "</tr>";
		} 
		$tableStr .= "</table>";

		echo $tableStr;
		?>





</body>
</html>