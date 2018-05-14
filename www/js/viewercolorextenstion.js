///////////////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.Color
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");
Autodesk.ADN.Viewing.Extension.Color = function(viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var overlayName = "temperary-colored-overlay";
    var overlayName1 = "temperary-colored-overlay1";
    var overlayName2 = "temperary-colored-overlay2";
    var overlayName3 = "temperary-colored-overlay3";
    var _self = this;

    _self.load = function() {

        console.log('Autodesk.ADN.Viewing.Extension.Color loaded');
        ///////////////////////////////////////////////////////////////////////////
        // Generate GUID
        //
        ///////////////////////////////////////////////////////////////////////////
        function newGuid() {
            var d = new Date().getTime();
            var guid = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
            return guid;
        };

        ///////////////////////////////////////////////////////////////////////////
        // add new material
        //
        ///////////////////////////////////////////////////////////////////////////
        function addMaterial(color) {
            var material = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);
            viewer.impl.createOverlayScene(overlayName, material, material);
            return material;
        }

        ///////////////////////////////////////////////////////////////////////////
        function addMaterial1(color) {
            var material = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);
            viewer.impl.createOverlayScene(overlayName1, material, material);
            return material;
        }

        ///////////////////////////////////////////////////////////////////////////
        function addMaterial2(color) {
            var material = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);
            viewer.impl.createOverlayScene(overlayName2, material, material);
            return material;
        }

        ///////////////////////////////////////////////////////////////////////////
        function addMaterial3(color) {
            var material = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);
            viewer.impl.createOverlayScene(overlayName3, material, material);
            return material;
        }

        ///////////////////////////////////////////////////////////////////////////
        // Set color for nodes
        // objectIds should be an array of dbId
        // 
        //
        ///////////////////////////////////////////////////////////////////////////
        Autodesk.Viewing.Viewer3D.prototype.setColorMaterial = function(objectIds, color) {
            var material = addMaterial(color);

            for (var i=0; i<objectIds.length; i++) {

                var dbid = objectIds[i];

                //from dbid to node, to fragid
                var it = viewer.model.getData().instanceTree;

                it.enumNodeFragments(dbid, function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);
            }

        }

        ///////////////////////////////////////////////////////////////////////////
        // experiment
        ///////////////////////////////////////////////////////////////////////////
        Autodesk.Viewing.Viewer3D.prototype.setColorMaterial1 = function(objectIds, colors) {
            var material = addMaterial(colors[0]);
            var material1 = addMaterial1(colors[1]);
            var material2 = addMaterial2(colors[2]);
            var material3 = addMaterial3(colors[3]);

            // for (var i=0; i<objectIds.length; i++) {

                // var dbid = objectIds[i];

                //from dbid to node, to fragid
                var it = viewer.model.getData().instanceTree;

                it.enumNodeFragments(objectIds[0], function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);

                it.enumNodeFragments(objectIds[0], function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);

                it.enumNodeFragments(objectIds[1], function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName1, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);

                it.enumNodeFragments(objectIds[2], function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName2, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);

                it.enumNodeFragments(objectIds[3], function (fragId) {

                    
                    var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);
                    
                    renderProxy.meshProxy = new THREE.Mesh(renderProxy.geometry, renderProxy.material);

                    renderProxy.meshProxy.matrix.copy(renderProxy.matrixWorld);
                    renderProxy.meshProxy.matrixWorldNeedsUpdate = true;
                    renderProxy.meshProxy.matrixAutoUpdate = false;
                    renderProxy.meshProxy.frustumCulled = false;

                    viewer.impl.addOverlay(overlayName3, renderProxy.meshProxy);
                    viewer.impl.invalidate(true);
                    
                }, false);
            // }

        }


        Autodesk.Viewing.Viewer3D.prototype.restoreColorMaterial = function(objectIds) {
       
            for (var i=0; i<objectIds.length; i++) {

                var dbid = objectIds[i];


                //from dbid to node, to fragid
                var it = viewer.model.getData().instanceTree;

                it.enumNodeFragments(dbid, function (fragId) {

                    
                     var renderProxy = viewer.impl.getRenderProxy(viewer.model, fragId);

                    if(renderProxy.meshProxy){

                      //remove all overlays with same name
                      viewer.impl.clearOverlay(overlayName);
                      //viewer.impl.removeOverlay(overlayName, renderProxy.meshProxy);
                      delete renderProxy.meshProxy;
                      

                      //refresh the sence
                      
                      viewer.impl.invalidate(true);


                    }
                                         
                }, true);
            }

  
        }

        _self.unload = function() {
            console.log('Autodesk.ADN.Viewing.Extension.Color unloaded');
            return true;
        };
    };
};
Autodesk.ADN.Viewing.Extension.Color.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
Autodesk.ADN.Viewing.Extension.Color.prototype.constructor = Autodesk.ADN.Viewing.Extension.Color;
Autodesk.Viewing.theExtensionManager.registerExtension('Autodesk.ADN.Viewing.Extension.Color', Autodesk.ADN.Viewing.Extension.Color);