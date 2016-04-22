<?php
	$width        = $_GET['w'];
	$height       = isset($_GET['h']) ? $_GET['h'] : $width;    // h est facultatif, =w par défaut
	$x            = 0;
	$y            = 0;
	$filename     = $_GET['src'];
	$content_type = mime_content_type($filename);
	$size         = getimagesize($filename);

	switch ($content_type)
	{
		case 'image/jpeg':
			$image = imagecreatefromjpeg($filename);
			break;
		case 'image/gif':
			$image = imagecreatefromgif($filename);
			break;
		case 'image/png':
			$image = imagecreatefrompng($filename);
			break;

		default:
			echo '';
			return;
	}


//	if($size[0] < 600) {
//		$x = ($size[0] - $w)/2;
//	}

	// Desloca no eixo Y randomicamente
	if($size[1] > 100) {
		$y = rand(0, $size[1] - $height);
	}
	
	header("Content-type: {$content_type}");
	header("Content-Disposition: attachment; filename={$src}");




	if($size[0] < 600) {
		$ratio = $width / $size[0];
	} else {
		$ratio = 1;
	}


	$image = imagescale($image, $size[0] * $ratio, $size[1] * $ratio);

	$crop = imagecreatetruecolor($width,$height);
	
	imagecopy( $crop, $image, 0, 0, $x, $y, $width, $height );
	imagejpeg($crop);
