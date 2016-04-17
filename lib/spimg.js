var Spider   = require('node-spider');
var Img      = require('./helpers/img.js');
var Download = require('./helpers/download.js');
var url      = require('url');
var uniq     = require('uniq');
var http     = require('http');
var fs       = require('fs');
var mkdirp   = require('mkdirp');


function Spimg(base_url, options) {
    options = this.options = options || {};
    options.max_depth      = options.max_depth || null;
    options.headers        = options.headers   || {};

    this.url  = url.parse(base_url);
    this.imgs = [];



    Download.download_path =
        './assets/imgs/'
        + this.url.host + '/'
        + (new Date()).getTime() + '/';

    mkdirp(Download.download_path, function(err) {

    });

}

Spimg.prototype = {
    constructor: Spimg
};

Spimg.prototype.crawl = function() {
    var parent = this,
        spider = null,
        handleRequest = function(){};

    spider = new Spider({
        concurrent:         5,
        delay:              0,
        logs:               process.stderr,
        allowDuplicates:    false,
        catchErrors:        true,
        headers:            {
            'user-agent':   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:43.0) Gecko/20100101 Firefox/43.0'
        },
        encoding:           'utf8',

        error: function(err, url) {
            console.log(err);
        },

        done: function() {
            console.log('>>> total imgs: ' + parent.imgs.length);

            parent.imgs = uniq(parent.imgs);

            console.log('>>> unique imgs: ' + parent.imgs.length);

            // Download all the images
            for (var key in parent.imgs) {

                var img = new Img(parent.imgs[key]);

                Download.run(
                    img.url,
                    img.fileName(key)
                );
            }
        }
    });


    // handler for each request
    handleRequest = function(doc) {

        // blocks by depth
        if (parent.options.max_depth !== null && Object.keys(spider.visited).length > parent.options.max_depth) {
            spider.pending = [];
            return;
        }

        doc.$('img').each(function(i, elem) {
            try {
                var img_src = doc.resolve(elem.attribs.src);
                parent.imgs.push(img_src);
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });

        // handles next iteration
        doc.$('a').each(function(i, elem) {
            var href = new String(elem.attribs.href).split('#')[0];
            var url  = doc.resolve(href);

            // crawl more
            spider.queue(url, handleRequest);
        });
    };


    // Inicitate the crawl
    spider.queue(this.url.href, handleRequest);
};



module.exports = Spimg;