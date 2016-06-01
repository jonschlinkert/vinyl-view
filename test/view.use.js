'use strict';

var assert = require('assert');
var View = require('..');
var view;

describe('view.use', function() {
  beforeEach(function() {
    view = new View();
  });

  it('should expose the instance to `use`:', function(cb) {
    view.use(function(inst) {
      assert(inst instanceof View);
      cb();
    });
  });

  it('should be chainable:', function(cb) {
    view
      .use(function(inst) {
        assert(inst instanceof View);
      })
      .use(function(inst) {
        assert(inst instanceof View);
      })
      .use(function(inst) {
        assert(inst instanceof View);
        cb();
      });
  });

  it('should call plugins', function() {
    var page = new View({path: 'a.tmpl', content: '<%= a %>'})
      .use(function() {
        this.options.foo = 'bar';
      })
      .use(function() {
        this.options.bar = 'baz';
      });

    assert(page.options.hasOwnProperty('foo'));
    assert(page.options.hasOwnProperty('bar'));
  });

  it('should expose the view instance as `this` to a plugin:', function() {
    view.use(function(view) {
      assert(this instanceof View);
      this.foo = function(str) {
        return str + ' ' + 'bar';
      };
    });
    assert.equal(view.foo('foo'), 'foo bar');
  });

  it('should be chainable:', function() {
    view
      .use(function(view) {
        view.a = 'aaa';
      })
      .use(function(view) {
        view.b = 'bbb';
      })
      .use(function(view) {
        view.c = 'ccc';
      });

    assert.equal(view.a, 'aaa');
    assert.equal(view.b, 'bbb');
    assert.equal(view.c, 'ccc');
  });
});
