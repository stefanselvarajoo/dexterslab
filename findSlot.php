<?php
include 'dbvalues.php';

session_start();
// Change this to your connection info.
$con = OpenCon();

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT rackID,slotID FROM rack')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	//$stmt->bind_param('i', $_POST['rackID']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();
}
$result = mysqli_stmt_get_result($stmt);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            foreach ($row as $r)
            {
                print "$r \n";
            }
        }
mysqli_stmt_close($stmt);

CloseCon($con);
?>