var clusterSize = 0;
function categories_Imveis_Estrada_Opo3_Nova_Prata(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'FAZENDA ALTO PLANO':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(131,208,222,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA AMARALINA':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(224,192,96,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Lavandeira':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(113,138,213,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA LIMEIRA':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(201,81,60,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA NOVA BARRA PARTE':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(221,61,130,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA NOVA PRATA':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(166,209,86,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA NOVO ALEGRE LOTE 1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(118,72,202,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA RIO GRANDE':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(221,59,229,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA SANTA HELENA':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.595)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(49,218,40,0.595)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_Imveis_Estrada_Opo3_Nova_Prata = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = 'rgba(50,50,50,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 2.7;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("nom_imovel") || "";
    if (feature.get("nom_imovel") !== null) {
        labelText = String(feature.get("nom_imovel"));
    }
    //not draw features with symbology off
    if (symbologySwitcher(lyr_Imveis_Estrada_Opo3_Nova_Prata, value) === null) {
        return null;
    }
        
    var style = categories_Imveis_Estrada_Opo3_Nova_Prata(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    