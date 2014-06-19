/*jslint node: true */
'use strict';

var Mailgun = require('mailgun').Mailgun;


  function mailer() {}

  mailer.prototype.config = function(obj) {
    if (!(typeof obj !== "undefined" && obj !== null ? obj.key : void 0)) { throw('Missing Mailgun API key'); }
    else {
        this._connect(obj.key);
        this._config = obj;
        return this._config;
       }
  };
  
  mailer.prototype._connect = function (key) {
    this._mailer = new Mailgun(key);
  };

  mailer.prototype.send = function(data, callback) {
    var raw = "From: " + data.sender + "\nTo: " + data.recipient + "\nContent-Type: text/html; charset=utf-8\nSubject: " + data.subject + "\n\n " + data.body;
    this._mailer.sendRaw(data.sender, data.recipient, raw, callback);
  };

  
module.exports = new mailer();
