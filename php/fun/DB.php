<?php
/**
 * * 单例数据库连接类
 */
class DB
{
    var $host = null;
    var $port = null;
    var $db = null;
    var $user = null;
    var $pswd = null;
    var $connect = null;

    static $object = null;

    //make this private, prevent use new word create object
    private function __construct()
    {
        //read ini file
        $DBInfo = parse_ini_file(dirname(__FILE__).'\DBInfo.ini');

        $this->host = $DBInfo['host'];
        $this->port = $DBInfo['port'];
        $this->db = $DBInfo['db'];
        $this->user = $DBInfo['user'];
        $this->pswd = $DBInfo['pswd'];

        //connect DB
        $this->connect = new mysqli($this->host, $this->user, $this->pswd, $this->db, $this->port);

        //检查数据库连接是否成功
        if ($this->connect)
        {
            //print_r($this->connect);
        }
        else
        {
            die("DB connect fail:" . mysqli_connect_error());
        }
    }
    //make this private, prevent use new word create object
    private function __clone()
    {}

    //单例模式
    static function create(){
        if (!(self::$object instanceof self))
        {
            self::$object = new self();
        }
        return self::$object;
    }

    //返回连接
    public function getConnect()
    {
        return $this->connect;
    }
}
?>