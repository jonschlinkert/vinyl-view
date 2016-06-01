'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('view.cache', function() {
  it('should expose a `cache` property', function() {
    var view = new View({path: 'a/b/c'});
    assert(view.hasOwnProperty('cache'));
  });

  it('should set `engine` on view.cache', function() {
    var view = new View({path: 'a/b/c'});
    view.engine = 'foo';
    assert.equal(view.cache.engine, 'foo');
  });

  it('should set `layout` on view.cache', function() {
    var view = new View({path: 'a/b/c'});
    view.layout = 'foo';
    assert.equal(view.cache.layout, 'foo');
  });
});
