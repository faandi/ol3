/*
goog.require('ol.Attribution');
goog.require('ol.Map');
goog.require('ol.RendererHint');
goog.require('ol.View2D');
goog.require('ol.layer.Tile');
goog.require('ol.proj');
goog.require('ol.source.XYZ');
*/

Proj4js.defs["EPSG:31287"] = "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs";

var projection = ol.proj.configureProj4jsProjection({
  code: 'EPSG:31287',
  extent: [107778.5323, 286080.6331, 694883.9348, 575953.6150]
  //extent: [72670.9210876276, 182928.078363359, 726933.896280245, 656162.774832752]
});

var extent = [72670.9210876276, 182928.078363359, 726933.896280245, 656162.774832752];


var attribution = new ol.Attribution({
  html: 'Tiles &copy; <a href="http://show.msgis.net/ArcGIS/rest/services/ASFINAG/PVIS/MapServer">msgis / Asfinag</a>'
});

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: [attribution],
        url: 'http://show.msgis.net/ArcGIS/rest/services/ASFINAG/PVIS/MapServer/tile/{z}/{y}/{x}',
	extent: extent,
	projection: projection	
      })      
    })
  ],
  renderer: ol.RendererHint.CANVAS,
  view: new ol.View2D({
    projection: projection,
    //center: [ 72670.9210876276, 182928.078363359 ],
    center: ol.proj.transform([16, 48], 'EPSG:4326', 'EPSG:31287'),    
    //extent: extent,
    zoom: 0,
        
    resolutions: [
      582.084497502328,
      338.667344001355,
      169.333672000677,
      84.6668360003387,
      42.3334180001693,
      21.1667090000847,
      10.5833545000423,
      5.29167725002117
    ]
    
  })
});