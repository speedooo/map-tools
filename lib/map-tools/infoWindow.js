/*jslint node: true */
"use strict";
module.exports = function (global) {

  function create(marker, options, map) {
    var event = options.event || 'click';

    options.content = options.content.replace(/\{(\w+)\}/g, function (m, variable) {
      return marker.data[variable] || '';
    });

    marker.infoWindow.instance = new global.google.maps.InfoWindow(options);

    global.google.maps.event.addListener(marker, event, function () {
      marker.infoWindow.instance.open(map, marker);
    });
  }

  return {
    create: create
  };
};

