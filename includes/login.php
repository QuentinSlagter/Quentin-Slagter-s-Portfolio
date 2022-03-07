<?php ob_start(); ?>
<?php session_start(); ?>

<?php 

if(isset($_POST['login'])) {

  header("Location: https://power-of-programming.herokuapp.com/admin/admin_index.php");
}

?>