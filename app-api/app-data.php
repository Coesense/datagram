<?php
//header('Content-type: application/json');

class data {

	public function __construct(){}
	
	/**
	* Data from teleportd
	* @JSON
	*/
	public function getData($query_tab = array()){
		$c = curl_init();
		curl_setopt($c, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7');
		curl_setopt($c, CURLOPT_URL, 'http://api.teleportd.com/search?user_key=5f7d04a0d538f0504954bc96b9c4ca88&str='.$query_tab['hash'].'src:'.$query_tab['src'].'&loc='.$query_tab['loc'].'&size=300');
		curl_setopt($c, CURLOPT_TIMEOUT,15); 
		curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($c, CURLOPT_HEADER, false);
		return curl_exec($c);	
	}
	
	/**
	* Query cleaned
	* @string
	*/
	public function treatQuery($hash,$src,$loc){
		return $query_tab = array(
			"hash" => $hash,
			"src"  => $src,
			"loc"  => $loc
		);
	}

}


$api_data = new data();
echo $api_data->getData($api_data->treatQuery($_POST['hash'],$_POST['src'],$_POST['loc']));




?>