'use strict';

var assert = require('assert');
var View = require('..');

describe('view.events', function() {
  it('should emit events:', function() {
    var page = new View({path: 'a.tmpl', content: '<%= a %>'});
    var events = [];

    page.on('option', function(key) {
      events.push(key);
    });

    page.option('a', 'b');
    page.option('c', 'd');
    page.option('e', 'f');
    page.option({g: 'h'});

    assert.deepEqual(events, ['a', 'c', 'e', 'g']);
  });
});
