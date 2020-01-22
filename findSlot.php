<?php
include 'dbvalues.php';

session_start();
// Change this to your connection info.
$con = OpenCon();

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT * FROM rack WHERE slotID < 4294967295')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	//$stmt->bind_param('s', $_POST['rackID']);
	$stmt->execute();
}

$result = $stmt->get_result();
$stmt->close();
$array = array();
while ($row = $result->fetch_assoc())
		$array[$row['rackID']][] = $row['slotID'];

CloseCon($con);
echo (json_encode($array));
?>