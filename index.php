<?php ob_start(); ?>
<?php include "includes/db.php"; ?>
<?php session_start(); ?>

<?php 

if(isset($_POST['login'])) {
  $_SESSION['username'] = 'Admin Guest';
  $_SESSION['firstName'] = $db_user_firstName;
  $_SESSION['lastName'] = $db_user_lastName;
  $_SESSION['user_role'] = 'admin';
}

?>

<?php include("index.html"); ?>