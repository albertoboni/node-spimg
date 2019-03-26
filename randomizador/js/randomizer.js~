function escreveImg(div, altura){
	
	$(div).animate({'height': altura}, 'fast');

	$(div).children('img').fadeOut(500, function(){
		$(div).load('imageLoad.php' , {'h': altura}, function(){
			fadeIn(div);
		});
	});
}

function fadeIn(elem){

	$(elem).children('img').fadeIn(500);
}


function randomizer(){
	var maximo = 500;
	var minimo = 20;
	var multiplicador = 150;
	
	var i = 0;
	while(i == 0){
		var numero1 = Math.floor(Math.random()*multiplicador);
		var numero2 = Math.floor(Math.random()*multiplicador);
		var numero3 = Math.floor(Math.random()*multiplicador);
		var numero4 = Math.floor(Math.random()*multiplicador);
		var numero5 = 500 - (numero1+numero2+numero3+numero4);
		if((numero1 < minimo) || (numero2 < minimo) || (numero3 < minimo) || (numero4 < minimo) || (numero5 < minimo) || (numero5 > multiplicador)) {
			i = 0;
		} else {
			i = 1;
			//alert(numero1+numero2+numero3+numero4);
		}
	}
	
	
	//alert(numero1 + numero2 + numero3 + numero4 + numero5);
	
	var intervalo1 = window.setTimeout(function(){
		escreveImg("#img1", numero1)}, Math.floor(Math.random()*1000));
	var intervalo2 = window.setTimeout(function(){
		escreveImg("#img2", numero2)}, Math.floor(Math.random()*1000));
	var intervalo3 = window.setTimeout(function(){
		escreveImg("#img3", numero3)}, Math.floor(Math.random()*1000));
	var intervalo4 = window.setTimeout(function(){
		escreveImg("#img4", numero4)}, Math.floor(Math.random()*1000));
	var intervalo5 = window.setTimeout(function(){
		escreveImg("#img5", numero5)}, Math.floor(Math.random()*1000));
}


