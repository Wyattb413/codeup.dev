<?php 
	session_start();
	
	function pageCtrl() {
		$correctUserName = 'SecretFBIAgent';
		$correctPassword = '1212UndergroundBunker';	

		$userName = (isset($_POST['userName'])) ? $_POST['userName'] : '';
		$password = (isset($_POST['password'])) ? $_POST['password'] : '';


		if ($userName == $correctUserName && $password == $correctPassword) {
			$_SESSION['logged_in_user'] = $userName;
			$_SESSION['user_is_logged_in'] = true;
			header("Location: /authorized.php");
			die;
		} else  if (!empty($_POST)){
			echo 'Invalid UserName and/or Password';
		}

	}

	pageCtrl();

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
	</head>
	<body>
		<form action="/login.php" method="post">
			User Name:
			<input type="text" name="userName">
			<hr>
			Password:
			<input type="text" name="password">
			<br>
			<input type="submit" name="submit">
		</form>
	</body>
</html>