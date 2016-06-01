'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('view.content', function() {
  it('should set the `content` property on a view when `contents` is updated', function() {
    var page = new View({path: path.resolve(__dirname, '../README.md')})
      .set('read', function() {
        this.contents = fs.readFileSync(this.path);
        return this;
      });

    page.read();

    assert('content' in page);
    assert.equal(typeof page.content, 'string');
  });
});
