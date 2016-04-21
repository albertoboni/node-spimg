<?php
	$dir = 'img';
	$files = scandir($dir);
?>
<img src="imagem.php?w=568&h=<?= $_POST['h'] ?>&src=<?= $files[rand(0, count($files)-1)] ?>" alt="" style="display:none" />
