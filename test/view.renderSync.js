'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var View = require('..');

describe('.renderSync', function() {
  it('should expose a `.renderSync` method', function() {
    var view = new View({path: 'a.tmpl', content: '<%= a %>'});
    view.renderSync({a: 'bbb'});
    assert.equal(view.content, 'bbb');
  });

  it('should render templates in view.content using locals', function() {
    var view = new View({content: '<%= name %>'});
    view.renderSync({name: 'Brooke'});
    assert.equal(view.content, 'Brooke');
  });

  it('should render templates in view.content using view.locals as context', function() {
    var view = new View({content: '<%= name %>', locals: {name: 'Brooke'}});
    view.renderSync();
    assert.equal(view.content, 'Brooke');
  });

  it('should render templates using the `view.data` object as context', function() {
    var view = new View({content: '<%= name %>', data: {name: 'Brooke'}});
    view.renderSync();
    assert.equal(view.content, 'Brooke');
  });

  it('should render templates after setting `view.data`', function() {
    var view = new View({content: '<%= name %>'})
      .set('data.name', 'Brooke')
      .renderSync();
    assert.equal(view.content, 'Brooke');
  });

  it('should update view.contents when view.content is rendered', function() {
    var view = new View({content: '<%= name %>', data: {name: 'Brooke'}});
    view.renderSync();
    assert.equal(view.contents.toString(), 'Brooke');
  });
});
