/*
 * grunt-mailgun
 * http://github.com/markhuge/grunt-mailgun
 *
 * Copyright (c) 2014 Mark Wilkerson
 * Licensed under the MIT license.
 */

/*
var through = require('through2'),
    gutil = require('gulp-util'),
    rasterize = require('./lib'),
    PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-raster';

module.exports = function (opt) {
    'use strict';

    opt = opt || {};
    opt.scale = opt.scale || 1;
    opt.format = opt.format || 'png';

    function raster(file, enc, callback) {
        var that = this;

        // Do nothing if no contents
        if (file.isNull()) { return callback(); }

        if (file.isBuffer()) {
            rasterize(file.path, opt.format, opt.scale, function (err, data) {
                if (err) { throw new PluginError(PLUGIN_NAME, 'Error occured during file conversion'); }

                file.contents = data;
                that.push(file);
                return callback();
            });
        }
    }

    return through.obj(raster);
};
*/
/*jslint node: true */
// 'use strict';



var mailer = require('mailgun-send'),
    _      = require('lodash');


var sendmail = function (opts) {
  console.log(opts);
}

// module.exports = function (grunt) {
// module.exports = function (opt) {
//     'use strict';

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks


  // console.log(opt);


  // grunt.registerMultiTask('mailgun', 'Send emails through mailgun as part of your build.', function () {
  //   var done = this.async();
  //   var opts = _.pick(this.data.options,['sender','recipient','subject','body']);
  //
  //   // Register our mailer instance with out API key
  //   mailer.config({key: this.data.options.key});
  //
  //   if (this.files.length > 0) {
  //     var i = this.files.length;
  //     this.filesSrc.forEach(function (filePath) {
  //       var _opts = _.clone(opts);
  //       _opts.body = grunt.file.read(filePath);
  //       mailer.send(_opts, function () {
  //         grunt.log.writeln('Sent' + filePath + ' to ' + _opts.recipient);
  //         if (i < 1) { done(); } else { i--; } // This seems dirty
  //       });
  //
  //     });
  //
  //   } else {
  //     mailer.send(opts, function () {
  //       grunt.log.writeln('Sent mailgun msg to ' + opts.recipient);
  //       done();
  //     });
  //      }
  //
  // });

// };
