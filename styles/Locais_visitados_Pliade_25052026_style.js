var clusterSize = 0;
    
var style_Locais_visitados_Pliade_25052026 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = 'rgba(50,50,50,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 2.0999999999999996;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    