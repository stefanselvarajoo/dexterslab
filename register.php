<?php
include 'dbvalues.php';

session_start();
// Change this to your connection info.
$con = OpenCon();

	// Now we check if the data was submitted, isset() function will check if the data exists.
if (!isset($_POST['usernamesignup'], $_POST['passwordsignup'], $_POST['emailsignup'])) {
	// Could not get the data that should have been sent.
	die ('Please complete the registration form!');
}
// Make sure the submitted registration values are not empty.
if (empty($_POST['usernamesignup']) || empty($_POST['passwordsignup']) || empty($_POST['emailsignup'])) {
	// One or more values are empty.
	die ('Please complete the registration form');
}

// We need to check if the account with that username exists.
if ($stmt = $con->prepare('SELECT id, password FROM accounts WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $_POST['usernamesignup']);
	$stmt->execute();
	$stmt->store_result();
	// Store the result so we can check if the account exists in the database.
	if ($stmt->num_rows > 0) {
		// Username already exists
		echo 'Username exists, please choose another!';
	} else {
		// Username doesnt exists, insert new account
if ($stmt = $con->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {
	// We do not want to expose passwords in our database, so hash the password and use password_verify when a user logs in.
	$password = password_hash($_POST['passwordsignup'], PASSWORD_DEFAULT);
	$stmt->bind_param('sss', $_POST['usernamesignup'], $password, $_POST['emailsignup']);
	$stmt->execute();
	echo 'You have successfully registered, you can now login!';
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
}
	}
	$stmt->close();
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
}
CloseCon($con);
?>