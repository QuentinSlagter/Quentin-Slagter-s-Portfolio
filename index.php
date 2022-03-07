<?php ob_start(); ?>
<?php include "includes/db.php"; ?>
<?php session_start(); ?>

<?php 

  $_SESSION['username'] = 'Admin Guest';
  $_SESSION['user_role'] = 'admin';


?>

<?php include("index.html"); ?>