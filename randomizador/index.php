<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br">
	<head id="Head1"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title></title>
		<meta name="description" content="" />
	
		<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="js/randomizer.js"></script>
		
		
		<style>
			html, body {margin:0; padding:0}
			#wrapper{height:500px; width:567px; margin:20px auto 0 auto; border:1px solid #777; /*border-top:none; border-left:none; */overflow:hidden}
			#wrapperBotao {width:569px; margin:0 auto}
			.bloco {width:568px; height:100px; border:0px solid #777; border-bottom:none; border-right:none}
			.bloco img {display:block;}
			#randomizer {float:right; margin-top:2px}
		</style>
		
		<?php
			$dir = 'img';
			$files = scandir($dir);
		?>
		<script type="text/javascript">
			$(document).ready(function(){
				randomizer();
			})
		</script>
	</head>
	<body>
	<? 
		
	?>
		<div id="wrapper">
			<div class="bloco" id="img1">
				<img src="img/layout/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img2">
				<img src="img/layout/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img3">
				<img src="img/layout/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img4">
				<img src="img/layout/bt_rand.gif">
			</div>
			
			<div class="bloco" id="img5">
				<img src="img/layout/bt_rand.gif">
			</div>
		</div>
		<div id="wrapperBotao">
			<input id="randomizer" type="image" src="img/layout/bt_rand.gif" value="..." onclick="randomizer()" />
		</div>
		
		<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
		</script>
		<script type="text/javascript">
		try {
		var pageTracker = _gat._getTracker("UA-2837960-9");
		pageTracker._trackPageview();
		} catch(err) {}</script>
	</body>
</html>
