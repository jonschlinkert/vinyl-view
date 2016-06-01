'use strict';

var assert = require('assert');
var View = require('..');

describe('view.inspect', function() {
  it('should show path', function() {
    var view = new View({path: 'a/b/c'});
    assert.equal(view.inspect(), '<View "a/b/c">');
  });

  it('should show contents', function() {
    var view = new View({path: 'a/b/c', contents: new Buffer('abc')});
    assert.equal(view.inspect(), '<View "a/b/c" <Buffer 61 62 63>>');
  });
});
