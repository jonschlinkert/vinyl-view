'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('.compile', function() {
  it('should expose a `.compile` method', function() {
    var view = new View();
    assert.equal(typeof view.compile, 'function');
  });

  it('should set a `fn` property on view', function() {
    var view = new View();
    view.compile();
    assert.equal(typeof view.fn, 'function');
  });

  it('should render templates from `view.content`', function() {
    var view = new View({content: 'a <%= name %> z'});

    view.compile();
    assert.equal(view.fn({name: 'Brooke'}), 'a Brooke z');
  });
});
