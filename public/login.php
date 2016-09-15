<?php 
	session_start();

	require '../Input.php';
	require '../Auth.php';

	function pageCtrl() {

		if (Auth::check()) {
			Auth::redirect('/authorized.php');
		}

		if (Auth::attempt((Input::get('userName')), (Input::get('password')))) {
			Auth::redirect('/authorized.php');
		}
			
		$invalidMess = 'Invalid UserName and/or Password';
		return ['invalidMessage' => $invalidMess];

	}

	extract(pageCtrl());

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
	</head>
	<body>
		<?php include 'header.php'; ?>
		<?php include 'navbar.php'; ?>
		<br>
		<h2><?= $invalidMessage; ?></h2>
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