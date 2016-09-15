<?php
require_once 'Log.php';

class Auth 
{
	 public static $username = 'guest';
	 public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

	 public static function attempt($username, $password)
	 {
	 	$log = new Log();
	 	if ($username == self::$username && password_verify($password, self::$password)) {
	 		$_SESSION['user_is_logged_in'] = $username;
			$log->info("{$username} has logged in.");
			return true;
	 	} elseif (empty($_SESSION)) {
	 		$log->info("{$username} has logged out.");
	 	} 
	 	else {
	 		$log->error("{$username} has failed to log in.");
	 		return false;
	 	}

	 }

	 public static function check()
	 {
	 	return (isset($_SESSION['user_is_logged_in']));
	 }

	 public static function user()
	 {
	 	$currentlyLoggedInUser = $_SESSION['user_is_logged_in'];
	 	return $currentlyLoggedInUser;
	 }

	 public static function logout()
	 {
	 	function clearSession()
		{
		    // clear $_SESSION array
		    session_unset();

		    // delete session data on the server
		    session_destroy();

		    // ensure client is sent a new session cookie
		    session_regenerate_id();

		    // start a new session - session_destroy() ended our previous session so
		    // if we want to store any new data in $_SESSION we must start a new one
		    session_start();
		}

		clearSession();
	 }

	 public static function redirect($url)
	 {
	 	header("Location: {$url}");
		die();
	 }
}