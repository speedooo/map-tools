/*jslint node: true */
"use strict"

var utils = require('gmplus/utils');
var config = require('gmplus/config');

module.exports = function(global, that) {

  function updateStyle (f, style) {
	  if (typeof style === 'function') {
		  var styleOptions = style.call(f)
		  return that.instance.data.overrideStyle(f, styleOptions);
	  }
    that.instance.data.overrideStyle(f, style);
  }

  function updateFeature(args, options){
    var type = Object.prototype.toString.call(args);
    if(type === '[object Array]') {
      var f, x;

      for (x in args) {
        f = args[x];
        if( options.style ) {
          updateStyle(f, options.style);
        }
      }
    }

    if(type === '[object Object]') {
      if( options.style ) {
        updateStyle(args, options.style);
      }
    }

  };

  return updateFeature;
};