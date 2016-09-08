<?php 

		function getAdjective() 
		{
			$adjectivesArray = [];
			$randomIndex = "";
			$randomAdjective = "";

			$adjectivesListFile = 'adjectivesList.txt';
			$handle = fopen($adjectivesListFile, 'r');
			$fileContent = fread($handle, filesize($adjectivesListFile));
			fclose($handle);

			$adjectivesArray = explode("\n", $fileContent);
			$randomIndex = array_rand($adjectivesArray, 1);
			$randomAdjective = $adjectivesArray[$randomIndex];
			return trim($randomAdjective);
			
		}

		function getNoun() 
		{
			$nounsArray = [];
			$randomIndex = "";
			$randomNoun = "";

			$nounsListFile = 'nounsList.txt';
			$handle = fopen($nounsListFile, 'r');
			$fileContent = trim(fread($handle, filesize($nounsListFile)));
			fclose($handle);

			$nounsArray = explode("\n", $fileContent);
			$randomIndex = array_rand($nounsArray, 1);
			$randomNoun = $nounsArray[$randomIndex];
			return trim($randomNoun);
			
		}

		function generateServerName() {
			$newArry = [];

			$newArry['randomAdjective'] = getAdjective();
			$newArry['randomNoun'] = getNoun();
			$newArry['randomlyGeneratedServerName'] = $newArry['randomAdjective'] . ' ' . $newArry['randomNoun'] . PHP_EOL;

			return $newArry['randomlyGeneratedServerName'];
		}

		function pageController($serverName){
			$someArry = [];
			$someArry['serverName'] = $serverName;
			return $someArry;
		}

		$generatedServerName = generateServerName();
		extract(pageController($generatedServerName));
?>
		

<!DOCTYPE html>
<html>
<head>
	<title>Server Name Generator</title>

	<style type="text/css">
		
		body {
			background-color: black;
			background-image: url(/img/clouds.jpeg);
			background-size: cover;
			color: white;
			text-align: center;
			padding-top: 7%;
		}

		.rainbow {
		  background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
		  background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
		  color:transparent;
		  -webkit-background-clip: text;
		  background-clip: text;
		}

	</style>

</head>
<body>

	<h1><span class="rainbow">Randomly Generated Server Name!</span></h1>

			<li><?= $serverName; ?></li>

</body>
</html>