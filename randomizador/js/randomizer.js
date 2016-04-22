var Randomizer = {
	files     : [],
	img_width : 568,

	writeImg : function(div, new_height)
	{
		$(div).animate({
			'height': new_height
		}, 'fast');

		$(div).children('img').fadeOut(500, function(){
            var files     = Randomizer.files;
			var file_key  = Math.floor(Math.random() * files.length);
            var file_path = files[file_key];
			var img_src   =
                'imagem.php' +
                '?w=' + Randomizer.img_width +
                '&h=' + new_height +
                '&src=' + file_path;

            $(this)
                .attr('src', img_src)
                .fadeIn(500);
		});
	},

	run: function()
	{
		var max = 500;
		var min = 20;
		var multiplicador = 150;

		var i = 0;
		while(i == 0){
			var h1 = Math.floor(Math.random()*multiplicador);
			var h2 = Math.floor(Math.random()*multiplicador);
			var h3 = Math.floor(Math.random()*multiplicador);
			var h4 = Math.floor(Math.random()*multiplicador);
			var h5 = max - (h1 + h2 + h3 + h4);
			if((h1 < min) || (h2 < min) || (h3 < min) || (h4 < min) || (h5 < min) || (h5 > multiplicador)) {
				i = 0;
			} else {
				i = 1;
			}
		}

		window.setTimeout(function(){
			Randomizer.writeImg("#img1", h1)}, Math.floor(Math.random()*1000));

        window.setTimeout(function(){
			Randomizer.writeImg("#img2", h2)}, Math.floor(Math.random()*1000));

        window.setTimeout(function(){
			Randomizer.writeImg("#img3", h3)}, Math.floor(Math.random()*1000));

        window.setTimeout(function(){
			Randomizer.writeImg("#img4", h4)}, Math.floor(Math.random()*1000));

        window.setTimeout(function(){
			Randomizer.writeImg("#img5", h5)}, Math.floor(Math.random()*1000));
	}



};

