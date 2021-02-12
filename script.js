require([
  "esri/config",
  "esri/Map", 
  "esri/views/MapView",
  
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery"

], function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

  const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
         container: "viewDiv", // Div element 
          map: map,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
        });
  
  const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
     });

  view.ui.add(basemapToggle,"bottom-right");
  
  const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri'
          }
        }
      });
  
  view.ui.add(basemapGallery, "top-right"); // Add to the view
  
 });
