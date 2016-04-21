<?php
	$w=$_GET['w'];
	$h=isset($_GET['h'])?$_GET['h']:$w;    // h est facultatif, =w par défaut
	$x=0;
	$y=0;
	$filename='img/imagens/'.$_GET['src'];
	
	$size = getimagesize($filename);
	if($size[0] < 600) {
//		$x = ($size[0] - $w)/2;
	}
	if($size[1] > 100) {
		$y = rand(0, $size[1] - $h);
	}
	
	header('Content-type: image/jpg');
	header('Content-Disposition: attachment; filename='.$src);
	
	$image = imagecreatefromjpeg($filename);


	if($size[0] < 600) {
		$ratio = $w / $size[0];
	} else {
		$ratio = 1;
	}


	$image = imagescale($image, $size[0] * $ratio, $size[1] * $ratio);

	$crop = imagecreatetruecolor($w,$h);
	
	imagecopy ( $crop, $image, 0, 0, $x, $y, $w, $h );
	imagejpeg($crop);
?>

