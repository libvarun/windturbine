var viewerApp;

function launchViewer(urn) {
  var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
  };
  var documentId = 'urn:' + urn;  
  
  Autodesk.Viewing.Initializer(options, function onInitialized() {
    viewerApp = new Autodesk.Viewing.ViewingApplication('forgeViewer');
    viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D);
    viewerApp.loadDocument(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
  });
}

function onDocumentLoadSuccess(doc) {
 
  // We could still make use of Document.getSubItemsWithProperties()
  // However, when using a ViewingApplication, we have access to the **bubble** attribute,
  // which references the root node of a graph that wraps each object from the Manifest JSON.
  var viewables = viewerApp.bubble.search({ 'type': 'geometry' });
  console.log('onDocumentLoadSuccess')
  // viewerApp.getViewMeta('dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpleXM3WFBlVGd1cVBjX09EWkJia1E_dmVyc2lvbj0x').then(function(metaDataRes){
  //   console.log('metaDataRes:')
  //   console.log(metaDataRes)
  // })
  if (viewables.length === 0) {
    console.error('Document contains no viewables.');
    return;
  }
  // Choose any of the available viewables
  viewerApp.selectItem(viewables[0].data, onItemLoadSuccess, onItemLoadFail);
  return;
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function onItemLoadSuccess(viewer, item) {
  // item loaded, any custom action?
  viewer.loadExtension('Autodesk.ADN.Viewing.Extension.Color');
  //set color to red
  // 4:rightblade(secondblade), 6:topblade(thirdblade) , 8:leftblade(firstblade), 10:body, 20: generator
  var colorcodes = getColorCodeById($('#firstHeading').text())
  console.log( 'colorcodes' )
  console.log( colorcodes )

  setTimeout( ()=>{
    
    // viewer.setColorMaterial([10],colorcodes[0]); // body
    // viewer.setColorMaterial([8],colorcodes[1]);  // first blade
    // viewer.setColorMaterial([4],colorcodes[2]);  // second blade
    // viewer.setColorMaterial([6],colorcodes[3]);  // third blade
    viewer.setColorMaterial1([10,8,4,6],colorcodes);  // third blade

  },4000)
  // Autodesk.Viewing.Viewer3D.addEventListener('GEOMETRY_LOADED_EVENT', function(){
  //   console.log('GEOMETRY_LOADED_EVENT')
  // });
}

function onItemLoadFail(errorCode) {
  console.error('onItemLoadFail() - errorCode:' + errorCode);
}

function getForgeToken(callback) {
  jQuery.ajax({
    url: '/api/forge/oauth/token',
    success: function (res) {
      callback(res.access_token, res.expires_in)
    }
  });
}

function getColorCodeById(id){
  // #F7DC6F yellow= average
  // #D35400 red= above average
  // #3498DB   blue= below average
  var avgbodyinstallationtime = "1.81"
  var avgfirstbladeinstallationtime = "1.22"
  var avgsecondbladeinstallationtime = "1.80"
  var avgthirdbladeinstallationtime = "2.56"
  var colorarray = []
  var turbine = getDataById(id)
  colorarray.push(avgindicator(turbine.Installationoftower,avgbodyinstallationtime))
  colorarray.push(avgindicator(turbine.FirstbladeInstallation,avgfirstbladeinstallationtime))
  colorarray.push(avgindicator(turbine.SecondbladeInstallation,avgsecondbladeinstallationtime))
  colorarray.push(avgindicator(turbine.ThirdbladeInstallation,avgthirdbladeinstallationtime))
  return colorarray;
}

function avgindicator(time, avgtime){
  if (time == avgtime) {
    return '#F7DC6F';
  } else if(time > avgtime) {
    return '#D35400';
  } else{
    return '#3498DB';
  }
}

function getDataById(id){
  for(var i=0;i<turbinedata.length;i++){
    if(id == turbinedata[i].Location){
      return turbinedata[i];
    } 
  }  
}

var objects = [
  {
      "objectid": 1,
      "name": "Max scene",
      "externalId": "p"
  },
  {
      "objectid": 2,
      "name": "Sea_Wind_Turbine",
      "externalId": "p0"
  },
  {
      "objectid": 3,
      "name": "blade_2",
      "externalId": "p0:0"
  },
  {
      "objectid": 4,
      "name": "body",
      "externalId": "p0:0:0"
  },
  {
      "objectid": 5,
      "name": "blade_1",
      "externalId": "p0:1"
  },
  {
      "objectid": 6,
      "name": "body",
      "externalId": "p0:1:0"
  },
  {
      "objectid": 7,
      "name": "blade_3",
      "externalId": "p0:2"
  },
  {
      "objectid": 8,
      "name": "body",
      "externalId": "p0:2:0"
  },
  {
      "objectid": 9,
      "name": "body",
      "externalId": "p0:3"
  },
  {
      "objectid": 10,
      "name": "body",
      "externalId": "p0:3:0"
  },
  {
      "objectid": 11,
      "name": "glasses_red",
      "externalId": "p0:4"
  },
  {
      "objectid": 12,
      "name": "glass_red",
      "externalId": "p0:4:0"
  },
  {
      "objectid": 13,
      "name": "glasses_white",
      "externalId": "p0:5"
  },
  {
      "objectid": 14,
      "name": "glass_white",
      "externalId": "p0:5:0"
  },
  {
      "objectid": 15,
      "name": "rope",
      "externalId": "p0:6"
  },
  {
      "objectid": 16,
      "name": "rope",
      "externalId": "p0:6:0"
  },
  {
      "objectid": 17,
      "name": "ventilation",
      "externalId": "p0:7"
  },
  {
      "objectid": 18,
      "name": "chrome_detail",
      "externalId": "p0:7:0"
  },
  {
      "objectid": 19,
      "name": "wind_turbine",
      "externalId": "p0:8"
  },
  {
      "objectid": 20,
      "name": "body",
      "externalId": "p0:8:0"
  },
  {
      "objectid": 21,
      "name": "wind_turbine_detail",
      "externalId": "p0:9"
  },
  {
      "objectid": 22,
      "name": "body",
      "externalId": "p0:9:0"
  }
]