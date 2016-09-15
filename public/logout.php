<?php 

session_start();

	require_once '../Auth.php';

	Auth::logout();

?>
<!DOCTYPE html>
<html>
<head>
    <title>Authorized</title>
</head>
<body>
	<?php include 'header.php'; ?>
	<br>
    You're Logged Out
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <?php include 'footer.php'; ?>

	<script type="text/javascript">
		setTimeout(function(){
			window.location.href = "http://codeup.dev/login.php";
		}, 1000);
	</script>

</body>
</html>