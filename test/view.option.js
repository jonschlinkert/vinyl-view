'use strict';

var assert = require('assert');
var View = require('..');

describe('.option', function() {
  it('should expose an `option` method', function() {
    var view = new View();
    assert.equal(typeof view.option, 'function');
  });

  it('should set an option:', function() {
    var page = new View({path: 'a.tmpl', content: '<%= a %>'});

    assert(!page.options.hasOwnProperty('foo'));
    page.option('foo', 'bar');
    assert(page.options.hasOwnProperty('foo'));
  });

  it('should extend existing options:', function() {
    var page = new View({path: 'a.tmpl', content: '<%= a %>'});
    page.option('a', 'b');
    page.option('c', 'd');
    page.option('e', 'f');

    assert.equal(page.options.a, 'b');
    assert.equal(page.options.c, 'd');
    assert.equal(page.options.e, 'f');
  });
});
