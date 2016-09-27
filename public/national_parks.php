<?php

require '../php/park_migration_config.php';
require '../php/db_connect.php';
require '../php/Input.php';



function pageCtrl($dbc) 
{
	//Limits pages for table
	$limit = 5;

	$sql = 'SELECT * FROM national_parks';
	//Using the static class Input from ../php/Input.php, gets page number from get request  
	//and if the number passed in the get request is less than zero, it replaces it with one
	$page = (Input::get('page', 1) < 0) ? 1 : Input::get('page', 1);

	$currentPage = Input::get('page');
	$offset = ($page - 1) * ($limit);
	//Appeneds to query stated above to limit number of results and the offset
	$sql .= " LIMIT :limit OFFSET :offset";	

	$stmt = $dbc->prepare($sql);
	$stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
	$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
	$stmt->execute();
	$parks = $stmt->fetchAll(PDO::FETCH_ASSOC);

	$name = '';
	$location = '';
	$dateEstablished = '';
	$areaInAcres = '';
	$description = '';

	$totalParks = $dbc->query('SELECT COUNT(*) FROM national_parks')->fetchColumn();

	$totalPages = ceil($totalParks / $limit);

	$fields = array('parkName', 'parkLocation', 'dateEstablished', 'areaInAcres', 'description');

	$error = false;

	if(isset($_POST['Submit'])) {
		foreach($fields as $fieldname) {
			if(!isset($_POST[$fieldname]) || empty($_POST[$fieldname])) {
				echo 'Input Field ' . $fieldname . ' Is Empty! <br>';
				$error = true;
			} 
		}
	}

	if(!$error) {
		if(Input::hasPost()) {
			$parkName = Input::get('parkName');
			$parkLocation = Input::get('parkLocation');
			$dateEstablished = Input::get('dateEstablished');
			$areaInAcres = Input::get('areaInAcres');
			$description = Input::get('description');
			$sql = "INSERT INTO national_parks (name, location, date_established, area_in_acres, description)
			VALUES (:parkName, :parkLocation, :dateEstablished, :areaInAcres, :description)";
			$stmt = $dbc->prepare($sql);
			$stmt->execute(array(':parkName' => $parkName, ':parkLocation' => $parkLocation, ':dateEstablished' => $dateEstablished, ':areaInAcres' => $areaInAcres, ':description' => $description));
		}
	}

	return [
		'currentPage' => $currentPage,
		'parks' => $parks,
		'name' => $name,
		'location' => $location,
		'dateEstablished' => $dateEstablished,
		'areaInAcres' => $areaInAcres,
		'description' => $description,
		'totalPages' => $totalPages
	];
}

extract(pageCtrl($dbc));

?>

<!DOCTYPE html>
<html>
	<head>
		<title>National Parks</title>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<style>
			body html {
				width: 100%;
				margin: 0;
				padding: 0;
			}
			body {
				/*background-image: url(img/grassPond.jpeg);*/
				background-image: url(img/seasideCliffs.jpeg);
				background-size: cover;
				opacity: .85;
				color: #566246;
				background-color: black;
			}
			.pagerDiv {
				text-align: center;
			}
			.customHeader {
				color: #a00000;
				text-align: center;
				margin: 0;
			}
			table {
			}
			thead {
				background-color: #566246; 
				color: white;
			}
			tbody {
				background-color: #111111; 
				color: #288c85;
			}
			.content {
				padding-bottom: 1rem;
				background-color: #F3EACB;
				/*text-align: center;*/
			}
			th {
				text-align: center;
			}
			.customButton {
				width: 100%;
				background-color: #566246;
				color: white;
			}
			.customButton:hover {
				background-color: black;
				color: #a00000;
			}
		</style>
	</head>
	<body>
		<div class="content">
			<h1 class="customHeader">National Parks</h1>
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Location</th>
						<th>Date Established</th>
						<th>Area In Acres</th>
						<th>Park Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<?php foreach ($parks as $park): ?>
							<td><?= htmlspecialchars(strip_tags($park['name'])) ?></td>
							<td><?= htmlspecialchars(strip_tags($park['location'])) ?></td>
							<td><?= htmlspecialchars(strip_tags($park['date_established'])) ?></td>
							<td><?= htmlspecialchars(strip_tags(number_format($park['area_in_acres']))) ?></td>
							<td><?= htmlspecialchars(strip_tags($park['description'])) ?></td>
					</tr><?php endforeach; ?>
				</tbody>
			</table>

			<div class="pagerDiv">
				<ul class="pagination">

				<!-- Adds previous button if user has navigated to a parge greater than 1 -->
					<?php if($currentPage > 1): ?>
						<li><a href="?page=<?= htmlspecialchars(strip_tags($currentPage-1)) ?>"><<</a></li>
					<?php endif; ?>

				<!-- Creates pager navigation buttons -->
					<?php for($i = 1; $i <= $totalPages; $i++) { ?>
						<li><a href="?page=<?= htmlspecialchars(strip_tags($i)) ?>"><?= $i ?></a></li>
					<?php } ?>

				<!-- Add next button if user has navigated to a page less than $totalpages -->
					<?php if($currentPage < $totalPages): ?>
						<li><a href="?page=<?= htmlspecialchars(strip_tags($currentPage+1)) ?>">>></a></li>
					<?php endif; ?>

				</ul>
			</div>

			<form action="national_parks.php" method="post">
				<div class="form-group">
					<label for="parkName">Park Name:</label>
					<input type="text" class="form-control" id="parkName" name="parkName" placeholder="Enter Park Name Here">
				</div>
				<div class="form-group">
					<label for="parkLocation">Park Location:</label>
					<input type="text" class="form-control" id="parkLocation" name="parkLocation" placeholder="Enter Park Location Here">
				</div>
				<div class="form-group">
					<label for="dateEstablished">Date Established:</label>
					<input type="text" class="form-control" id="dateEstablished" name="dateEstablished" placeholder="Enter Date Established Here Ex: YYYY-MM-DD">
				</div>
				<div class="form-group">
					<label for="areaInAcres">Area In Acres:</label>
					<input type="text" class="form-control" id="areaInAcres" name="areaInAcres" placeholder="Enter The Area Of The Park In Acres">
				</div>
				<div class="form-group">
					<label for="description">Description:</label>
					<input type="text" class="form-control" id="description" name="description" placeholder="Enter A Brief Description Of The Park">
				</div>
				<button type="submit" class="btn btn-default customButton">Add Park</button>
			</form>

		</div>
	</body>
</html>