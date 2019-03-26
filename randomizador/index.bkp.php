<?php
	$iterator    = new RecursiveDirectoryIterator("../assets/imgs/");
	$total_files = 0;
	$files       = array();

	foreach (new RecursiveIteratorIterator($iterator) as $file_path => $file)
	{
		if ($file->getSize() == 0)
		{
			continue;
		}

		if (!in_array(mime_content_type($file_path), array('image/jpeg', 'image/png', 'image/gif')))
		{
			continue;
		}

		$files[] = $file_path;
		$total_files++;
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br">
	<head id="Head1"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title></title>
		<meta name="description" content="" />
	
		<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="js/randomizer.js"></script>

        <script type="text/javascript" src="bower_components/angular/angular.min.js "></script>

        <script type="text/javascript" src="bower_components/angular-animate/angular-animate.min.js"></script>
        <script type="text/javascript" src="bower_components/angular-aria/angular-aria.min.js"></script>
        <script type="text/javascript" src="bower_components/angular-messages/angular-messages.min.js"></script>
        <script type="text/javascript" src="bower_components/angular-material/angular-material.min.js"></script>

        <link href='/bower_components/angular-material/angular-material.min.css' rel='stylesheet' type='text/css' />



        <style>
			html, body {margin:0; padding:0}
			#wrapper{height:500px; width:567px; margin:20px auto 0 auto; border:1px solid #777; /*border-top:none; border-left:none; */overflow:hidden}
			#wrapperBotao {width:569px; margin:0 auto}
			.bloco {width:568px; height:100px; border:0px solid #777; border-bottom:none; border-right:none}
			.bloco img {display:block;}
			#randomizer {float:right; margin-top:2px}
		</style>

		<script type="text/javascript">
            Randomizer.files = <?= json_encode($files) ?>;

			$(document).ready(function(){
                Randomizer.run();
			})
		</script>
	</head>

	<body>



		<div id="wrapper">
			<div class="bloco" id="img1">
				<img src="img/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img2">
				<img src="img/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img3">
				<img src="img/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img4">
				<img src="img/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img5">
				<img src="img/bt_rand.gif">
			</div>
		</div>

		<div id="wrapperBotao">
			<input id="randomizer" type="image" src="img/bt_rand.gif" value="..." onclick="Randomizer.run()" />
		</div>
	</body>
</html>
