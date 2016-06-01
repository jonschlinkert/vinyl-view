'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('.render', function() {
  it('should expose a `.render` method', function(cb) {
    var view = new View({path: 'a.tmpl', content: '<%= a %>'});

    view.render({a: 'bbb'}, function(err, res) {
      if (err) return cb(err);
      assert.equal(res.content, 'bbb');
      cb();
    });
  });

  it('should render templates in view.content', function(cb) {
    var page = new View({path: path.resolve(__dirname, 'fixtures/name.txt')})
      .set('read', function() {
        this.contents = fs.readFileSync(this.path);
        return this;
      });

    assert('read' in page);
    page.read()
      .set('data.name', 'Brooke')
      .render(function(err, res) {
        if (err) return cb(err);
        assert.equal(res.content, 'Brooke');
        cb();
      });
  });

  it('should update view.contents when view.content is rendered', function(cb) {
    var page = new View({path: path.resolve(__dirname, 'fixtures/name.txt')})
      .set('read', function() {
        this.contents = fs.readFileSync(this.path);
        return this;
      });

    assert('read' in page);
    page.read()
      .set('data.name', 'Brooke')
      .render(function(err, res) {
        if (err) return cb(err);
        assert.equal(res.contents.toString(), 'Brooke');
        cb();
      });
  });
});
