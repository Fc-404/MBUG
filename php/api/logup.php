<?php
include_once('../fun/DB.php');
include_once('../fun/DBOP.php');

$dbObj = new DBOP(DB::create());

$results = $dbObj->R_user($_POST['name']);
foreach ($results as $result) {
    if ($result['pswd'] == $_POST['pswd']) {
        setcookie('pswd', md5($_POST['pswd']));
        echo $result['id'];
        return;
    }
}
echo 'false';
?>