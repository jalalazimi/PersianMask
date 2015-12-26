require('./../persianMask');
var assert = require('assert');

describe('convert', function () {
    it('should set comma separator on Persian numbers', function (done) {
        assert.equal("???????", persianMask("1,129,200").setComma());
        done();
    });
});