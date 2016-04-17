var url         = require('url');
var http        = require('http');
var https       = require('https');
var fs          = require('fs');
var imagesize   = require('imagesize');
var request     = require('sync-request');


function Img(imgUrl, options) {
    this.url           = url.parse(imgUrl);
    this.options       = options | {};
    this.response_data = '';

    if (this.url.protocol == null)
    {
        throw new Error('Invalid URL');
    }
}

Img.prototype = {
    constructor: Img
};

Img.prototype.is_http = function() {
    return this.url.protocol == 'http:';
};

Img.prototype.getDimensions = function() {

};

Img.prototype.getExtension = function() {
    var result = /\.(.[^\.\?]*)(\?.*)?$/.exec(new String(this.url.path));

    if (result == null) {
        return '';
    }
    else {
        return new String(result[1]).toLowerCase();
    }
};

Img.prototype.fileName = function(name) {
    var extension = this.getExtension();

    if (extension != '') {
        name = name + '.' + extension;
    }

    return name;
}


module.exports = Img;