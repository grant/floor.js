var floor = require('../');
var assert = require('assert');

describe('floor', function() {
  it('should work with one param', function () {
    assert.equal(99, floor(99.6));
    assert.equal(99, floor(99.3));
    assert.equal(-124, floor(-123.4));
  });

  it('should floor with two params', function(){
    assert.equal(55.5, floor(55.51, -1));
    assert.equal(50, floor(51, 1));
    assert.equal(-55.6, floor(-55.59, -1));
    assert.equal(-60, floor(-59, 1));

    assert.equal(0, floor(12489.9482, 5));
    assert.equal(10000, floor(12489.9482, 4));
    assert.equal(12000, floor(12489.9482, 3));
    assert.equal(12400, floor(12489.9482, 2));
    assert.equal(12480, floor(12489.9482, 1));
    assert.equal(12489, floor(12489.9482, 0));
    assert.equal(12489.9, floor(12489.9482, -1));
    assert.equal(12489.94, floor(12489.9482, -2));
    assert.equal(12489.948, floor(12489.9482, -3));
    assert.equal(12489.9482, floor(12489.9482, -4));
    assert.equal(12489.9482, floor(12489.9482, -5));
  });
});
