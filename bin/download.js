var Img         = require('../lib/helpers/img');
var Download    = require('../lib/helpers/download');



var urls = [
    'https://s01.video.glbimg.com/160x90/4919004.jpg',
    'http://s.glbimg.com/es/sde/f/2016/03/31/b7ca4d2e6d568e068666ecbd3503e83c_50x50.png',
    'http://s.glbimg.com/es/sde/f/2016/03/31/f0a9d6ba91a0f84f5cc46d2d63ca6181_50x50.png'
];

Download.download_path = './assets/imgs/';

for (var key in urls) {
    var img = new Img(urls[key]);
    Download.run(img.url, key + '.jpg');


}