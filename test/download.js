var assert = require('chai').assert,
    should = require('chai').should(),
    Download = require('../lib/helpers/download'),
    url      = require('url');



describe('Download', function() {
    var url_http  = 'http://www.integraltrust.com/templates/integral/images/logo_integral.gif',
        url_https = 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    describe('#is_http()', function() {
        it('Should know the difference between HTTP and HTTPS', function () {
            Download.is_http(url.parse(url_http))
                .should.equal(true);
            Download.is_http(url.parse(url_https))
                .should.equal(false);
        });
    });

    describe('#run()'), function() {
        it('Should download the file', function() {

        });
    }
});