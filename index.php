<?php

	// Check if there is error.json ===================================================================
	if(file_exists("data/error.json")){
		print_r(" Found an error file so check if 24h are passed ");
		$timeNew=time();
		$timePast=(int) file_get_contents("data/timeError.txt");
		if($timeNew-86400>$timePast){
			//24h are passed, so we have to retry, as if an error there isn't
			print_r(" 24h are passed ");
			useAccessToken();
		}
	}else{
		print_r(" no file error found ");
		// qui guardo se son passati 5 minuti. altrimenti faccio niente e rimane l'ultimo data.json
		$timeNew=time();
		$timePast=(int) file_get_contents("data/lastUse.txt");
		if($timeNew-5>$timePast){
			$timeString=(string)$timeNew;
			file_put_contents('data/lastUse.txt', $timeString);
			print_r(" 5 minutes are passed ");
			useAccessToken();
		}
		
	}

	// Use Access token and get a new file.json =======================================================
	function useAccessToken(){
		$url="https://graph.facebook.com/532688713470464/ratings?&access_token=CAAMwx5EML8UBAAU2ZBatfyqpNcmvcdvz7VgjOgoXpG7tNwFaulPOG56gm9HBfJHI28gbE46dZBJ4wdLLO9UVFlsZCistYn5iYmC3hxhHobqPxScIF3ZA83IHd2z5OmB25KdjhjldZCk291x8IBY9ItUc1OtfOhWC3jy0v4AFwtJbPoTPZAwQSMZAI15FcZCZBrALZCfRVYUEy3ZAkXAwrXFlgeZC";
		$ch=curl_init(); //  Initiate curl
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Will return the response, if false it print the response
		curl_setopt($ch, CURLOPT_URL, $url); // Set the url
		$result=curl_exec($ch); // Execute
		curl_close($ch); // Closing
		file_put_contents('data/error.json', $result);


		//now I want to verify if the file have an error
		$file=file_get_contents("data/error.json");
		print_r(" sono qua dentro l'useAccessToken ");


		$data=json_decode($file,true);
		if(array_key_exists('error', $data)){
			print_r(" There is an error with this token, if there is a error.json is the second time and i have to delete the data.json ");
			if(file_exists("data/error.json")){
				unlink('data/data.json');
			}
			//now I take the time, and in the next call I'll ceck if 24h is passed.
			$timeInt=time();
			$timeString=(string)$timeInt;
			file_put_contents('data/timeError.txt', $timeString);
		}else{
			print_r(" There is no error, so save the new data.json ");
			rename("data/error.json", "data/data.json" );
		}
	}

?>

<html>
<head>
	<title>Review</title>
	<meta charset="UTF-8">
	<link type="text/css" rel="stylesheet" href="css/stylesheet.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script src="https://connect.facebook.net/en_US/all.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/read_FB.js"></script>
</head>
<body>
	<div id="reviews_box">
		<a target="_blank" class="link_to_reviews" href="https://www.facebook.com/palidosim.lv?sk=reviews" title="go to review">
			<div class="reviews">Atsauksmes
				<img class="arrow" src="img/design/arrow.png" />
				<div class="_clear"></div>
			</div>
			<div class="rating">
				<div class="average"><span class="avg"></span><i class="fa fa-star"></i></div>
				<div class="other_info"><span class="avg"></span> of 5 stars <span class="point">·</span> <span class="num_rev"></span> reviews</div>
				<div class="_clear"></div>
			</div>
		</a>
		<div class="rev_box">
			<a target="_blank" href="" title="user"><img class="avatar" src="img/design/default_avatar.jpg" title="" alt="" /></a>
			<div class="rev">
				<a class="name" target="_blank" href="" title="user"></a>
				<span class="line_space">—</span>
				<div class="vote"><span></span><i class="fa fa-star"></i></div>
				<div class="write"></div>
			</div>
			<div class="time"></div>
			<div class="_clear"></div>
		</div>
		<div class="rev_box">
			<a target="_blank" href="" title="user"><img class="avatar" src="img/design/default_avatar.jpg" title="" alt="" /></a>
			<div class="rev">
				<a class="name" target="_blank" href="" title="user"></a>
				<span class="line_space">—</span>
				<div class="vote"><span></span><i class="fa fa-star"></i></div>
				<div class="write"></div>
			</div>
			<div class="time"></div>
			<div class="_clear"></div>
		</div>
		<div class="rev_box">
			<a target="_blank" href="" title="user"><img class="avatar" src="img/design/default_avatar.jpg" title="" alt="" /></a>
			<div class="rev">
				<a class="name" target="_blank" href="" title="user"></a>
				<span class="line_space">—</span>
				<div class="vote"><span></span><i class="fa fa-star"></i></div>
				<div class="write"></div>
			</div>
			<div class="time"></div>
			<div class="_clear"></div>
		</div>
	</div>
</body>
</html>