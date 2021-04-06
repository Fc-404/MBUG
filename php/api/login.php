<?php
include_once('../fun/DB.php');
include_once('../fun/DBOP.php');

$dbObj = new DBOP(DB::create());

/**
 * * 暗号算法
 * 暂时截取 md5(user.Length) 前8位充当暗号
 */
$userLength = $dbObj->R_userLength();
$code = substr(md5($userLength), 0, 8);

if ($code != $_POST['code']){
    return 'false';
}

$result = $dbObj->C_user($_POST['name'], $_POST['pswd']);
if ($result) {
    echo 'true';
    return;
}
echo 'false';
?>