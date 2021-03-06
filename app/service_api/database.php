<?php
class database{
	public $pdo, $sql, $cursor;
	
	function Database()
	{
		$this->pdo = new PDO("mysql:host=localhost;dbname=muahangmy","root","");
		// $this->pdo = new PDO("mysql:host=mysql.hostinger.vn;dbname=u337295388_hugo","u337295388_hugo","thyThy313");
		$this->pdo->query("SET NAMES utf8");
		$this->pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	}
	
	function setQuery($sql)
	{
		$this->sql = $sql;
	}
	
	function execute($option = array())
	{
		$this->cursor = $this->pdo->prepare($this->sql);
		if($option)
		{
			for($i = 0; $i < count($option); $i++)
			{
				$this->cursor->bindParams($i + 1, $option[$i]);
			}
		}
		$this->cursor->execute();
		return $this->cursor;
	}
	
	function loadAllRow($option = array()){
		if($option)
		{
			if(!$result = $this->execute($option))
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		return $result->fetchAll(PDO::FETCH_OBJ);
	}
	
	function loadRow($option = array()){
		if($option)
		{
			if(!$result = $this->execute($option))
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		return $result->fetch(PDO::FETCH_OBJ);
	}
	
	function getLastId()
	{
		return $this->pdo->lastInsertId();
	}
	
	function disconect()
	{
		$this->cursor = null;
		$this->pdo = null;
	}
}
?>