'use strict';

module.exports = function (re, str, responder) {
  var tokens = re.exec(str);

  if (responder instanceof Function) {
    if (tokens) {
      responder.apply(null, tokens);
    }
  } else {
    return new Promise(function (resolve, reject) {
      if (tokens) {
        if (responder instanceof Object) {
          var obj = {};

          for (var p in responder) {
            obj[p] = tokens[responder[p]];
          }

          resolve(obj);
        } else {
          resolve(tokens);
        }
      } else {
        reject();
      }
    });
  }
};
