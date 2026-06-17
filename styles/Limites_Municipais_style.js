var clusterSize = 0;
function categories_Limites_Municipais(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Abreulândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(108,183,218,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Aguiarnópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(216,40,210,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Aliança do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(180,90,122,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Almas':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(165,181,57,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Alvorada':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,139,10,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Ananás':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(159,87,223,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Angico':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(42,212,161,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Aparecida do Rio Negro':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(116,133,197,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Aragominas':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,107,189,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Araguacema':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(120,91,222,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Araguaçu':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(47,62,225,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Araguaína':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(81,56,222,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Araguanã':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(44,146,150,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Araguatins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(136,112,39,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Arapoema':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(123,144,84,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Arraias':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(23,168,69,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Augustinópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(140,56,146,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Aurora do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(50,148,91,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Axixá do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(136,14,173,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Babaçulândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(67,185,102,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Bandeirantes do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(144,52,151,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Barra do Ouro':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,251,96,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Barrolândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(222,99,103,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Bernardo Sayão':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(247,138,66,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Bom Jesus do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(96,86,170,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Brasilândia do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(174,204,66,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Brejinho de Nazaré':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(138,197,20,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Buriti do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(161,98,116,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Cachoeirinha':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(142,99,79,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Campos Lindos':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(148,105,80,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Cariri do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(187,49,14,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Carmolândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(89,169,103,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Carrasco Bonito':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(129,208,126,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Caseara':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(163,15,33,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Centenário':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(68,50,225,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Chapada da Natividade':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(70,97,214,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Chapada de Areia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(44,147,202,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Colinas do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(137,162,15,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Colméia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(133,30,242,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Combinado':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,42,180,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Conceição do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(211,150,114,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Couto de Magalhães':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(99,120,201,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Cristalândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(20,186,12,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Crixás do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(154,24,61,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Darcinópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(85,180,215,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Dianópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(75,139,65,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Divinópolis do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(96,16,162,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Dois Irmãos do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(96,246,69,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Dueré':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(254,74,149,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Esperantina':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(34,26,145,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fátima':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(94,207,113,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Figueirópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,160,74,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Filadélfia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(135,172,250,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Formoso do Araguaia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(53,235,248,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Fortaleza do Tabocão':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(169,141,55,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Goianorte':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(70,187,152,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Goiatins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(75,151,78,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Guaraí':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,240,226,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Gurupi':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(221,101,211,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Ipueiras':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(222,108,66,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Itacajá':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(119,253,222,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Itaguatins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(140,53,71,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Itapiratins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(86,72,188,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Itaporã do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(155,173,95,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Jaú do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(124,73,148,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Juarina':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(237,217,107,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Lagoa da Confusão':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(67,125,176,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Lagoa do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(159,47,69,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Lajeado':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(50,48,200,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Lavandeira':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(226,139,17,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Lizarda':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(115,190,197,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Luzinópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(39,192,144,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Marianópolis do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,35,152,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Mateiros':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(211,111,164,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Maurilândia do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(136,101,11,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Miracema do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,35,172,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Miranorte':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(15,32,181,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Monte do Carmo':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(58,232,90,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Monte Santo do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(33,134,150,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Muricilândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(193,99,95,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Natividade':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(44,110,216,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Nazaré':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(33,138,51,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Nova Olinda':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(225,63,98,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Nova Rosalândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(23,61,141,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Novo Acordo':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(163,137,255,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Novo Alegre':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(43,31,203,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Novo Jardim':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(157,147,34,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Oliveira de Fátima':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(14,182,53,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Palmas':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(245,70,134,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Palmeirante':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,140,92,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Palmeiras do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(196,76,236,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Palmeirópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(193,117,132,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Paraíso do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(177,193,95,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Paranã':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(20,212,164,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pau d\'Arco':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,164,40,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pedro Afonso':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(217,129,117,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Peixe':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(72,142,216,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pequizeiro':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(209,76,39,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pindorama do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(228,106,183,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Piraquê':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(194,246,52,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pium':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(199,109,180,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Ponte Alta do Bom Jesus':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(146,229,110,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Ponte Alta do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(162,78,81,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Porto Alegre do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(84,148,92,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Porto Nacional':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(202,162,102,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Praia Norte':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(40,160,234,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Presidente Kennedy':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(90,63,240,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Pugmil':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(55,41,253,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Recursolândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(95,156,69,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Riachinho':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,179,18,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Rio da Conceição':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(224,73,60,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Rio dos Bois':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(84,236,19,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Rio Sono':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(97,130,54,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Sampaio':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(137,31,59,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Sandolândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(49,238,103,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Fé do Araguaia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(223,14,45,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Maria do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(15,227,58,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Rita do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(77,118,233,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Rosa do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(121,161,207,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Tereza do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(75,142,114,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Santa Terezinha do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(24,94,168,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Bento do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(135,106,220,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Félix do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(157,120,231,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Miguel do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(167,59,63,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Salvador do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(201,140,50,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Sebastião do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(196,65,142,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'São Valério da Natividade':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(165,67,72,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Silvanópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(144,20,64,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Sítio Novo do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(82,135,59,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Sucupira':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(142,253,164,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Taguatinga':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(218,18,98,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Taipas do Tocantins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(94,133,157,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Talismã':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(79,251,70,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Tocantínia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(116,200,185,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Tocantinópolis':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(214,34,82,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Tupirama':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(196,31,91,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Tupiratins':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(245,58,145,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Wanderlândia':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(239,116,105,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Xambioá':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(90,46,184,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.779)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(77,58,184,0.779)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_Limites_Municipais = function(feature, resolution){
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
    var value = feature.get("NOME") || "";
    if ("" !== null) {
        labelText = String("");
    }
    //not draw features with symbology off
    if (symbologySwitcher(lyr_Limites_Municipais, value) === null) {
        return null;
    }
        
    var style = categories_Limites_Municipais(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    