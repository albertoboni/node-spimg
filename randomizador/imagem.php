<?php
	$width        = $_GET['width'];
	$height       = isset($_GET['height']) ? $_GET['height'] : $width;    // h est facultatif, =w par défaut
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

	    if ($height > $size[1]) {
	        $max = $height - $size[1];
        }
	    else
        {
            $max = $size[1] - $height;
        }
$max = 0;
		$y = rand(0, $max);
	}


	header("Content-type: {$content_type}");
	header("Content-Disposition: filename={$src}");




	if($size[0] < 600) {
		$ratio = $width / $size[0];
	} else {
		$ratio = 1;
	}


//    if ($size[1] < $height) {
//        $ratio = $height / $size[1];
//    } else {
//
//    }
    $ratio = $width / $size[0];

	if ($size[1] * $ratio < $height) {
        $ratio = $height / $size[1];
    }



	$image = imagescale($image, $size[0] * $ratio, $size[1] * $ratio);

	$crop = imagecreatetruecolor($width,$height);
	
	imagecopy( $crop, $image, 0, 0, $x, $y, $width, $height );
	imagejpeg($crop);
