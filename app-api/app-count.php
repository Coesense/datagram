<?php
//header('Content-type: application/json');

class data {

	public function __construct(){}
	
	/**
	* Data from teleportd
	* @JSON
	*/
	public function getData($query_tab = array()){
		$src_tab = array('instagram','foursquare','twimg','yfrog');
		for ($i=0; $i<4; $i++) {
			$c = curl_init();
			curl_setopt($c, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7');
			curl_setopt($c, CURLOPT_URL, 'http://api.teleportd.com/search?user_key=2992028a9d50c73d3132a3fc89221b4e&str='.$query_tab['hash'].'src:'.$src_tab[$i].'&loc='.$query_tab['loc']);
			curl_setopt($c, CURLOPT_TIMEOUT,15); 
			curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($c, CURLOPT_HEADER, false);
			$transit_tab = json_decode(curl_exec($c));
			$main_tab[$src_tab[$i]] = $transit_tab->total;
		}
		return json_encode($main_tab);
	}
	
	/**
	* Query cleaned
	* @string
	*/
	public function treatQuery($hash,$loc){
		return $query_tab = array(
			"hash" => $hash,
			"loc"  => $loc
		);
	}

}


$api_data = new data();
echo $api_data->getData($api_data->treatQuery(preg_replace('#\ #', '%20', $_POST['hash']),$_POST['loc']));

?>