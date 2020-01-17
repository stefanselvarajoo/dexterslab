<?php
include 'dbvalues.php';

session_start();
// Change this to your connection info.
$con = OpenCon();

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT rackID,slotID FROM rack WHERE slotID < 32')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	//$stmt->bind_param('s', $_POST['rackID']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	//$stmt->store_result();
}

$result = $stmt->get_result();
$array = array();
while ($row = $result->fetch_assoc()) {
        //printf("%s \n %s \n", $row["rackID"], $row["slotID"]);
		$array[$row['rackID']][] = $row['slotID'];
}

echo (json_encode($array));
//echo $data;
CloseCon($con);
?>