<?php
/**
 * * 数据库操作类
 */
include_once(dirname(__FILE__).'\DB.php');

class DBOP {
    private $conn = null;

    public function __construct($DB)
    {
        if ($DB instanceof DB) {
            $this->conn = $DB->getConnect();
        }
        else {
            die('Parameter not expect;');
        }
    }

    /**
     * * 名字索引用户表
     */
    public function R_user($name) {
        $sql = "SELECT * FROM USER WHERE user.name='$name'";

        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            return mysqli_fetch_all($result, MYSQLI_ASSOC);
        }
        return false;
    }

    /**
     * * 获取用户数量
     */
    public function R_userLength() {
        $sql = "SELECT COUNT(*) FROM USER";

        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            return mysqli_fetch_array($result)[0];
        }
    }

    /**
     * * 用户注册
     * ! 仅仅在前端加入用户名和密码检测，非常危险
     * TODO 使用正则表达式检测用户名和密码是否合法
     */
    public function C_user($name, $pswd) {
        $sql = "INSERT INTO USER (user.name, user.pswd) VALUES('$name', '$pswd')";

        $result = mysqli_query($this->conn, $sql);
        if ($result) {
            return true;
        }
        return false;
    }
}
?>