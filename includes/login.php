<?php ob_start(); ?>
<?php include "db.php"; ?>
<?php session_start(); ?>

<?php 

if(isset($_POST['login'])) {
  $_SESSION['username'] = 'Admin Guest';
  $_SESSION['firstName'] = $db_user_firstName;
  $_SESSION['lastName'] = $db_user_lastName;
  $_SESSION['user_role'] = 'admin';

  header("Location: https://power-of-programming.herokuapp.com/admin/admin_index.php");
}

?>