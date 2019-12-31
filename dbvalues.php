<?php
/* edit this space for database connection */
 function OpenCon()
 {
 $DATABASE_HOST = "localhost";
 $DATABASE_USER = "root";
 $DATABASE_PASS = "1234";
 $DATABASE_NAME = "futurelab";


 $conn = new mysqli($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS,$DATABASE_NAME) or die("Connect failed: %s\n". $conn -> error);

 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
?>