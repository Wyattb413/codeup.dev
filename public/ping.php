<?php 
function pageCtrl() {
	$volleyCount = [];
	if (isset($_GET['volleyCount'])) {
		$volleyCount['volleyCount'] = $_GET['volleyCount'];
	} else {
		$volleyCount['volleyCount'] = 0;
	}
	return $volleyCount;
}

extract(pageCtrl());

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Ping (not the website)</title>
		<style type="text/css">
			body {
				background-color: black;
			}

			.tennisnet {
				position: absolute;
				margin-top: -285px;
				margin-left: 610px;
			}

			.paddle {
				position: absolute;
				margin-top: -225px;
				margin-left: -40px;
				transform: rotate(-40deg);
			}

			.paddleRotate {
				animation-name: rotatePaddle;
				animation-duration: 3s;
			}

			@keyframes rotatePaddle {
				from {transform:rotate(0deg);}
			    to {transform:rotate(360deg);}
			}

			.ball {
				position: absolute;
				margin-top: -200px;
				margin-left: 60px;
			}

			.ball2 {
				position: absolute;
				margin-top: -40px;
				margin-left: 620px;
			}

			.ballMove {
				animation-name: ball;
				animation-duration: 3s;
			}

			@keyframes ball {
			    0% {
			        transform: translatex(10px) translatey(10px)
			    }
			    100% {
			        transform: translatex(560px) translatey(160px);
			    }
			}

			h1, h2 {
				text-align: center;
				color: green;
			}

			.outerCourt {
				position: relative;
				width: 1250px;
				height: 550px;
				border-style: solid;
				border-width: 10px;
				border-color: white;
				background-color: green;
			}

			.topBarCourt {
				display: inline-block;
				width: 1250px;
				height: 50px;
				border-bottom: 5px solid white;
				background-color: green;
			}

			.bottomBarCourt {
				display: inline-block;
				position: absolute;
				bottom: 0;
				width: 1250px;
				height: 50px;
				border-top: 5px solid white;
				background-color: green;				
			}

			.leftBoxCourt {
				display: inline-block;
				position: absolute;
				top: 55px;
				height: 440px;
				width: 200px;
				border-right: 3px solid white;
				background-color: green;
			}

			.rightBoxCourt {
				display: inline-block;
				position: relative;
				float: right;
				top: -5px;
				height: 441px;
				width: 200px;
				border-left: 3px solid white;
				background-color: green;
			}

			.innerBoxCourt {
				display: inline-block;
				position: relative;
				top: -5px;
				margin-left: 16.2%;
				height: 205px;
				width: 844px;
				border-bottom: 3px solid white;
				background-color: green;
			}

		</style>
	</head>
	<body>
		<h1>Ping (not like the bing) & Pong (like chong)</h1>
		<h2>Volley Count:<?= $volleyCount ?></h2>
		<div class="outerCourt">
			<div class="topBarCourt"></div>
				<div class="innerCourt">
					<div class="leftBoxCourt">
					</div>
					<div class="rightBoxCourt"></div>
				<div class="innerBoxCourt"></div>
				</div>
			<div class="bottomBarCourt"></div>
			<img src="/img/tennisnet.png" class="tennisnet">
			<a href="http://codeup.dev/pong.php?volleyCount=<?= $volleyCount + 1 ?>" class="paddle" id="paddle">
				<div id="dom-target" style="display: none;">
				    <?php $output = $volleyCount + 1; echo htmlspecialchars($output); ?>
				</div>
				<img src="/img/tabletennispaddle.png">
			</a> 
			<a href="http://codeup.dev/ping.php?volleyCount=<?= $volleyCount = 0 ?>" class="ball" id="ball">
				<img src="/img/pingpongBall2.png">
			</a> 
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript">
			$('#paddle').click(function(e){
				event.preventDefault();
				$('#paddle').addClass('paddleRotate');
				setTimeout(function(){
					$('#ball').removeClass('ball');
					$('#ball').addClass('ball2');
				}, 2990);
				setTimeout(function(){
					var div = document.getElementById("dom-target");
				    var myData = div.textContent;
					window.location.href = "http://codeup.dev/pong.php?volleyCount="+myData;
				}, 2250);
				$('#ball').toggleClass('ballMove');

			})
		</script>
	</body>
</html>