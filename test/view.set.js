'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('.set', function() {
  it('should set a property on a view:', function() {
    var page = new View({path: path.resolve(__dirname, 'fixtures/name.txt')})
    page.set('data.name', 'Brooke');
    assert.equal(page.data.name, 'Brooke');
  });
});
