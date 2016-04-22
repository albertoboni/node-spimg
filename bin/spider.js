var Spimg = require('../lib/spimg');

var url       = process.argv[2] || '',
    max_depth = process.argv[3] || 1000;

console.log('URL: ' + url);
console.log('Max Depth: ' + max_depth);


var spimg = new Spimg(url, {
    max_depth: max_depth
});


// start crawling
//spider.queue('http://www.folha.uol.com.br/', handleRequest);

process.on('uncaughtException', function (err) {
    console.log(err);
})

spimg.crawl();