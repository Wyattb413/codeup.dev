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
		<title>Ping (like chong)</title>
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
				margin-top: 150px;
				margin-left: 1100px;
				transform: rotate(30deg);
			}

			.ball {
				position: absolute;
				margin-top: -30px;
				margin-left: 625px;
				animation-name: ballMoveOnPageLoad;
				animation-duration: 4s;
			}

			.ball2 {
				position: absolute;
				margin-top: 168px;
				margin-left: 1180px;
			}

			.ball3 {
				animation-name: ballMoveAfterPageLoad;
				animation-duration: 3s;
			}

			.ball4 {
				position: absolute;
				margin-top: -30px;
				margin-left: 625px;
				animation-name: ballMoveAfterClick;
				animation-duration: 3s;
			}

			.ball5 {
				position: absolute;
				margin-top: -200px;
				margin-left: 60px;
			}

			@keyframes ballMoveOnPageLoad {
				0% {
			        transform: translatex(10px) translatey(10px)
			    }
			    100% {
			        transform: translatex(555px) translatey(197.5px);
			    }
			}

			@keyframes ballMoveAfterPageLoad {
				0% {
			        transform: translatex(10px) translatey(10px)
			    }
			    100% {
			        transform: translatex(-555px) translatey(-196px);
			    }
			}

			@keyframes ballMoveAfterClick {
				0% {
			        transform: translatex(10px) translatey(10px);
			    }
			    100% {
			        transform: translatex(-590px) translatey(-170px)
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
				width: 843.5px;
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
					<div class="leftBoxCourt"></div>
					<div class="rightBoxCourt">
					</div>
				<div class="innerBoxCourt"></div>
				</div>
			<div class="bottomBarCourt"></div>
			<img src="/img/tennisnet.png" class="tennisnet">
			<a href="http://codeup.dev/ping.php?volleyCount=<?= $volleyCount + 1 ?>" class="text1">
				<div id="dom-target" style="display: none;">
					<?php 
				        $output = $volleyCount + 1; //Again, do some operation, get the output.
				        echo htmlspecialchars($output); /* You have to escape because the result
				                                           will not be valid HTML otherwise. */
				    ?>
				</div>
				<img src="/img/tabletennispaddleBlack.png" class="paddle" id="paddle">
			</a>
			<a href="http://codeup.dev/ping.php?volleyCount=<?= $volleyCount = 0 ?>" class="text2">
				<img src="/img/pingpongball.png" class="ball" id="ball">
			</a>

		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript">
			setTimeout(function(){
				$('#ball').removeClass('ball');
				$('#ball').addClass('ball2');
			}, 3900);
			$('#paddle').click(function(e){
				event.preventDefault();
				setTimeout(function(){
					$('#ball').removeClass('ball2');
					$('#ball').addClass('ball');
				}, 2990);
				setTimeout(function(){
					var image2 = "/img/pingpongball2.png"
					$('#ball').attr('src', image2);

				}, 2990);
				setTimeout(function(){
					$('#ball').removeClass('ball3');
					$('#ball').removeClass('ball');
					$('#ball').addClass('ball4');
				}, 2100);
				$('#ball').addClass('ball3');
				setTimeout(function(){
					var div = document.getElementById("dom-target");
				    var myData = div.textContent;
					window.location.href = "http://codeup.dev/ping.php?volleyCount=" + myData;
				}, 4200);

			})
		</script>
	</body>
</html>