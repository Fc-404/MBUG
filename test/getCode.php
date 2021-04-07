<?php
include_once('../php/fun/DB.php');
include_once('../php/fun/DBOP.php');

$dbObj = new DBOP(DB::create());

/**
 * * 暗号算法
 * 暂时截取 md5(user.Length) 前8位充当暗号
 */
$userLength = $dbObj->R_userLength();
$code = substr(md5($userLength), 0, 8);
echo $code;
//echo md5('123123');
?>