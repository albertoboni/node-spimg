var Spider = require('node-spider');


function Spimg(url, options) {
    options = this.options = options || {};
    options.max_depth      = options.max_depth || null;
    options.headers        = options.headers   || {};

    this.url   = url;
    this.imgs  = [];
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
            console.log(parent.imgs);
        }
    });

    handleRequest = function(doc) {

        // blocks by depth
        if (parent.options.max_depth !== null && Object.keys(spider.visited).length > parent.options.max_depth) {
            spider.pending = [];
            return;
        }

        doc.$('img').each(function(i, elem) {
            var img = doc.resolve(elem.attribs.src);
            parent.imgs.push(img);
        });

        // handles next iteration
        doc.$('a').each(function(i, elem) {
            var href = new String(elem.attribs.href).split('#')[0];
            var url  = doc.resolve(href);

            // crawl more
            spider.queue(url, handleRequest);
        });
    };


    // start the crawl
    spider.queue(this.url, handleRequest);
};



module.exports = Spimg;