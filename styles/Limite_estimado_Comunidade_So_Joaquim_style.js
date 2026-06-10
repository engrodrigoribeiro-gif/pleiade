var clusterSize = 0;
    
var style_Limite_estimado_Comunidade_So_Joaquim = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = '';
    var bufferColor = '';
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if ("" !== null) {
        labelText = String("");
    }
        var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,214,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.6479999999999997}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    