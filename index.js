/*!
 * vinyl-view (https://github.com/jonschlinkert/vinyl-view)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('vinyl-view');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('vinyl-view')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('view', function() {
      debug('running view');
      
    });
  };
};
