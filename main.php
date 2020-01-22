<?php
	include 'movePages.php';
	// https://www.php.net/manual/en/function.session-set-cookie-params.php
	function startSession($time = 3600, $ses = 'PHPSESSID') {
		session_set_cookie_params($time);
		session_name($ses);
		session_start();

		// Reset the expiration time upon page load
		if (isset($_COOKIE[$ses]))
		  setcookie($ses, $_COOKIE[$ses], time() + $time, "/");
	}
	
	startSession();
	exit();
?>