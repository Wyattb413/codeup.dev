<?php 

session_start();

require '../Auth.php';

if (!Auth::check()) {
	Auth::redirect('/login.php');
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Authorized</title>
</head>
<body>
	<?php include 'header.php'; ?>
	<?php include 'navbar.php'; ?>
	<br>
    You're Logged In, Enjoy!
    <br>
    <a href="http://codeup.dev/logout.php">Log Out</a>
</body>
</html>