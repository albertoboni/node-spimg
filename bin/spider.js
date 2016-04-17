var Spimg = require('../lib/spimg');

console.log(Spimg);


//var url = 'http://www.amazon.com/';
//var url = 'http://globoesporte.globo.com/';
var url = 'http://edition.cnn.com/';
//var url = 'http://www.folha.uol.com.br/';
//var url = 'http://www.integraltrust.com/';
//var url = 'http://www.metrojornal.com.br/';

var spimg = new Spimg(url, {
    max_depth: 1000
});


// start crawling
//spider.queue('http://www.folha.uol.com.br/', handleRequest);

process.on('uncaughtException', function (err) {
    console.log(err);
})

spimg.crawl();