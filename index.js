// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var Mailgun = require('mailgun').Mailgun;
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-mailgun';

function mailgunStream(mailgunText) {
  'use strict';
  var stream = through();
  stream.write(mailgunText);
  return stream;
}

// Plugin level function(dealing with files)
function gulpMailgun(mailgunText) {

  'use strict';
  var _opts = mailgunText;

  if (!mailgunText) {
    throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  }
  mailgunText = new Buffer(JSON.stringify(mailgunText, null, 1)); // allocate ahead of time

  // Creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, callback) {
    var mail, raw;
    if (file.isNull()) {
       // Do nothing if no contents
      _opts.body = '';
    }
    if (file.isBuffer()) {
      file.contents = Buffer.concat([file.contents]);
      _opts.body = file.contents;
    }

    if (file.isStream()) {
      // file.contents = file.contents.pipe(mailgunStream(mailgunText));
      _opts.body = file.contents;
    }
    mail = new Mailgun(_opts.key);

    raw = "From: " + _opts.sender + "\nTo: " + _opts.recipient + "\nContent-Type: text/html; charset=utf-8\nSubject: " + _opts.subject + "\n\n " + _opts.body;
    mail.sendRaw(_opts.sender, _opts.recipient, raw, function(err) {
      if (err) {
        console.log('Please make sure you have entered your Mailgun API Key in your gulpfile');
        throw new PluginError(PLUGIN_NAME, 'Error: ' + err);
      } else {
        console.log('Sent email to ' + _opts.recipient);
      }
    });

    this.push(file);
    return callback();

  });

  // returning the file stream
  return stream;
}

// Exporting the plugin main function
module.exports = gulpMailgun;
