<?php
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Registration Form</title>
	</head>
	<body>
		<h1 style="text-align:center">Registration Form</h1>
		<hr>
		<form method="POST" style="text-align:center">
			<p>
			<label for="first_name">First Name:</label>
			<input type="text" id="first_name" name="first_name" placeholder="Enter Your First Name">
			<br>
			<label for="last_name">Last Name:</label>
			<input type="text" id="last_name" name="last_name" placeholder="Enter Your Last Name">
			<br>
			<label for="email">Email Address:</label>
			<input type="text" id="email" name="email" placeholder="Enter Your Email Address">
			<br>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" placeholder="Desired Username">
			<br>
			<label for="password">Password:</label>
			<input type="text" id="password" name="password" placeholder="Enter Your Password">
			<br>
			<label for="password_confirm">Confirm Password</label>
			<input type="text" id="password_confirm" name="password_confirm" placeholder="Confirm Password">
			</p>
			<p>
				<input type="checkbox" checked>Sign me up to recieve the newsletter
			</p>
		</form>
	</body>
</html>