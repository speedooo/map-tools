/*jslint node: true */
"use strict";
module.exports = function (global) {

  /**
   * Creates a new GMaps Plus instance
   * @param options
   * @constructor
   */
  function mapTools(options, cb) {
    var that = this;

    this.addMarker = require('map-tools/addMarker')(global, that);
    this.addTopoJson = require('map-tools/addFeature')(global, that).addTopoJson;
    this.addGeoJson = require('map-tools/addFeature')(global, that).addGeoJson;
    this.updateFeature = require('map-tools/updateFeature')(global, that);
    this.addPanel = require('map-tools/addPanel')(global, that);
    this.updateMarker = require('map-tools/updateMarker')(global, that);
    this.filterFeature = require('map-tools/filter')(global, that, 'json');
    this.filterMarker = require('map-tools/filter')(global, that, 'markers');
    this.addGroup = require('map-tools/groups')(global, that).addGroup;
    this.updateGroup = require('map-tools/groups')(global, that).updateGroup;
    this.updateMap = require('map-tools/updateMap')(global, that);

    var map = require('map-tools/addMap')(global, that);

    global.onload = map.load(options, cb); // Wait until the DOM is ready before attempting to load the Map

    return this;
  }

  // a mapTools Instance
  mapTools.prototype.instance = false;

  return mapTools;
};
