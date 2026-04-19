var clusterSize = 0;
function categories_AURA_Propriedades_Paiol_Rev01(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Almas Paiol':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,217,29,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Diversos':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(234,59,20,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Água Doce':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(98,201,136,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Água Doce - Lote 04':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,187,234,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Água Doce , lote 03':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(75,221,209,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'FAZENDA BURITI':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(223,91,137,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Figueira':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(174,227,39,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Jacobina':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(239,182,24,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fazenda Kanauan/Fazenda Laço de Ouro':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(228,42,209,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Não Identificado':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,18,213,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(135,134,220,0.7)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_AURA_Propriedades_Paiol_Rev01 = function(feature, resolution){
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
    var value = feature.get("NOME_PROP") || "";
    if ("" !== null) {
        labelText = String("");
    }
    //not draw features with symbology off
    if (symbologySwitcher(lyr_AURA_Propriedades_Paiol_Rev01, value) === null) {
        return null;
    }
        
    var style = categories_AURA_Propriedades_Paiol_Rev01(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    