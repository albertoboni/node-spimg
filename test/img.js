var assert = require('chai').assert,
    should = require('chai').should(),
    Img    = require('../lib/helpers/img')
    ;



describe('Image', function() {
    var url_http  = 'http://www.integraltrust.com/templates/integral/images/logo_integral.gif',
        url_https = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        url_invalid = '/invalidurl',
        url_valid   = 'http://www.test.com/img.jpg';


    describe('#construct()', function () {
        it('Should construct when passing the url', function () {
            var url = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
                img = new Img(url);

            // tests
            img.should.be.a('object');

            img.url.href
                .should.equal(url);
        });

        it('Should throw when passing an invalid url', function() {
            (function () {
                new Img(url_invalid);
            }).should.throw(Error);

            (function () {
                new Img(url_valid);
            }).should.not.throw(Error);
        });
    });

    describe('#getExtension()', function(){
        var jpg = 'http://www.test.com/a/img.jpg',
            jpg2 = 'http://www.test.com/b/img.JPG',
            jpg3 = 'http://www.test.com/b/img.JPG?v=123',
            gif = 'http://www.test.com/b/img.gif',
            png = 'http://www.test.com/c/img.png',
            none = 'http://www.test.com/c'
            ;

        it('Should detect the file extension from the url', function(){
            (new Img(jpg)).getExtension()
                .should.equal('jpg');

            (new Img(jpg2)).getExtension()
                .should.equal('jpg');

            (new Img(jpg3)).getExtension()
                .should.equal('jpg');

            (new Img(gif)).getExtension()
                .should.equal('gif');

            (new Img(png)).getExtension()
                .should.equal('png');

            (new Img(none)).getExtension()
                .should.equal('');
        });
    });

    describe('#fileName()', function() {
        it ('should return the file name with the correct extension', function() {
            var file1 = 'http://www.test.com/a/img.jpg',
                file2 = 'http://www.test.com/b/img.GIF';

            (new Img(file1)).fileName('name')
                .should.equal('name.jpg');

            (new Img(file2)).fileName('name')
                .should.equal('name.gif');
        });
    });
});