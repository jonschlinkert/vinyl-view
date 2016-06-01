'use strict';

require('mocha');
var assert = require('assert');
var view = require('./');

describe('vinyl-view', function() {
  it('should export a function', function() {
    assert.equal(typeof view, 'function');
  });

  it('should export an object', function() {
    assert(view);
    assert.equal(typeof view, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      view();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
