require('./../persianMask');
var assert = require('assert');

describe('convert', function () {
    it('should set comma separator on Persian numbers', function (done) {
        assert.equal("1,129,200", persianMask("۱۱۲۹۲۰۰").setComma());
        done();
    });
});

describe('convert', function () {
    it('Convert Persian number to English number', function (done) {
        assert.equal("1129200", persianMask("۱۱۲۹۲۰۰").toEnglish());
        done();
    });
});

describe('convert', function () {
    it('Convert English number to Persian number', function (done) {
        assert.equal("۱۱۲۹۲۰۰", persianMask("1129200").toPersian());
        done();
    });
});