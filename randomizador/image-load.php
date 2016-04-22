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
<img src="imagem.php?w=568&h=<?= $_POST['h'] ?>&src=<?= $files[rand(0, count($files)-1)] ?>" alt="" style="display:none" />
