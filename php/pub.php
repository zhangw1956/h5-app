<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
	
	$msg = json_decode(file_get_contents('php://input'),true);
	$succ='{
		"id":"000",
		"price":{
			"now_price":100,
			"past_price":200
		},
		"src":"http://pic31.nipic.com/20130730/789607_232633369196_2.jpg",
		"name":"商品名称",
		"number_lost":"20",
		"post_cost":"20",
		"post_address":"北京市",
		"is":"是"

	}';
	$err='{"ERROR":"网络故障"}';
	if(true){
		echo $succ;
	}else{
		echo $err;
	}
?>