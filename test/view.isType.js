'use strict';

require('mocha');
var assert = require('assert');
var View = require('..');

describe('view.isType', function() {
  it('should expose thie "isType" method', function() {
    var view = new View();
    assert.equal(typeof view.isType, 'function');
  });

  it('should return true if a view is the given "type"', function() {
    var view = new View();
    assert(view.isType('renderable'));
  });

  it('should return true if a view is a partial', function() {
    var view = new View({path: 'foo', viewType: 'partial'});
    assert(view.isType('partial'));
  });

  it('should return true if a view is a layout', function() {
    var view = new View({path: 'foo', viewType: 'layout'});
    assert(view.isType('layout'));
  });

  it('should return true if a view one of the given types', function() {
    var view = new View({path: 'foo', viewType: ['layout', 'partial']});
    assert(view.isType('layout'));
    assert(view.isType('partial'));
  });

  it('should set types on `view.cache`', function() {
    var view = new View({path: 'foo', viewType: ['layout', 'partial']});
    assert(view.isType('layout'));
    assert(view.isType('partial'));
  });

  it('should return false if a view is not the given type', function() {
    var partial = new View({path: 'foo', viewType: 'partial'});
    var layout = new View({path: 'bar', viewType: 'layout'});
    var page = new View({path: 'baz'});

    assert(!partial.isType('renderable'));
    assert(!partial.isType('layout'));

    assert(!layout.isType('renderable'));
    assert(!layout.isType('partial'));

    assert(!page.isType('layout'));
    assert(!page.isType('partial'));
  });

  it('should return false if a view is not the given "type"', function() {
    var view = new View();
    assert(!view.isType('partial'));
  });
});
