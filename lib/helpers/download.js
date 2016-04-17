var http     = require('http');
var https    = require('https');
var fs       = require('fs');

var Download = {
    "download_path" : ""
};

Download.is_http = function(url) {
    return url.protocol == 'http:';
};

Download.is_https = function(url) {
    return url.protocol == 'https:';
};

Download.run = function(url, filename) {
    var handler = {};

    if (this.is_http(url)) {
        handler = http;
    } else if (this.is_https(url)) {
        handler = https;
    }
    else {
        console.log('Invalid protocol ' + url.protocol);
        return false;
    }

    console.log('Donwloading >>> ' + url.href);

    var file     = fs.createWriteStream(this.download_path + filename);
    var request  = handler.get(url, function(response) {
        response.pipe(file);
    });
};



module.exports = Download;