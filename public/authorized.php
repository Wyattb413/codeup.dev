<?php 

session_start();

if (!$_SESSION['user_is_logged_in']) {
	header("Location: /login.php");
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Authorized</title>
</head>
<body>
    You're Logged In, Enjoy!
    <br>
    <a href="http://codeup.dev/logout.php">Log Out</a>
</body>
</html>