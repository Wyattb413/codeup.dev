<?php
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>login_form</title>
	</head>
	<body>
		<form method="POST" action="/login_form.php">
		<h1>Login</h1>
		<p>
			<label for="login_email">Email:</label>
			<input id="login_email" name="login_email" type="text" placeholder="Enter Login Email Here">
			<br>
			<label for="login_password">Password:</label>
			<input id="login_password" name="login_password" type="password" placeholder="Enter Login Password">
		</p>
		<p>
			<input type="checkbox" id="remember_me" name="remember_me" value="yes">
			<label for="remember_me">Remeber Me</label>
		</p>
		</form>
	</body>
</html>