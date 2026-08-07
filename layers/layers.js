var wms_layers = [];

var lyr_Imagem_Google = new ol.layer.Tile({
            'title': 'Imagem_Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&hl=pt-BR&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_ImagemdeSatlitePleiades2015 = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://geoportal.to.gov.br/geoserver/imagens/ows?SERVICE=WMS&",
                attributions: '<a class="legend-realtime"><b>Imagem de Satélite Pleiades - 2015</b><br />',
                params: {
                "LAYERS": "imagem_satelite_pleiades_2015",
                //"TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Imagem de Satélite Pleiades - 2015<br />',
            popuplayertitle: 'Imagem de Satélite Pleiades - 2015',
            permalink: 'ImagemdeSatlitePleiades2015',
            opacity: 1.000000,
            
            
            
            });
    wms_layers.push([lyr_ImagemdeSatlitePleiades2015, 0]);
    lyr_ImagemdeSatlitePleiades2015.setVisible(false);
    

    var projection_GlobalMonthly202603Mosaic = ol.proj.get('EPSG:3857');
    var projectionExtent_GlobalMonthly202603Mosaic = projection_GlobalMonthly202603Mosaic.getExtent();
    var size_GlobalMonthly202603Mosaic = ol.extent.getWidth(projectionExtent_GlobalMonthly202603Mosaic) / 256;
    var resolutions_GlobalMonthly202603Mosaic = new Array(14);
    var matrixIds_GlobalMonthly202603Mosaic = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GlobalMonthly202603Mosaic[z] = size_GlobalMonthly202603Mosaic / Math.pow(2, z);
        matrixIds_GlobalMonthly202603Mosaic[z] = z;
    }
    var lyr_GlobalMonthly202603Mosaic = new ol.layer.Tile({
        source: new ol.source.WMTS(({
            url: "/api/planet-disabled",
            attributions: ' ',
            "layer": "global_monthly_2026_03_mosaic",
            "TILED": "true",
            matrixSet: 'EPSG:3857',
            format: 'image/png',
            projection: projection_GlobalMonthly202603Mosaic,
            tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GlobalMonthly202603Mosaic),
                resolutions: resolutions_GlobalMonthly202603Mosaic,
                matrixIds: matrixIds_GlobalMonthly202603Mosaic
            }),
            style: 'Default',
            wrapX: true,
            "VERSION": "1.0.0",
        })),
        title: 'Global Monthly 2026 03 Mosaic',
        opacity: 1.0,
        
        
        });

    var projection_GlobalMonthly202507Mosaic = ol.proj.get('EPSG:3857');
    var projectionExtent_GlobalMonthly202507Mosaic = projection_GlobalMonthly202507Mosaic.getExtent();
    var size_GlobalMonthly202507Mosaic = ol.extent.getWidth(projectionExtent_GlobalMonthly202507Mosaic) / 256;
    var resolutions_GlobalMonthly202507Mosaic = new Array(14);
    var matrixIds_GlobalMonthly202507Mosaic = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GlobalMonthly202507Mosaic[z] = size_GlobalMonthly202507Mosaic / Math.pow(2, z);
        matrixIds_GlobalMonthly202507Mosaic[z] = z;
    }
    var lyr_GlobalMonthly202507Mosaic = new ol.layer.Tile({
        source: new ol.source.WMTS(({
            url: "/api/planet-disabled",
            attributions: ' ',
            "layer": "global_monthly_2025_07_mosaic",
            "TILED": "true",
            matrixSet: 'EPSG:3857',
            format: 'image/png',
            projection: projection_GlobalMonthly202507Mosaic,
            tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GlobalMonthly202507Mosaic),
                resolutions: resolutions_GlobalMonthly202507Mosaic,
                matrixIds: matrixIds_GlobalMonthly202507Mosaic
            }),
            style: 'Default',
            wrapX: true,
            "VERSION": "1.0.0",
        })),
        title: 'Global Monthly 2025 07 Mosaic',
        opacity: 1.0,
        
        
        });

    var projection_GlobalMonthly202407Mosaic = ol.proj.get('EPSG:3857');
    var projectionExtent_GlobalMonthly202407Mosaic = projection_GlobalMonthly202407Mosaic.getExtent();
    var size_GlobalMonthly202407Mosaic = ol.extent.getWidth(projectionExtent_GlobalMonthly202407Mosaic) / 256;
    var resolutions_GlobalMonthly202407Mosaic = new Array(14);
    var matrixIds_GlobalMonthly202407Mosaic = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GlobalMonthly202407Mosaic[z] = size_GlobalMonthly202407Mosaic / Math.pow(2, z);
        matrixIds_GlobalMonthly202407Mosaic[z] = z;
    }
    var lyr_GlobalMonthly202407Mosaic = new ol.layer.Tile({
        source: new ol.source.WMTS(({
            url: "/api/planet-disabled",
            attributions: ' ',
            "layer": "global_monthly_2024_07_mosaic",
            "TILED": "true",
            matrixSet: 'EPSG:3857',
            format: 'image/png',
            projection: projection_GlobalMonthly202407Mosaic,
            tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GlobalMonthly202407Mosaic),
                resolutions: resolutions_GlobalMonthly202407Mosaic,
                matrixIds: matrixIds_GlobalMonthly202407Mosaic
            }),
            style: 'Default',
            wrapX: true,
            "VERSION": "1.0.0",
        })),
        title: 'Global Monthly 2024 07 Mosaic',
        opacity: 1.0,
        
        
        });

    var projection_GlobalMonthly202307Mosaic = ol.proj.get('EPSG:3857');
    var projectionExtent_GlobalMonthly202307Mosaic = projection_GlobalMonthly202307Mosaic.getExtent();
    var size_GlobalMonthly202307Mosaic = ol.extent.getWidth(projectionExtent_GlobalMonthly202307Mosaic) / 256;
    var resolutions_GlobalMonthly202307Mosaic = new Array(14);
    var matrixIds_GlobalMonthly202307Mosaic = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_GlobalMonthly202307Mosaic[z] = size_GlobalMonthly202307Mosaic / Math.pow(2, z);
        matrixIds_GlobalMonthly202307Mosaic[z] = z;
    }
    var lyr_GlobalMonthly202307Mosaic = new ol.layer.Tile({
        source: new ol.source.WMTS(({
            url: "/api/planet-disabled",
            attributions: ' ',
            "layer": "global_monthly_2023_07_mosaic",
            "TILED": "true",
            matrixSet: 'EPSG:3857',
            format: 'image/png',
            projection: projection_GlobalMonthly202307Mosaic,
            tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_GlobalMonthly202307Mosaic),
                resolutions: resolutions_GlobalMonthly202307Mosaic,
                matrixIds: matrixIds_GlobalMonthly202307Mosaic
            }),
            style: 'Default',
            wrapX: true,
            "VERSION": "1.0.0",
        })),
        title: 'Global Monthly 2023 07 Mosaic',
        opacity: 1.0,
        
        
        });
var lyr_WorldImagery = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
        

var lyr_V1_Fz_Lavandeira_II_16062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Lavandeira_II_16062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Lavandeira_II_16062026",
    popuplayertitle: 'V1_Fz_Lavandeira_II_16-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Lavandeira_II_16062026_data() {
    var format_V1_Fz_Lavandeira_II_16062026 = new ol.format.GeoJSON();
    var features_V1_Fz_Lavandeira_II_16062026 = format_V1_Fz_Lavandeira_II_16062026.readFeatures(json_V1_Fz_Lavandeira_II_16062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Lavandeira_II_16062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Lavandeira_II_16-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_II_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Lavandeira_II_16062026.setSource(jsonSource_V1_Fz_Lavandeira_II_16062026);
    lyr_V1_Fz_Lavandeira_II_16062026.set(
    "title", '<div id="layertitle">V1_Fz_Lavandeira_II_16-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Lavandeira_II_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Lavandeira_II_16062026 = 1;
    jsonSource_V1_Fz_Lavandeira_II_16062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Lavandeira_II_16062026++);
        feature.set("layerObject", lyr_V1_Fz_Lavandeira_II_16062026);
    });        
    jsonSource_V1_Fz_Lavandeira_II_16062026.addFeatures(features_V1_Fz_Lavandeira_II_16062026);
}
applySLDstyle(lyr_V1_Fz_Lavandeira_II_16062026, style_V1_Fz_Lavandeira_II_16062026, 'V1_Fz_Lavandeira_II_16-06-2026');


var lyr_V1_Fz_Brejo_Alegre_III_16062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Brejo_Alegre_III_16062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Brejo_Alegre_III_16062026",
    popuplayertitle: 'V1_Fz_Brejo_Alegre_III_16-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Brejo_Alegre_III_16062026_data() {
    var format_V1_Fz_Brejo_Alegre_III_16062026 = new ol.format.GeoJSON();
    var features_V1_Fz_Brejo_Alegre_III_16062026 = format_V1_Fz_Brejo_Alegre_III_16062026.readFeatures(json_V1_Fz_Brejo_Alegre_III_16062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Brejo_Alegre_III_16062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Brejo_Alegre_III_16-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Brejo_Alegre_III_16062026.setSource(jsonSource_V1_Fz_Brejo_Alegre_III_16062026);
    lyr_V1_Fz_Brejo_Alegre_III_16062026.set(
    "title", '<div id="layertitle">V1_Fz_Brejo_Alegre_III_16-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Brejo_Alegre_III_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Brejo_Alegre_III_16062026 = 1;
    jsonSource_V1_Fz_Brejo_Alegre_III_16062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Brejo_Alegre_III_16062026++);
        feature.set("layerObject", lyr_V1_Fz_Brejo_Alegre_III_16062026);
    });        
    jsonSource_V1_Fz_Brejo_Alegre_III_16062026.addFeatures(features_V1_Fz_Brejo_Alegre_III_16062026);
}
applySLDstyle(lyr_V1_Fz_Brejo_Alegre_III_16062026, style_V1_Fz_Brejo_Alegre_III_16062026, 'V1_Fz_Brejo_Alegre_III_16-06-2026');


var lyr_V1_Fz_BrejoAlegreII_16062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_BrejoAlegreII_16062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_BrejoAlegreII_16062026",
    popuplayertitle: 'V1_Fz_Brejo Alegre II_16-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_BrejoAlegreII_16062026_data() {
    var format_V1_Fz_BrejoAlegreII_16062026 = new ol.format.GeoJSON();
    var features_V1_Fz_BrejoAlegreII_16062026 = format_V1_Fz_BrejoAlegreII_16062026.readFeatures(json_V1_Fz_BrejoAlegreII_16062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_BrejoAlegreII_16062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Brejo Alegre II_16-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_BrejoAlegreII_16062026.setSource(jsonSource_V1_Fz_BrejoAlegreII_16062026);
    lyr_V1_Fz_BrejoAlegreII_16062026.set(
    "title", '<div id="layertitle">V1_Fz_Brejo Alegre II_16-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_BrejoAlegreII_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_BrejoAlegreII_16062026 = 1;
    jsonSource_V1_Fz_BrejoAlegreII_16062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_BrejoAlegreII_16062026++);
        feature.set("layerObject", lyr_V1_Fz_BrejoAlegreII_16062026);
    });        
    jsonSource_V1_Fz_BrejoAlegreII_16062026.addFeatures(features_V1_Fz_BrejoAlegreII_16062026);
}
applySLDstyle(lyr_V1_Fz_BrejoAlegreII_16062026, style_V1_Fz_BrejoAlegreII_16062026, 'V1_Fz_Brejo Alegre II_16-06-2026');


var lyr_V1_Fz_BrejoAlegreI_16062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_BrejoAlegreI_16062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_BrejoAlegreI_16062026",
    popuplayertitle: 'V1_Fz_Brejo Alegre I_16-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_BrejoAlegreI_16062026_data() {
    var format_V1_Fz_BrejoAlegreI_16062026 = new ol.format.GeoJSON();
    var features_V1_Fz_BrejoAlegreI_16062026 = format_V1_Fz_BrejoAlegreI_16062026.readFeatures(json_V1_Fz_BrejoAlegreI_16062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_BrejoAlegreI_16062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Brejo Alegre I_16-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_BrejoAlegreI_16062026.setSource(jsonSource_V1_Fz_BrejoAlegreI_16062026);
    lyr_V1_Fz_BrejoAlegreI_16062026.set(
    "title", '<div id="layertitle">V1_Fz_Brejo Alegre I_16-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_BrejoAlegreI_16062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_BrejoAlegreI_16062026 = 1;
    jsonSource_V1_Fz_BrejoAlegreI_16062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_BrejoAlegreI_16062026++);
        feature.set("layerObject", lyr_V1_Fz_BrejoAlegreI_16062026);
    });        
    jsonSource_V1_Fz_BrejoAlegreI_16062026.addFeatures(features_V1_Fz_BrejoAlegreI_16062026);
}
applySLDstyle(lyr_V1_Fz_BrejoAlegreI_16062026, style_V1_Fz_BrejoAlegreI_16062026, 'V1_Fz_Brejo Alegre I_16-06-2026');


var lyr_V1_Fz_Nova_Barra_10062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Nova_Barra_10062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Nova_Barra_10062026",
    popuplayertitle: 'V1_Fz_Nova_Barra_10-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Nova_Barra_10062026_data() {
    var format_V1_Fz_Nova_Barra_10062026 = new ol.format.GeoJSON();
    var features_V1_Fz_Nova_Barra_10062026 = format_V1_Fz_Nova_Barra_10062026.readFeatures(json_V1_Fz_Nova_Barra_10062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Nova_Barra_10062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Nova_Barra_10-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Nova_Barra_10062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Nova_Barra_10062026.setSource(jsonSource_V1_Fz_Nova_Barra_10062026);
    lyr_V1_Fz_Nova_Barra_10062026.set(
    "title", '<div id="layertitle">V1_Fz_Nova_Barra_10-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Nova_Barra_10062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Nova_Barra_10062026 = 1;
    jsonSource_V1_Fz_Nova_Barra_10062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Nova_Barra_10062026++);
        feature.set("layerObject", lyr_V1_Fz_Nova_Barra_10062026);
    });        
    jsonSource_V1_Fz_Nova_Barra_10062026.addFeatures(features_V1_Fz_Nova_Barra_10062026);
}
applySLDstyle(lyr_V1_Fz_Nova_Barra_10062026, style_V1_Fz_Nova_Barra_10062026, 'V1_Fz_Nova_Barra_10-06-2026');


var lyr_V1_Fz_Limeira_10062026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Limeira_10062026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Limeira_10062026",
    popuplayertitle: 'V1_Fz_Limeira_10-06-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Limeira_10062026_data() {
    var format_V1_Fz_Limeira_10062026 = new ol.format.GeoJSON();
    var features_V1_Fz_Limeira_10062026 = format_V1_Fz_Limeira_10062026.readFeatures(json_V1_Fz_Limeira_10062026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Limeira_10062026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Limeira_10-06-2026</b><br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Limeira_10062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Limeira_10062026.setSource(jsonSource_V1_Fz_Limeira_10062026);
    lyr_V1_Fz_Limeira_10062026.set(
    "title", '<div id="layertitle">V1_Fz_Limeira_10-06-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Limeira_10062026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Limeira_10062026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Limeira_10062026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Limeira_10062026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Limeira_10062026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Limeira_10062026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Limeira_10062026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Limeira_10062026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Limeira_10062026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Limeira_10062026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Limeira_10062026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Limeira_10062026 = 1;
    jsonSource_V1_Fz_Limeira_10062026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Limeira_10062026++);
        feature.set("layerObject", lyr_V1_Fz_Limeira_10062026);
    });        
    jsonSource_V1_Fz_Limeira_10062026.addFeatures(features_V1_Fz_Limeira_10062026);
}
applySLDstyle(lyr_V1_Fz_Limeira_10062026, style_V1_Fz_Limeira_10062026, 'V1_Fz_Limeira_10-06-2026');


var lyr_V1_Fz_SantaHelena_29052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_SantaHelena_29052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_SantaHelena_29052026",
    popuplayertitle: 'V1_Fz_Santa Helena_29-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_SantaHelena_29052026_data() {
    var format_V1_Fz_SantaHelena_29052026 = new ol.format.GeoJSON();
    var features_V1_Fz_SantaHelena_29052026 = format_V1_Fz_SantaHelena_29052026.readFeatures(json_V1_Fz_SantaHelena_29052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_SantaHelena_29052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Santa Helena_29-05-2026</b><br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_SantaHelena_29052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_SantaHelena_29052026.setSource(jsonSource_V1_Fz_SantaHelena_29052026);
    lyr_V1_Fz_SantaHelena_29052026.set(
    "title", '<div id="layertitle">V1_Fz_Santa Helena_29-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_SantaHelena_29052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_SantaHelena_29052026 = 1;
    jsonSource_V1_Fz_SantaHelena_29052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_SantaHelena_29052026++);
        feature.set("layerObject", lyr_V1_Fz_SantaHelena_29052026);
    });        
    jsonSource_V1_Fz_SantaHelena_29052026.addFeatures(features_V1_Fz_SantaHelena_29052026);
}
applySLDstyle(lyr_V1_Fz_SantaHelena_29052026, style_V1_Fz_SantaHelena_29052026, 'V1_Fz_Santa Helena_29-05-2026');


var lyr_V1_Fz_Lavandeira_29052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Lavandeira_29052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Lavandeira_29052026",
    popuplayertitle: 'V1_Fz_Lavandeira_29-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Lavandeira_29052026_data() {
    var format_V1_Fz_Lavandeira_29052026 = new ol.format.GeoJSON();
    var features_V1_Fz_Lavandeira_29052026 = format_V1_Fz_Lavandeira_29052026.readFeatures(json_V1_Fz_Lavandeira_29052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Lavandeira_29052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Lavandeira_29-05-2026</b><br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Lavandeira_29052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Lavandeira_29052026.setSource(jsonSource_V1_Fz_Lavandeira_29052026);
    lyr_V1_Fz_Lavandeira_29052026.set(
    "title", '<div id="layertitle">V1_Fz_Lavandeira_29-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Lavandeira_29052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Lavandeira_29052026 = 1;
    jsonSource_V1_Fz_Lavandeira_29052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Lavandeira_29052026++);
        feature.set("layerObject", lyr_V1_Fz_Lavandeira_29052026);
    });        
    jsonSource_V1_Fz_Lavandeira_29052026.addFeatures(features_V1_Fz_Lavandeira_29052026);
}
applySLDstyle(lyr_V1_Fz_Lavandeira_29052026, style_V1_Fz_Lavandeira_29052026, 'V1_Fz_Lavandeira_29-05-2026');


var lyr_V1_Fz_Amaralina_19052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Amaralina_19052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Amaralina_19052026",
    popuplayertitle: 'V1_Fz_Amaralina_19-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Amaralina_19052026_data() {
    var format_V1_Fz_Amaralina_19052026 = new ol.format.GeoJSON();
    var features_V1_Fz_Amaralina_19052026 = format_V1_Fz_Amaralina_19052026.readFeatures(json_V1_Fz_Amaralina_19052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Amaralina_19052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Amaralina_19-05-2026</b><br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Amaralina_19052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Amaralina_19052026.setSource(jsonSource_V1_Fz_Amaralina_19052026);
    lyr_V1_Fz_Amaralina_19052026.set(
    "title", '<div id="layertitle">V1_Fz_Amaralina_19-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Amaralina_19052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Amaralina_19052026 = 1;
    jsonSource_V1_Fz_Amaralina_19052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Amaralina_19052026++);
        feature.set("layerObject", lyr_V1_Fz_Amaralina_19052026);
    });        
    jsonSource_V1_Fz_Amaralina_19052026.addFeatures(features_V1_Fz_Amaralina_19052026);
}
applySLDstyle(lyr_V1_Fz_Amaralina_19052026, style_V1_Fz_Amaralina_19052026, 'V1_Fz_Amaralina_19-05-2026');


var lyr_V1_Fz_Lote15_190526 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Lote15_190526',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Lote15_190526",
    popuplayertitle: 'V1_Fz_Lote15_19-05-26',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Lote15_190526_data() {
    var format_V1_Fz_Lote15_190526 = new ol.format.GeoJSON();
    var features_V1_Fz_Lote15_190526 = format_V1_Fz_Lote15_190526.readFeatures(json_V1_Fz_Lote15_190526, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Lote15_190526 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Lote15_19-05-26</b><br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Lote15_190526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Lote15_190526.setSource(jsonSource_V1_Fz_Lote15_190526);
    lyr_V1_Fz_Lote15_190526.set(
    "title", '<div id="layertitle">V1_Fz_Lote15_19-05-26<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Lote15_190526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Lote15_190526_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Lote15_190526_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Lote15_190526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Lote15_190526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Lote15_190526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Lote15_190526_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Lote15_190526_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Lote15_190526_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Lote15_190526_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Lote15_190526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Lote15_190526 = 1;
    jsonSource_V1_Fz_Lote15_190526.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Lote15_190526++);
        feature.set("layerObject", lyr_V1_Fz_Lote15_190526);
    });        
    jsonSource_V1_Fz_Lote15_190526.addFeatures(features_V1_Fz_Lote15_190526);
}
applySLDstyle(lyr_V1_Fz_Lote15_190526, style_V1_Fz_Lote15_190526, 'V1_Fz_Lote15_19-05-26');


var lyr_V1_Fz_Sao_Jose_190526 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Sao_Jose_190526',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Sao_Jose_190526",
    popuplayertitle: 'V1_Fz_Sao_Jose_19-05-26',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Sao_Jose_190526_data() {
    var format_V1_Fz_Sao_Jose_190526 = new ol.format.GeoJSON();
    var features_V1_Fz_Sao_Jose_190526 = format_V1_Fz_Sao_Jose_190526.readFeatures(json_V1_Fz_Sao_Jose_190526, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Sao_Jose_190526 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Sao_Jose_19-05-26</b><br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Sao_Jose_190526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Sao_Jose_190526.setSource(jsonSource_V1_Fz_Sao_Jose_190526);
    lyr_V1_Fz_Sao_Jose_190526.set(
    "title", '<div id="layertitle">V1_Fz_Sao_Jose_19-05-26<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Sao_Jose_190526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Sao_Jose_190526 = 1;
    jsonSource_V1_Fz_Sao_Jose_190526.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Sao_Jose_190526++);
        feature.set("layerObject", lyr_V1_Fz_Sao_Jose_190526);
    });        
    jsonSource_V1_Fz_Sao_Jose_190526.addFeatures(features_V1_Fz_Sao_Jose_190526);
}
applySLDstyle(lyr_V1_Fz_Sao_Jose_190526, style_V1_Fz_Sao_Jose_190526, 'V1_Fz_Sao_Jose_19-05-26');


var lyr_V2_Fz_SantaLuzia_19052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V2_Fz_SantaLuzia_19052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V2_Fz_SantaLuzia_19052026",
    popuplayertitle: 'V2_Fz_Santa Luzia_19-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V2_Fz_SantaLuzia_19052026_data() {
    var format_V2_Fz_SantaLuzia_19052026 = new ol.format.GeoJSON();
    var features_V2_Fz_SantaLuzia_19052026 = format_V2_Fz_SantaLuzia_19052026.readFeatures(json_V2_Fz_SantaLuzia_19052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V2_Fz_SantaLuzia_19052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V2_Fz_Santa Luzia_19-05-2026</b><br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V2_Fz_SantaLuzia_19052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V2_Fz_SantaLuzia_19052026.setSource(jsonSource_V2_Fz_SantaLuzia_19052026);
    lyr_V2_Fz_SantaLuzia_19052026.set(
    "title", '<div id="layertitle">V2_Fz_Santa Luzia_19-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V2_Fz_SantaLuzia_19052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V2_Fz_SantaLuzia_19052026 = 1;
    jsonSource_V2_Fz_SantaLuzia_19052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V2_Fz_SantaLuzia_19052026++);
        feature.set("layerObject", lyr_V2_Fz_SantaLuzia_19052026);
    });        
    jsonSource_V2_Fz_SantaLuzia_19052026.addFeatures(features_V2_Fz_SantaLuzia_19052026);
}
applySLDstyle(lyr_V2_Fz_SantaLuzia_19052026, style_V2_Fz_SantaLuzia_19052026, 'V2_Fz_Santa Luzia_19-05-2026');


var lyr_V1_Fz_SantaLuzia_07052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_SantaLuzia_07052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_SantaLuzia_07052026",
    popuplayertitle: 'V1_Fz_Santa Luzia_07-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_SantaLuzia_07052026_data() {
    var format_V1_Fz_SantaLuzia_07052026 = new ol.format.GeoJSON();
    var features_V1_Fz_SantaLuzia_07052026 = format_V1_Fz_SantaLuzia_07052026.readFeatures(json_V1_Fz_SantaLuzia_07052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_SantaLuzia_07052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Santa Luzia_07-05-2026</b><br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_SantaLuzia_07052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_SantaLuzia_07052026.setSource(jsonSource_V1_Fz_SantaLuzia_07052026);
    lyr_V1_Fz_SantaLuzia_07052026.set(
    "title", '<div id="layertitle">V1_Fz_Santa Luzia_07-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_SantaLuzia_07052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_SantaLuzia_07052026 = 1;
    jsonSource_V1_Fz_SantaLuzia_07052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_SantaLuzia_07052026++);
        feature.set("layerObject", lyr_V1_Fz_SantaLuzia_07052026);
    });        
    jsonSource_V1_Fz_SantaLuzia_07052026.addFeatures(features_V1_Fz_SantaLuzia_07052026);
}
applySLDstyle(lyr_V1_Fz_SantaLuzia_07052026, style_V1_Fz_SantaLuzia_07052026, 'V1_Fz_Santa Luzia_07-05-2026');


var lyr_V3_Fz_NovaPrata_10052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V3_Fz_NovaPrata_10052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V3_Fz_NovaPrata_10052026",
    popuplayertitle: 'V3_Fz_Nova Prata_10-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V3_Fz_NovaPrata_10052026_data() {
    var format_V3_Fz_NovaPrata_10052026 = new ol.format.GeoJSON();
    var features_V3_Fz_NovaPrata_10052026 = format_V3_Fz_NovaPrata_10052026.readFeatures(json_V3_Fz_NovaPrata_10052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V3_Fz_NovaPrata_10052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V3_Fz_Nova Prata_10-05-2026</b><br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V3_Fz_NovaPrata_10052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V3_Fz_NovaPrata_10052026.setSource(jsonSource_V3_Fz_NovaPrata_10052026);
    lyr_V3_Fz_NovaPrata_10052026.set(
    "title", '<div id="layertitle">V3_Fz_Nova Prata_10-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V3_Fz_NovaPrata_10052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V3_Fz_NovaPrata_10052026 = 1;
    jsonSource_V3_Fz_NovaPrata_10052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V3_Fz_NovaPrata_10052026++);
        feature.set("layerObject", lyr_V3_Fz_NovaPrata_10052026);
    });        
    jsonSource_V3_Fz_NovaPrata_10052026.addFeatures(features_V3_Fz_NovaPrata_10052026);
}
applySLDstyle(lyr_V3_Fz_NovaPrata_10052026, style_V3_Fz_NovaPrata_10052026, 'V3_Fz_Nova Prata_10-05-2026');


var lyr_V2_Fz_NovaPrata_07052026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V2_Fz_NovaPrata_07052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V2_Fz_NovaPrata_07052026",
    popuplayertitle: 'V2_Fz_Nova Prata_07-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V2_Fz_NovaPrata_07052026_data() {
    var format_V2_Fz_NovaPrata_07052026 = new ol.format.GeoJSON();
    var features_V2_Fz_NovaPrata_07052026 = format_V2_Fz_NovaPrata_07052026.readFeatures(json_V2_Fz_NovaPrata_07052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V2_Fz_NovaPrata_07052026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V2_Fz_Nova Prata_07-05-2026</b><br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V2_Fz_NovaPrata_07052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V2_Fz_NovaPrata_07052026.setSource(jsonSource_V2_Fz_NovaPrata_07052026);
    lyr_V2_Fz_NovaPrata_07052026.set(
    "title", '<div id="layertitle">V2_Fz_Nova Prata_07-05-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V2_Fz_NovaPrata_07052026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V2_Fz_NovaPrata_07052026 = 1;
    jsonSource_V2_Fz_NovaPrata_07052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V2_Fz_NovaPrata_07052026++);
        feature.set("layerObject", lyr_V2_Fz_NovaPrata_07052026);
    });        
    jsonSource_V2_Fz_NovaPrata_07052026.addFeatures(features_V2_Fz_NovaPrata_07052026);
}
applySLDstyle(lyr_V2_Fz_NovaPrata_07052026, style_V2_Fz_NovaPrata_07052026, 'V2_Fz_Nova Prata_07-05-2026');


var lyr_V1_Fz_NovaPrata_24042026 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_NovaPrata_24042026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_NovaPrata_24042026",
    popuplayertitle: 'V1_Fz_Nova Prata_24-04-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_NovaPrata_24042026_data() {
    var format_V1_Fz_NovaPrata_24042026 = new ol.format.GeoJSON();
    var features_V1_Fz_NovaPrata_24042026 = format_V1_Fz_NovaPrata_24042026.readFeatures(json_V1_Fz_NovaPrata_24042026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_NovaPrata_24042026 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Nova Prata_24-04-2026</b><br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_NovaPrata_24042026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_NovaPrata_24042026.setSource(jsonSource_V1_Fz_NovaPrata_24042026);
    lyr_V1_Fz_NovaPrata_24042026.set(
    "title", '<div id="layertitle">V1_Fz_Nova Prata_24-04-2026<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_NovaPrata_24042026_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_NovaPrata_24042026 = 1;
    jsonSource_V1_Fz_NovaPrata_24042026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_NovaPrata_24042026++);
        feature.set("layerObject", lyr_V1_Fz_NovaPrata_24042026);
    });        
    jsonSource_V1_Fz_NovaPrata_24042026.addFeatures(features_V1_Fz_NovaPrata_24042026);
}
applySLDstyle(lyr_V1_Fz_NovaPrata_24042026, style_V1_Fz_NovaPrata_24042026, 'V1_Fz_Nova Prata_24-04-2026');


var lyr_Locais_visitados_Pliade_25052026 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Locais_visitados_Pliade_25052026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Locais_visitados_Pliade_25052026",
    popuplayertitle: 'Locais_visitados_Plêiade_25-05-2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Locais_visitados_Pliade_25052026,
});
function load_Locais_visitados_Pliade_25052026_data() {
    var format_Locais_visitados_Pliade_25052026 = new ol.format.GeoJSON();
    var features_Locais_visitados_Pliade_25052026 = format_Locais_visitados_Pliade_25052026.readFeatures(json_Locais_visitados_Pliade_25052026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Locais_visitados_Pliade_25052026 = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Locais_visitados_Pliade_25052026.png"/><b>Locais_visitados_Plêiade_25-05-2026</b>'
    });
    lyr_Locais_visitados_Pliade_25052026.setSource(jsonSource_Locais_visitados_Pliade_25052026);
    lyr_Locais_visitados_Pliade_25052026.set(
    "title", '<img src="styles/legend/Locais_visitados_Pliade_25052026.png"/>Locais_visitados_Plêiade_25-05-2026'
    );
    var featureCounter_Locais_visitados_Pliade_25052026 = 1;
    jsonSource_Locais_visitados_Pliade_25052026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Locais_visitados_Pliade_25052026++);
        feature.set("layerObject", lyr_Locais_visitados_Pliade_25052026);
    });        
    jsonSource_Locais_visitados_Pliade_25052026.addFeatures(features_Locais_visitados_Pliade_25052026);
}

var lyr_Imveis_Estrada_Opo3_Nova_Prata = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Imveis_Estrada_Opo3_Nova_Prata',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Imveis_Estrada_Opo3_Nova_Prata",
    popuplayertitle: 'Imóveis_Estrada_Opção3_Nova_Prata',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Imveis_Estrada_Opo3_Nova_Prata,
});
function load_Imveis_Estrada_Opo3_Nova_Prata_data() {
    var format_Imveis_Estrada_Opo3_Nova_Prata = new ol.format.GeoJSON();
    var features_Imveis_Estrada_Opo3_Nova_Prata = format_Imveis_Estrada_Opo3_Nova_Prata.readFeatures(json_Imveis_Estrada_Opo3_Nova_Prata, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Imveis_Estrada_Opo3_Nova_Prata = new ol.source.Vector({
    attributions: '<a class="legend"><b>Imóveis_Estrada_Opção3_Nova_Prata</b><br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_0.png"/>FAZENDA ALTO PLANO<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_1.png"/>FAZENDA AMARALINA<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_2.png"/>Fazenda Lavandeira<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_3.png"/>FAZENDA LIMEIRA<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_4.png"/>FAZENDA NOVA BARRA PARTE<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_5.png"/>FAZENDA NOVA PRATA<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_6.png"/>FAZENDA NOVO ALEGRE LOTE 1<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_7.png"/>FAZENDA RIO GRANDE<br />\
        <img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_8.png"/>FAZENDA SANTA HELENA<br /></a>'
        });
    lyr_Imveis_Estrada_Opo3_Nova_Prata.setSource(jsonSource_Imveis_Estrada_Opo3_Nova_Prata);
    lyr_Imveis_Estrada_Opo3_Nova_Prata.set(
    "title", '<div id="layertitle">Imóveis_Estrada_Opção3_Nova_Prata<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA ALTO PLANO" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_0.png"/>FAZENDA ALTO PLANO<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA AMARALINA" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_1.png"/>FAZENDA AMARALINA<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Lavandeira" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_2.png"/>Fazenda Lavandeira<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA LIMEIRA" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_3.png"/>FAZENDA LIMEIRA<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA NOVA BARRA PARTE" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_4.png"/>FAZENDA NOVA BARRA PARTE<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA NOVA PRATA" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_5.png"/>FAZENDA NOVA PRATA<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA NOVO ALEGRE LOTE 1" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_6.png"/>FAZENDA NOVO ALEGRE LOTE 1<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA RIO GRANDE" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_7.png"/>FAZENDA RIO GRANDE<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA SANTA HELENA" checked><img src="styles/legend/Imveis_Estrada_Opo3_Nova_Prata_8.png"/>FAZENDA SANTA HELENA<br /></a>'
        );
    var featureCounter_Imveis_Estrada_Opo3_Nova_Prata = 1;
    jsonSource_Imveis_Estrada_Opo3_Nova_Prata.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Imveis_Estrada_Opo3_Nova_Prata++);
        feature.set("layerObject", lyr_Imveis_Estrada_Opo3_Nova_Prata);
    });        
    jsonSource_Imveis_Estrada_Opo3_Nova_Prata.addFeatures(features_Imveis_Estrada_Opo3_Nova_Prata);
}

var lyr_RevisoADANovaPrata_27042026 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> RevisoADANovaPrata_27042026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "RevisoADANovaPrata_27042026",
    popuplayertitle: 'Revisão ADA Nova Prata_27.04.2026',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_RevisoADANovaPrata_27042026,
});
function load_RevisoADANovaPrata_27042026_data() {
    var format_RevisoADANovaPrata_27042026 = new ol.format.GeoJSON();
    var features_RevisoADANovaPrata_27042026 = format_RevisoADANovaPrata_27042026.readFeatures(json_RevisoADANovaPrata_27042026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_RevisoADANovaPrata_27042026 = new ol.source.Vector({
    attributions: "<a class='legend'><b>Revisão ADA Nova Prata_27.04.2026</b></a>"
    });
    lyr_RevisoADANovaPrata_27042026.setSource(jsonSource_RevisoADANovaPrata_27042026);
    lyr_RevisoADANovaPrata_27042026.set(
    "title", 'Revisão ADA Nova Prata_27.04.2026'
    );
    var featureCounter_RevisoADANovaPrata_27042026 = 1;
    jsonSource_RevisoADANovaPrata_27042026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_RevisoADANovaPrata_27042026++);
        feature.set("layerObject", lyr_RevisoADANovaPrata_27042026);
    });        
    jsonSource_RevisoADANovaPrata_27042026.addFeatures(features_RevisoADANovaPrata_27042026);
}

var lyr_EstradasNovaPrata = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> EstradasNovaPrata',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "EstradasNovaPrata",
    popuplayertitle: 'Estradas Nova Prata',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_EstradasNovaPrata,
});
function load_EstradasNovaPrata_data() {
    var format_EstradasNovaPrata = new ol.format.GeoJSON();
    var features_EstradasNovaPrata = format_EstradasNovaPrata.readFeatures(json_EstradasNovaPrata, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_EstradasNovaPrata = new ol.source.Vector({
    attributions: "<a class='legend'><b>Estradas Nova Prata</b></a>"
    });
    lyr_EstradasNovaPrata.setSource(jsonSource_EstradasNovaPrata);
    lyr_EstradasNovaPrata.set(
    "title", 'Estradas Nova Prata'
    );
    var featureCounter_EstradasNovaPrata = 1;
    jsonSource_EstradasNovaPrata.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_EstradasNovaPrata++);
        feature.set("layerObject", lyr_EstradasNovaPrata);
    });        
    jsonSource_EstradasNovaPrata.addFeatures(features_EstradasNovaPrata);
}

var lyr_Estradademinrio = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Estradademinrio',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Estradademinrio",
    popuplayertitle: 'Estrada de minério',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Estradademinrio,
});
function load_Estradademinrio_data() {
    var format_Estradademinrio = new ol.format.GeoJSON();
    var features_Estradademinrio = format_Estradademinrio.readFeatures(json_Estradademinrio, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Estradademinrio = new ol.source.Vector({
    attributions: "<a class='legend'><b>Estrada de minério</b></a>"
    });
    lyr_Estradademinrio.setSource(jsonSource_Estradademinrio);
    lyr_Estradademinrio.set(
    "title", 'Estrada de minério'
    );
    var featureCounter_Estradademinrio = 1;
    jsonSource_Estradademinrio.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Estradademinrio++);
        feature.set("layerObject", lyr_Estradademinrio);
    });        
    jsonSource_Estradademinrio.addFeatures(features_Estradademinrio);
}

var lyr_Desvio2 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Desvio2',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Desvio2",
    popuplayertitle: 'Desvio 2',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Desvio2,
});
function load_Desvio2_data() {
    var format_Desvio2 = new ol.format.GeoJSON();
    var features_Desvio2 = format_Desvio2.readFeatures(json_Desvio2, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Desvio2 = new ol.source.Vector({
    attributions: "<a class='legend'><b>Desvio 2</b></a>"
    });
    lyr_Desvio2.setSource(jsonSource_Desvio2);
    lyr_Desvio2.set(
    "title", 'Desvio 2'
    );
    var featureCounter_Desvio2 = 1;
    jsonSource_Desvio2.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Desvio2++);
        feature.set("layerObject", lyr_Desvio2);
    });        
    jsonSource_Desvio2.addFeatures(features_Desvio2);
}

var lyr_Desvio1 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Desvio1',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Desvio1",
    popuplayertitle: 'Desvio 1',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Desvio1,
});
function load_Desvio1_data() {
    var format_Desvio1 = new ol.format.GeoJSON();
    var features_Desvio1 = format_Desvio1.readFeatures(json_Desvio1, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Desvio1 = new ol.source.Vector({
    attributions: "<a class='legend'><b>Desvio 1</b></a>"
    });
    lyr_Desvio1.setSource(jsonSource_Desvio1);
    lyr_Desvio1.set(
    "title", 'Desvio 1'
    );
    var featureCounter_Desvio1 = 1;
    jsonSource_Desvio1.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Desvio1++);
        feature.set("layerObject", lyr_Desvio1);
    });        
    jsonSource_Desvio1.addFeatures(features_Desvio1);
}

var lyr_ComunidadeQuilombolaLajeadokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> ComunidadeQuilombolaLajeadokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "ComunidadeQuilombolaLajeadokmz",
    popuplayertitle: 'Comunidade Quilombola Lajeado.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_ComunidadeQuilombolaLajeadokmz,
});
function load_ComunidadeQuilombolaLajeadokmz_data() {
    var format_ComunidadeQuilombolaLajeadokmz = new ol.format.GeoJSON();
    var features_ComunidadeQuilombolaLajeadokmz = format_ComunidadeQuilombolaLajeadokmz.readFeatures(json_ComunidadeQuilombolaLajeadokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_ComunidadeQuilombolaLajeadokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>Comunidade Quilombola Lajeado.kmz</b></a>"
    });
    lyr_ComunidadeQuilombolaLajeadokmz.setSource(jsonSource_ComunidadeQuilombolaLajeadokmz);
    lyr_ComunidadeQuilombolaLajeadokmz.set(
    "title", 'Comunidade Quilombola Lajeado.kmz'
    );
    var featureCounter_ComunidadeQuilombolaLajeadokmz = 1;
    jsonSource_ComunidadeQuilombolaLajeadokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_ComunidadeQuilombolaLajeadokmz++);
        feature.set("layerObject", lyr_ComunidadeQuilombolaLajeadokmz);
    });        
    jsonSource_ComunidadeQuilombolaLajeadokmz.addFeatures(features_ComunidadeQuilombolaLajeadokmz);
}

var lyr_ADAapsReunio27042026kmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> ADAapsReunio27042026kmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "ADAapsReunio27042026kmz",
    popuplayertitle: 'ADA após Reunião 27.04.2026.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_ADAapsReunio27042026kmz,
});
function load_ADAapsReunio27042026kmz_data() {
    var format_ADAapsReunio27042026kmz = new ol.format.GeoJSON();
    var features_ADAapsReunio27042026kmz = format_ADAapsReunio27042026kmz.readFeatures(json_ADAapsReunio27042026kmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_ADAapsReunio27042026kmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>ADA após Reunião 27.04.2026.kmz</b></a>"
    });
    lyr_ADAapsReunio27042026kmz.setSource(jsonSource_ADAapsReunio27042026kmz);
    lyr_ADAapsReunio27042026kmz.set(
    "title", 'ADA após Reunião 27.04.2026.kmz'
    );
    var featureCounter_ADAapsReunio27042026kmz = 1;
    jsonSource_ADAapsReunio27042026kmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_ADAapsReunio27042026kmz++);
        feature.set("layerObject", lyr_ADAapsReunio27042026kmz);
    });        
    jsonSource_ADAapsReunio27042026kmz.addFeatures(features_ADAapsReunio27042026kmz);
}

var lyr_09Ps2reuniokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 09Ps2reuniokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "09Ps2reuniokmz",
    popuplayertitle: '09 - Pós 2° reunião.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_09Ps2reuniokmz,
});
function load_09Ps2reuniokmz_data() {
    var format_09Ps2reuniokmz = new ol.format.GeoJSON();
    var features_09Ps2reuniokmz = format_09Ps2reuniokmz.readFeatures(json_09Ps2reuniokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_09Ps2reuniokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>09 - Pós 2° reunião.kmz</b></a>"
    });
    lyr_09Ps2reuniokmz.setSource(jsonSource_09Ps2reuniokmz);
    lyr_09Ps2reuniokmz.set(
    "title", '09 - Pós 2° reunião.kmz'
    );
    var featureCounter_09Ps2reuniokmz = 1;
    jsonSource_09Ps2reuniokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_09Ps2reuniokmz++);
        feature.set("layerObject", lyr_09Ps2reuniokmz);
    });        
    jsonSource_09Ps2reuniokmz.addFeatures(features_09Ps2reuniokmz);
}

var lyr_08Ps2reuniokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 08Ps2reuniokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "08Ps2reuniokmz",
    popuplayertitle: '08 - Pós 2° reunião.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_08Ps2reuniokmz,
});
function load_08Ps2reuniokmz_data() {
    var format_08Ps2reuniokmz = new ol.format.GeoJSON();
    var features_08Ps2reuniokmz = format_08Ps2reuniokmz.readFeatures(json_08Ps2reuniokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_08Ps2reuniokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>08 - Pós 2° reunião.kmz</b></a>"
    });
    lyr_08Ps2reuniokmz.setSource(jsonSource_08Ps2reuniokmz);
    lyr_08Ps2reuniokmz.set(
    "title", '08 - Pós 2° reunião.kmz'
    );
    var featureCounter_08Ps2reuniokmz = 1;
    jsonSource_08Ps2reuniokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_08Ps2reuniokmz++);
        feature.set("layerObject", lyr_08Ps2reuniokmz);
    });        
    jsonSource_08Ps2reuniokmz.addFeatures(features_08Ps2reuniokmz);
}

var lyr_07Ps2reuniokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 07Ps2reuniokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "07Ps2reuniokmz",
    popuplayertitle: '07 - Pós 2° reunião.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_07Ps2reuniokmz,
});
function load_07Ps2reuniokmz_data() {
    var format_07Ps2reuniokmz = new ol.format.GeoJSON();
    var features_07Ps2reuniokmz = format_07Ps2reuniokmz.readFeatures(json_07Ps2reuniokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_07Ps2reuniokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>07 - Pós 2° reunião.kmz</b></a>"
    });
    lyr_07Ps2reuniokmz.setSource(jsonSource_07Ps2reuniokmz);
    lyr_07Ps2reuniokmz.set(
    "title", '07 - Pós 2° reunião.kmz'
    );
    var featureCounter_07Ps2reuniokmz = 1;
    jsonSource_07Ps2reuniokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_07Ps2reuniokmz++);
        feature.set("layerObject", lyr_07Ps2reuniokmz);
    });        
    jsonSource_07Ps2reuniokmz.addFeatures(features_07Ps2reuniokmz);
}

var lyr_06Reuniokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 06Reuniokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "06Reuniokmz",
    popuplayertitle: '06 - Reunião.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_06Reuniokmz,
});
function load_06Reuniokmz_data() {
    var format_06Reuniokmz = new ol.format.GeoJSON();
    var features_06Reuniokmz = format_06Reuniokmz.readFeatures(json_06Reuniokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_06Reuniokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>06 - Reunião.kmz</b></a>"
    });
    lyr_06Reuniokmz.setSource(jsonSource_06Reuniokmz);
    lyr_06Reuniokmz.set(
    "title", '06 - Reunião.kmz'
    );
    var featureCounter_06Reuniokmz = 1;
    jsonSource_06Reuniokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_06Reuniokmz++);
        feature.set("layerObject", lyr_06Reuniokmz);
    });        
    jsonSource_06Reuniokmz.addFeatures(features_06Reuniokmz);
}

var lyr_05Reuniokmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 05Reuniokmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "05Reuniokmz",
    popuplayertitle: '05 - Reunião.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_05Reuniokmz,
});
function load_05Reuniokmz_data() {
    var format_05Reuniokmz = new ol.format.GeoJSON();
    var features_05Reuniokmz = format_05Reuniokmz.readFeatures(json_05Reuniokmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_05Reuniokmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>05 - Reunião.kmz</b></a>"
    });
    lyr_05Reuniokmz.setSource(jsonSource_05Reuniokmz);
    lyr_05Reuniokmz.set(
    "title", '05 - Reunião.kmz'
    );
    var featureCounter_05Reuniokmz = 1;
    jsonSource_05Reuniokmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_05Reuniokmz++);
        feature.set("layerObject", lyr_05Reuniokmz);
    });        
    jsonSource_05Reuniokmz.addFeatures(features_05Reuniokmz);
}

var lyr_04kmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 04kmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "04kmz",
    popuplayertitle: '04.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_04kmz,
});
function load_04kmz_data() {
    var format_04kmz = new ol.format.GeoJSON();
    var features_04kmz = format_04kmz.readFeatures(json_04kmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_04kmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>04.kmz</b></a>"
    });
    lyr_04kmz.setSource(jsonSource_04kmz);
    lyr_04kmz.set(
    "title", '04.kmz'
    );
    var featureCounter_04kmz = 1;
    jsonSource_04kmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_04kmz++);
        feature.set("layerObject", lyr_04kmz);
    });        
    jsonSource_04kmz.addFeatures(features_04kmz);
}

var lyr_03kmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 03kmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "03kmz",
    popuplayertitle: '03.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_03kmz,
});
function load_03kmz_data() {
    var format_03kmz = new ol.format.GeoJSON();
    var features_03kmz = format_03kmz.readFeatures(json_03kmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_03kmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>03.kmz</b></a>"
    });
    lyr_03kmz.setSource(jsonSource_03kmz);
    lyr_03kmz.set(
    "title", '03.kmz'
    );
    var featureCounter_03kmz = 1;
    jsonSource_03kmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_03kmz++);
        feature.set("layerObject", lyr_03kmz);
    });        
    jsonSource_03kmz.addFeatures(features_03kmz);
}

var lyr_02kmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 02kmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "02kmz",
    popuplayertitle: '02.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_02kmz,
});
function load_02kmz_data() {
    var format_02kmz = new ol.format.GeoJSON();
    var features_02kmz = format_02kmz.readFeatures(json_02kmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_02kmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>02.kmz</b></a>"
    });
    lyr_02kmz.setSource(jsonSource_02kmz);
    lyr_02kmz.set(
    "title", '02.kmz'
    );
    var featureCounter_02kmz = 1;
    jsonSource_02kmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_02kmz++);
        feature.set("layerObject", lyr_02kmz);
    });        
    jsonSource_02kmz.addFeatures(features_02kmz);
}

var lyr_01kmz = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> 01kmz',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "01kmz",
    popuplayertitle: '01.kmz',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_01kmz,
});
function load_01kmz_data() {
    var format_01kmz = new ol.format.GeoJSON();
    var features_01kmz = format_01kmz.readFeatures(json_01kmz, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_01kmz = new ol.source.Vector({
    attributions: "<a class='legend'><b>01.kmz</b></a>"
    });
    lyr_01kmz.setSource(jsonSource_01kmz);
    lyr_01kmz.set(
    "title", '01.kmz'
    );
    var featureCounter_01kmz = 1;
    jsonSource_01kmz.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_01kmz++);
        feature.set("layerObject", lyr_01kmz);
    });        
    jsonSource_01kmz.addFeatures(features_01kmz);
}

var lyr_Polgono = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Polgono',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Polgono",
    popuplayertitle: 'Polígono',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Polgono,
});
function load_Polgono_data() {
    var format_Polgono = new ol.format.GeoJSON();
    var features_Polgono = format_Polgono.readFeatures(json_Polgono, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Polgono = new ol.source.Vector({
    attributions: "<a class='legend'><b>Polígono</b></a>"
    });
    lyr_Polgono.setSource(jsonSource_Polgono);
    lyr_Polgono.set(
    "title", 'Polígono'
    );
    var featureCounter_Polgono = 1;
    jsonSource_Polgono.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Polgono++);
        feature.set("layerObject", lyr_Polgono);
    });        
    jsonSource_Polgono.addFeatures(features_Polgono);
}

var lyr_AreiaSequeiro = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> AreiaSequeiro',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "AreiaSequeiro",
    popuplayertitle: 'Areia Sequeiro',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_AreiaSequeiro,
});
function load_AreiaSequeiro_data() {
    var format_AreiaSequeiro = new ol.format.GeoJSON();
    var features_AreiaSequeiro = format_AreiaSequeiro.readFeatures(json_AreiaSequeiro, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_AreiaSequeiro = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AreiaSequeiro.png"/><b>Areia Sequeiro</b>'
    });
    lyr_AreiaSequeiro.setSource(jsonSource_AreiaSequeiro);
    lyr_AreiaSequeiro.set(
    "title", '<img src="styles/legend/AreiaSequeiro.png"/>Areia Sequeiro'
    );
    var featureCounter_AreiaSequeiro = 1;
    jsonSource_AreiaSequeiro.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_AreiaSequeiro++);
        feature.set("layerObject", lyr_AreiaSequeiro);
    });        
    jsonSource_AreiaSequeiro.addFeatures(features_AreiaSequeiro);
}

var lyr_V1_Fz_Matheus_Lopes_Oeste_070526 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Matheus_Lopes_Oeste_070526',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Matheus_Lopes_Oeste_070526",
    popuplayertitle: 'V1_Fz_Matheus_Lopes_Oeste_07-05-26',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Matheus_Lopes_Oeste_070526_data() {
    var format_V1_Fz_Matheus_Lopes_Oeste_070526 = new ol.format.GeoJSON();
    var features_V1_Fz_Matheus_Lopes_Oeste_070526 = format_V1_Fz_Matheus_Lopes_Oeste_070526.readFeatures(json_V1_Fz_Matheus_Lopes_Oeste_070526, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Matheus_Lopes_Oeste_070526 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Matheus_Lopes_Oeste_07-05-26</b><br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Matheus_Lopes_Oeste_070526.setSource(jsonSource_V1_Fz_Matheus_Lopes_Oeste_070526);
    lyr_V1_Fz_Matheus_Lopes_Oeste_070526.set(
    "title", '<div id="layertitle">V1_Fz_Matheus_Lopes_Oeste_07-05-26<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_Oeste_070526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Matheus_Lopes_Oeste_070526 = 1;
    jsonSource_V1_Fz_Matheus_Lopes_Oeste_070526.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Matheus_Lopes_Oeste_070526++);
        feature.set("layerObject", lyr_V1_Fz_Matheus_Lopes_Oeste_070526);
    });        
    jsonSource_V1_Fz_Matheus_Lopes_Oeste_070526.addFeatures(features_V1_Fz_Matheus_Lopes_Oeste_070526);
}
applySLDstyle(lyr_V1_Fz_Matheus_Lopes_Oeste_070526, style_V1_Fz_Matheus_Lopes_Oeste_070526, 'V1_Fz_Matheus_Lopes_Oeste_07-05-26');


var lyr_V1_Fz_Floresta_070526 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Floresta_070526',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Floresta_070526",
    popuplayertitle: 'V1_Fz_Floresta_07-05-26',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Floresta_070526_data() {
    var format_V1_Fz_Floresta_070526 = new ol.format.GeoJSON();
    var features_V1_Fz_Floresta_070526 = format_V1_Fz_Floresta_070526.readFeatures(json_V1_Fz_Floresta_070526, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Floresta_070526 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Floresta_07-05-26</b><br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Floresta_070526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Floresta_070526.setSource(jsonSource_V1_Fz_Floresta_070526);
    lyr_V1_Fz_Floresta_070526.set(
    "title", '<div id="layertitle">V1_Fz_Floresta_07-05-26<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Floresta_070526_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Floresta_070526_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Floresta_070526_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Floresta_070526_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Floresta_070526_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Floresta_070526_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Floresta_070526_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Floresta_070526_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Floresta_070526_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Floresta_070526_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Floresta_070526_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Floresta_070526 = 1;
    jsonSource_V1_Fz_Floresta_070526.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Floresta_070526++);
        feature.set("layerObject", lyr_V1_Fz_Floresta_070526);
    });        
    jsonSource_V1_Fz_Floresta_070526.addFeatures(features_V1_Fz_Floresta_070526);
}
applySLDstyle(lyr_V1_Fz_Floresta_070526, style_V1_Fz_Floresta_070526, 'V1_Fz_Floresta_07-05-26');


var lyr_V1_Fz_Matheus_Lopes_240426 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> V1_Fz_Matheus_Lopes_240426',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "V1_Fz_Matheus_Lopes_240426",
    popuplayertitle: 'V1_Fz_Matheus_Lopes_24-04-26',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_V1_Fz_Matheus_Lopes_240426_data() {
    var format_V1_Fz_Matheus_Lopes_240426 = new ol.format.GeoJSON();
    var features_V1_Fz_Matheus_Lopes_240426 = format_V1_Fz_Matheus_Lopes_240426.readFeatures(json_V1_Fz_Matheus_Lopes_240426, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_V1_Fz_Matheus_Lopes_240426 = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fz_Matheus_Lopes_24-04-26</b><br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_0.png"/>Área Antropizada após 22/07/2008<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_1.png"/>Área Consolidada<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_2.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_4.png"/>Área de Preservação Permanente a preservar<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_6.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_7.png"/>Área de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_8.png"/>Hidrografia do Imóvel<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_9.png"/>Intervenções<br />\
        <img src="styles/legend/V1_Fz_Matheus_Lopes_240426_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        });
    lyr_V1_Fz_Matheus_Lopes_240426.setSource(jsonSource_V1_Fz_Matheus_Lopes_240426);
    lyr_V1_Fz_Matheus_Lopes_240426.set(
    "title", '<div id="layertitle">V1_Fz_Matheus_Lopes_24-04-26<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Antropizada após 22/07/2008" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_0.png"/>Área Antropizada após 22/07/2008<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área Consolidada" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_1.png"/>Área Consolidada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_2.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Intervenção x CAR atual (Área Consolid" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_3.png"/>Área de Intervenção x CAR atual (Área Consolid<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a preservar" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_4.png"/>Área de Preservação Permanente a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Preservação Permanente a recuperar" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_5.png"/>Área de Preservação Permanente a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_6.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Vegetação Nativa" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_7.png"/>Área de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do Imóvel" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_8.png"/>Hidrografia do Imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Intervenções" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_9.png"/>Intervenções<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal declarada no SICAR" checked><img src="styles/legend/V1_Fz_Matheus_Lopes_240426_10.png"/>Reserva Legal declarada no SICAR<br /></a>'
        );
    var featureCounter_V1_Fz_Matheus_Lopes_240426 = 1;
    jsonSource_V1_Fz_Matheus_Lopes_240426.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_V1_Fz_Matheus_Lopes_240426++);
        feature.set("layerObject", lyr_V1_Fz_Matheus_Lopes_240426);
    });        
    jsonSource_V1_Fz_Matheus_Lopes_240426.addFeatures(features_V1_Fz_Matheus_Lopes_240426);
}
applySLDstyle(lyr_V1_Fz_Matheus_Lopes_240426, style_V1_Fz_Matheus_Lopes_240426, 'V1_Fz_Matheus_Lopes_24-04-26');


var lyr_FazendaAmaralina = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaAmaralina',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaAmaralina",
    popuplayertitle: 'Fazenda Amaralina',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaAmaralina,
});
function load_FazendaAmaralina_data() {
    var format_FazendaAmaralina = new ol.format.GeoJSON();
    var features_FazendaAmaralina = format_FazendaAmaralina.readFeatures(json_FazendaAmaralina, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaAmaralina = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaAmaralina.png"/><b>Fazenda Amaralina</b>'
    });
    lyr_FazendaAmaralina.setSource(jsonSource_FazendaAmaralina);
    lyr_FazendaAmaralina.set(
    "title", '<img src="styles/legend/FazendaAmaralina.png"/>Fazenda Amaralina'
    );
    var featureCounter_FazendaAmaralina = 1;
    jsonSource_FazendaAmaralina.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaAmaralina++);
        feature.set("layerObject", lyr_FazendaAmaralina);
    });        
    jsonSource_FazendaAmaralina.addFeatures(features_FazendaAmaralina);
}

var lyr_FazendaBrejoAlegreI = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaBrejoAlegreI',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaBrejoAlegreI",
    popuplayertitle: 'Fazenda Brejo Alegre I',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaBrejoAlegreI,
});
function load_FazendaBrejoAlegreI_data() {
    var format_FazendaBrejoAlegreI = new ol.format.GeoJSON();
    var features_FazendaBrejoAlegreI = format_FazendaBrejoAlegreI.readFeatures(json_FazendaBrejoAlegreI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaBrejoAlegreI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaBrejoAlegreI.png"/><b>Fazenda Brejo Alegre I</b>'
    });
    lyr_FazendaBrejoAlegreI.setSource(jsonSource_FazendaBrejoAlegreI);
    lyr_FazendaBrejoAlegreI.set(
    "title", '<img src="styles/legend/FazendaBrejoAlegreI.png"/>Fazenda Brejo Alegre I'
    );
    var featureCounter_FazendaBrejoAlegreI = 1;
    jsonSource_FazendaBrejoAlegreI.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaBrejoAlegreI++);
        feature.set("layerObject", lyr_FazendaBrejoAlegreI);
    });        
    jsonSource_FazendaBrejoAlegreI.addFeatures(features_FazendaBrejoAlegreI);
}

var lyr_FazendaBrejoAlegreII = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaBrejoAlegreII',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaBrejoAlegreII",
    popuplayertitle: 'Fazenda Brejo Alegre II',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaBrejoAlegreII,
});
function load_FazendaBrejoAlegreII_data() {
    var format_FazendaBrejoAlegreII = new ol.format.GeoJSON();
    var features_FazendaBrejoAlegreII = format_FazendaBrejoAlegreII.readFeatures(json_FazendaBrejoAlegreII, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaBrejoAlegreII = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaBrejoAlegreII.png"/><b>Fazenda Brejo Alegre II</b>'
    });
    lyr_FazendaBrejoAlegreII.setSource(jsonSource_FazendaBrejoAlegreII);
    lyr_FazendaBrejoAlegreII.set(
    "title", '<img src="styles/legend/FazendaBrejoAlegreII.png"/>Fazenda Brejo Alegre II'
    );
    var featureCounter_FazendaBrejoAlegreII = 1;
    jsonSource_FazendaBrejoAlegreII.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaBrejoAlegreII++);
        feature.set("layerObject", lyr_FazendaBrejoAlegreII);
    });        
    jsonSource_FazendaBrejoAlegreII.addFeatures(features_FazendaBrejoAlegreII);
}

var lyr_FazendaBrejoAlegreIII = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaBrejoAlegreIII',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaBrejoAlegreIII",
    popuplayertitle: 'Fazenda Brejo Alegre III',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaBrejoAlegreIII,
});
function load_FazendaBrejoAlegreIII_data() {
    var format_FazendaBrejoAlegreIII = new ol.format.GeoJSON();
    var features_FazendaBrejoAlegreIII = format_FazendaBrejoAlegreIII.readFeatures(json_FazendaBrejoAlegreIII, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaBrejoAlegreIII = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaBrejoAlegreIII.png"/><b>Fazenda Brejo Alegre III</b>'
    });
    lyr_FazendaBrejoAlegreIII.setSource(jsonSource_FazendaBrejoAlegreIII);
    lyr_FazendaBrejoAlegreIII.set(
    "title", '<img src="styles/legend/FazendaBrejoAlegreIII.png"/>Fazenda Brejo Alegre III'
    );
    var featureCounter_FazendaBrejoAlegreIII = 1;
    jsonSource_FazendaBrejoAlegreIII.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaBrejoAlegreIII++);
        feature.set("layerObject", lyr_FazendaBrejoAlegreIII);
    });        
    jsonSource_FazendaBrejoAlegreIII.addFeatures(features_FazendaBrejoAlegreIII);
}

var lyr_FazendaFloresta = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaFloresta',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaFloresta",
    popuplayertitle: 'Fazenda Floresta',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaFloresta,
});
function load_FazendaFloresta_data() {
    var format_FazendaFloresta = new ol.format.GeoJSON();
    var features_FazendaFloresta = format_FazendaFloresta.readFeatures(json_FazendaFloresta, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaFloresta = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaFloresta.png"/><b>Fazenda Floresta</b>'
    });
    lyr_FazendaFloresta.setSource(jsonSource_FazendaFloresta);
    lyr_FazendaFloresta.set(
    "title", '<img src="styles/legend/FazendaFloresta.png"/>Fazenda Floresta'
    );
    var featureCounter_FazendaFloresta = 1;
    jsonSource_FazendaFloresta.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaFloresta++);
        feature.set("layerObject", lyr_FazendaFloresta);
    });        
    jsonSource_FazendaFloresta.addFeatures(features_FazendaFloresta);
}

var lyr_FazendaLavandeiraII = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaLavandeiraII',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaLavandeiraII",
    popuplayertitle: 'Fazenda Lavandeira II',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaLavandeiraII,
});
function load_FazendaLavandeiraII_data() {
    var format_FazendaLavandeiraII = new ol.format.GeoJSON();
    var features_FazendaLavandeiraII = format_FazendaLavandeiraII.readFeatures(json_FazendaLavandeiraII, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaLavandeiraII = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaLavandeiraII.png"/><b>Fazenda Lavandeira II</b>'
    });
    lyr_FazendaLavandeiraII.setSource(jsonSource_FazendaLavandeiraII);
    lyr_FazendaLavandeiraII.set(
    "title", '<img src="styles/legend/FazendaLavandeiraII.png"/>Fazenda Lavandeira II'
    );
    var featureCounter_FazendaLavandeiraII = 1;
    jsonSource_FazendaLavandeiraII.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaLavandeiraII++);
        feature.set("layerObject", lyr_FazendaLavandeiraII);
    });        
    jsonSource_FazendaLavandeiraII.addFeatures(features_FazendaLavandeiraII);
}

var lyr_FazendaLavandeira = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaLavandeira',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaLavandeira",
    popuplayertitle: 'Fazenda Lavandeira',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaLavandeira,
});
function load_FazendaLavandeira_data() {
    var format_FazendaLavandeira = new ol.format.GeoJSON();
    var features_FazendaLavandeira = format_FazendaLavandeira.readFeatures(json_FazendaLavandeira, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaLavandeira = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaLavandeira.png"/><b>Fazenda Lavandeira</b>'
    });
    lyr_FazendaLavandeira.setSource(jsonSource_FazendaLavandeira);
    lyr_FazendaLavandeira.set(
    "title", '<img src="styles/legend/FazendaLavandeira.png"/>Fazenda Lavandeira'
    );
    var featureCounter_FazendaLavandeira = 1;
    jsonSource_FazendaLavandeira.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaLavandeira++);
        feature.set("layerObject", lyr_FazendaLavandeira);
    });        
    jsonSource_FazendaLavandeira.addFeatures(features_FazendaLavandeira);
}

var lyr_FazendaLote15 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaLote15',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaLote15",
    popuplayertitle: 'Fazenda Lote 15 ',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaLote15,
});
function load_FazendaLote15_data() {
    var format_FazendaLote15 = new ol.format.GeoJSON();
    var features_FazendaLote15 = format_FazendaLote15.readFeatures(json_FazendaLote15, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaLote15 = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaLote15.png"/><b>Fazenda Lote 15 </b>'
    });
    lyr_FazendaLote15.setSource(jsonSource_FazendaLote15);
    lyr_FazendaLote15.set(
    "title", '<img src="styles/legend/FazendaLote15.png"/>Fazenda Lote 15 '
    );
    var featureCounter_FazendaLote15 = 1;
    jsonSource_FazendaLote15.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaLote15++);
        feature.set("layerObject", lyr_FazendaLote15);
    });        
    jsonSource_FazendaLote15.addFeatures(features_FazendaLote15);
}

var lyr_FazendaMatheusLopesGeral = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaMatheusLopesGeral',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaMatheusLopesGeral",
    popuplayertitle: 'Fazenda Matheus Lopes Geral ',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaMatheusLopesGeral,
});
function load_FazendaMatheusLopesGeral_data() {
    var format_FazendaMatheusLopesGeral = new ol.format.GeoJSON();
    var features_FazendaMatheusLopesGeral = format_FazendaMatheusLopesGeral.readFeatures(json_FazendaMatheusLopesGeral, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaMatheusLopesGeral = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaMatheusLopesGeral.png"/><b>Fazenda Matheus Lopes Geral </b>'
    });
    lyr_FazendaMatheusLopesGeral.setSource(jsonSource_FazendaMatheusLopesGeral);
    lyr_FazendaMatheusLopesGeral.set(
    "title", '<img src="styles/legend/FazendaMatheusLopesGeral.png"/>Fazenda Matheus Lopes Geral '
    );
    var featureCounter_FazendaMatheusLopesGeral = 1;
    jsonSource_FazendaMatheusLopesGeral.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaMatheusLopesGeral++);
        feature.set("layerObject", lyr_FazendaMatheusLopesGeral);
    });        
    jsonSource_FazendaMatheusLopesGeral.addFeatures(features_FazendaMatheusLopesGeral);
}

var lyr_FazendaMatheusLopesOeste = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaMatheusLopesOeste',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaMatheusLopesOeste",
    popuplayertitle: 'Fazenda Matheus Lopes Oeste ',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaMatheusLopesOeste,
});
function load_FazendaMatheusLopesOeste_data() {
    var format_FazendaMatheusLopesOeste = new ol.format.GeoJSON();
    var features_FazendaMatheusLopesOeste = format_FazendaMatheusLopesOeste.readFeatures(json_FazendaMatheusLopesOeste, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaMatheusLopesOeste = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaMatheusLopesOeste.png"/><b>Fazenda Matheus Lopes Oeste </b>'
    });
    lyr_FazendaMatheusLopesOeste.setSource(jsonSource_FazendaMatheusLopesOeste);
    lyr_FazendaMatheusLopesOeste.set(
    "title", '<img src="styles/legend/FazendaMatheusLopesOeste.png"/>Fazenda Matheus Lopes Oeste '
    );
    var featureCounter_FazendaMatheusLopesOeste = 1;
    jsonSource_FazendaMatheusLopesOeste.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaMatheusLopesOeste++);
        feature.set("layerObject", lyr_FazendaMatheusLopesOeste);
    });        
    jsonSource_FazendaMatheusLopesOeste.addFeatures(features_FazendaMatheusLopesOeste);
}

var lyr_FazendaNovaPrata = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaNovaPrata',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaNovaPrata",
    popuplayertitle: 'Fazenda Nova Prata',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaNovaPrata,
});
function load_FazendaNovaPrata_data() {
    var format_FazendaNovaPrata = new ol.format.GeoJSON();
    var features_FazendaNovaPrata = format_FazendaNovaPrata.readFeatures(json_FazendaNovaPrata, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaNovaPrata = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaNovaPrata.png"/><b>Fazenda Nova Prata</b>'
    });
    lyr_FazendaNovaPrata.setSource(jsonSource_FazendaNovaPrata);
    lyr_FazendaNovaPrata.set(
    "title", '<img src="styles/legend/FazendaNovaPrata.png"/>Fazenda Nova Prata'
    );
    var featureCounter_FazendaNovaPrata = 1;
    jsonSource_FazendaNovaPrata.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaNovaPrata++);
        feature.set("layerObject", lyr_FazendaNovaPrata);
    });        
    jsonSource_FazendaNovaPrata.addFeatures(features_FazendaNovaPrata);
}

var lyr_FazendaSantaHelena = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaSantaHelena',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaSantaHelena",
    popuplayertitle: 'Fazenda Santa Helena',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaSantaHelena,
});
function load_FazendaSantaHelena_data() {
    var format_FazendaSantaHelena = new ol.format.GeoJSON();
    var features_FazendaSantaHelena = format_FazendaSantaHelena.readFeatures(json_FazendaSantaHelena, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaSantaHelena = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaSantaHelena.png"/><b>Fazenda Santa Helena</b>'
    });
    lyr_FazendaSantaHelena.setSource(jsonSource_FazendaSantaHelena);
    lyr_FazendaSantaHelena.set(
    "title", '<img src="styles/legend/FazendaSantaHelena.png"/>Fazenda Santa Helena'
    );
    var featureCounter_FazendaSantaHelena = 1;
    jsonSource_FazendaSantaHelena.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaSantaHelena++);
        feature.set("layerObject", lyr_FazendaSantaHelena);
    });        
    jsonSource_FazendaSantaHelena.addFeatures(features_FazendaSantaHelena);
}

var lyr_FazendaSantaLuziaRioGrande = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaSantaLuziaRioGrande',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaSantaLuziaRioGrande",
    popuplayertitle: 'Fazenda Santa Luzia-Rio Grande',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaSantaLuziaRioGrande,
});
function load_FazendaSantaLuziaRioGrande_data() {
    var format_FazendaSantaLuziaRioGrande = new ol.format.GeoJSON();
    var features_FazendaSantaLuziaRioGrande = format_FazendaSantaLuziaRioGrande.readFeatures(json_FazendaSantaLuziaRioGrande, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaSantaLuziaRioGrande = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaSantaLuziaRioGrande.png"/><b>Fazenda Santa Luzia-Rio Grande</b>'
    });
    lyr_FazendaSantaLuziaRioGrande.setSource(jsonSource_FazendaSantaLuziaRioGrande);
    lyr_FazendaSantaLuziaRioGrande.set(
    "title", '<img src="styles/legend/FazendaSantaLuziaRioGrande.png"/>Fazenda Santa Luzia-Rio Grande'
    );
    var featureCounter_FazendaSantaLuziaRioGrande = 1;
    jsonSource_FazendaSantaLuziaRioGrande.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaSantaLuziaRioGrande++);
        feature.set("layerObject", lyr_FazendaSantaLuziaRioGrande);
    });        
    jsonSource_FazendaSantaLuziaRioGrande.addFeatures(features_FazendaSantaLuziaRioGrande);
}

var lyr_FazendaSoJos = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> FazendaSoJos',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "FazendaSoJos",
    popuplayertitle: 'Fazenda São José',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_FazendaSoJos,
});
function load_FazendaSoJos_data() {
    var format_FazendaSoJos = new ol.format.GeoJSON();
    var features_FazendaSoJos = format_FazendaSoJos.readFeatures(json_FazendaSoJos, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_FazendaSoJos = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FazendaSoJos.png"/><b>Fazenda São José</b>'
    });
    lyr_FazendaSoJos.setSource(jsonSource_FazendaSoJos);
    lyr_FazendaSoJos.set(
    "title", '<img src="styles/legend/FazendaSoJos.png"/>Fazenda São José'
    );
    var featureCounter_FazendaSoJos = 1;
    jsonSource_FazendaSoJos.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_FazendaSoJos++);
        feature.set("layerObject", lyr_FazendaSoJos);
    });        
    jsonSource_FazendaSoJos.addFeatures(features_FazendaSoJos);
}

var lyr_Limites_Municipais = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Limites_Municipais',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Limites_Municipais",
    popuplayertitle: 'Limites_Municipais',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Limites_Municipais,
});
function load_Limites_Municipais_data() {
    var format_Limites_Municipais = new ol.format.GeoJSON();
    var features_Limites_Municipais = format_Limites_Municipais.readFeatures(json_Limites_Municipais, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Limites_Municipais = new ol.source.Vector({
    attributions: '<a class="legend"><b>Limites_Municipais</b><br />\
        <img src="styles/legend/Limites_Municipais_0.png"/>Abreulândia<br />\
        <img src="styles/legend/Limites_Municipais_1.png"/>Aguiarnópolis<br />\
        <img src="styles/legend/Limites_Municipais_2.png"/>Aliança do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_3.png"/>Almas<br />\
        <img src="styles/legend/Limites_Municipais_4.png"/>Alvorada<br />\
        <img src="styles/legend/Limites_Municipais_5.png"/>Ananás<br />\
        <img src="styles/legend/Limites_Municipais_6.png"/>Angico<br />\
        <img src="styles/legend/Limites_Municipais_7.png"/>Aparecida do Rio Negro<br />\
        <img src="styles/legend/Limites_Municipais_8.png"/>Aragominas<br />\
        <img src="styles/legend/Limites_Municipais_9.png"/>Araguacema<br />\
        <img src="styles/legend/Limites_Municipais_10.png"/>Araguaçu<br />\
        <img src="styles/legend/Limites_Municipais_11.png"/>Araguaína<br />\
        <img src="styles/legend/Limites_Municipais_12.png"/>Araguanã<br />\
        <img src="styles/legend/Limites_Municipais_13.png"/>Araguatins<br />\
        <img src="styles/legend/Limites_Municipais_14.png"/>Arapoema<br />\
        <img src="styles/legend/Limites_Municipais_15.png"/>Arraias<br />\
        <img src="styles/legend/Limites_Municipais_16.png"/>Augustinópolis<br />\
        <img src="styles/legend/Limites_Municipais_17.png"/>Aurora do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_18.png"/>Axixá do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_19.png"/>Babaçulândia<br />\
        <img src="styles/legend/Limites_Municipais_20.png"/>Bandeirantes do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_21.png"/>Barra do Ouro<br />\
        <img src="styles/legend/Limites_Municipais_22.png"/>Barrolândia<br />\
        <img src="styles/legend/Limites_Municipais_23.png"/>Bernardo Sayão<br />\
        <img src="styles/legend/Limites_Municipais_24.png"/>Bom Jesus do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_25.png"/>Brasilândia do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_26.png"/>Brejinho de Nazaré<br />\
        <img src="styles/legend/Limites_Municipais_27.png"/>Buriti do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_28.png"/>Cachoeirinha<br />\
        <img src="styles/legend/Limites_Municipais_29.png"/>Campos Lindos<br />\
        <img src="styles/legend/Limites_Municipais_30.png"/>Cariri do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_31.png"/>Carmolândia<br />\
        <img src="styles/legend/Limites_Municipais_32.png"/>Carrasco Bonito<br />\
        <img src="styles/legend/Limites_Municipais_33.png"/>Caseara<br />\
        <img src="styles/legend/Limites_Municipais_34.png"/>Centenário<br />\
        <img src="styles/legend/Limites_Municipais_35.png"/>Chapada da Natividade<br />\
        <img src="styles/legend/Limites_Municipais_36.png"/>Chapada de Areia<br />\
        <img src="styles/legend/Limites_Municipais_37.png"/>Colinas do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_38.png"/>Colméia<br />\
        <img src="styles/legend/Limites_Municipais_39.png"/>Combinado<br />\
        <img src="styles/legend/Limites_Municipais_40.png"/>Conceição do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_41.png"/>Couto de Magalhães<br />\
        <img src="styles/legend/Limites_Municipais_42.png"/>Cristalândia<br />\
        <img src="styles/legend/Limites_Municipais_43.png"/>Crixás do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_44.png"/>Darcinópolis<br />\
        <img src="styles/legend/Limites_Municipais_45.png"/>Dianópolis<br />\
        <img src="styles/legend/Limites_Municipais_46.png"/>Divinópolis do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_47.png"/>Dois Irmãos do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_48.png"/>Dueré<br />\
        <img src="styles/legend/Limites_Municipais_49.png"/>Esperantina<br />\
        <img src="styles/legend/Limites_Municipais_50.png"/>Fátima<br />\
        <img src="styles/legend/Limites_Municipais_51.png"/>Figueirópolis<br />\
        <img src="styles/legend/Limites_Municipais_52.png"/>Filadélfia<br />\
        <img src="styles/legend/Limites_Municipais_53.png"/>Formoso do Araguaia<br />\
        <img src="styles/legend/Limites_Municipais_54.png"/>Fortaleza do Tabocão<br />\
        <img src="styles/legend/Limites_Municipais_55.png"/>Goianorte<br />\
        <img src="styles/legend/Limites_Municipais_56.png"/>Goiatins<br />\
        <img src="styles/legend/Limites_Municipais_57.png"/>Guaraí<br />\
        <img src="styles/legend/Limites_Municipais_58.png"/>Gurupi<br />\
        <img src="styles/legend/Limites_Municipais_59.png"/>Ipueiras<br />\
        <img src="styles/legend/Limites_Municipais_60.png"/>Itacajá<br />\
        <img src="styles/legend/Limites_Municipais_61.png"/>Itaguatins<br />\
        <img src="styles/legend/Limites_Municipais_62.png"/>Itapiratins<br />\
        <img src="styles/legend/Limites_Municipais_63.png"/>Itaporã do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_64.png"/>Jaú do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_65.png"/>Juarina<br />\
        <img src="styles/legend/Limites_Municipais_66.png"/>Lagoa da Confusão<br />\
        <img src="styles/legend/Limites_Municipais_67.png"/>Lagoa do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_68.png"/>Lajeado<br />\
        <img src="styles/legend/Limites_Municipais_69.png"/>Lavandeira<br />\
        <img src="styles/legend/Limites_Municipais_70.png"/>Lizarda<br />\
        <img src="styles/legend/Limites_Municipais_71.png"/>Luzinópolis<br />\
        <img src="styles/legend/Limites_Municipais_72.png"/>Marianópolis do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_73.png"/>Mateiros<br />\
        <img src="styles/legend/Limites_Municipais_74.png"/>Maurilândia do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_75.png"/>Miracema do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_76.png"/>Miranorte<br />\
        <img src="styles/legend/Limites_Municipais_77.png"/>Monte do Carmo<br />\
        <img src="styles/legend/Limites_Municipais_78.png"/>Monte Santo do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_79.png"/>Muricilândia<br />\
        <img src="styles/legend/Limites_Municipais_80.png"/>Natividade<br />\
        <img src="styles/legend/Limites_Municipais_81.png"/>Nazaré<br />\
        <img src="styles/legend/Limites_Municipais_82.png"/>Nova Olinda<br />\
        <img src="styles/legend/Limites_Municipais_83.png"/>Nova Rosalândia<br />\
        <img src="styles/legend/Limites_Municipais_84.png"/>Novo Acordo<br />\
        <img src="styles/legend/Limites_Municipais_85.png"/>Novo Alegre<br />\
        <img src="styles/legend/Limites_Municipais_86.png"/>Novo Jardim<br />\
        <img src="styles/legend/Limites_Municipais_87.png"/>Oliveira de Fátima<br />\
        <img src="styles/legend/Limites_Municipais_88.png"/>Palmas<br />\
        <img src="styles/legend/Limites_Municipais_89.png"/>Palmeirante<br />\
        <img src="styles/legend/Limites_Municipais_90.png"/>Palmeiras do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_91.png"/>Palmeirópolis<br />\
        <img src="styles/legend/Limites_Municipais_92.png"/>Paraíso do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_93.png"/>Paranã<br />\
        <img src="styles/legend/Limites_Municipais_94.png"/>Pau d\'Arco<br />\
        <img src="styles/legend/Limites_Municipais_95.png"/>Pedro Afonso<br />\
        <img src="styles/legend/Limites_Municipais_96.png"/>Peixe<br />\
        <img src="styles/legend/Limites_Municipais_97.png"/>Pequizeiro<br />\
        <img src="styles/legend/Limites_Municipais_98.png"/>Pindorama do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_99.png"/>Piraquê<br />\
        <img src="styles/legend/Limites_Municipais_100.png"/>Pium<br />\
        <img src="styles/legend/Limites_Municipais_101.png"/>Ponte Alta do Bom Jesus<br />\
        <img src="styles/legend/Limites_Municipais_102.png"/>Ponte Alta do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_103.png"/>Porto Alegre do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_104.png"/>Porto Nacional<br />\
        <img src="styles/legend/Limites_Municipais_105.png"/>Praia Norte<br />\
        <img src="styles/legend/Limites_Municipais_106.png"/>Presidente Kennedy<br />\
        <img src="styles/legend/Limites_Municipais_107.png"/>Pugmil<br />\
        <img src="styles/legend/Limites_Municipais_108.png"/>Recursolândia<br />\
        <img src="styles/legend/Limites_Municipais_109.png"/>Riachinho<br />\
        <img src="styles/legend/Limites_Municipais_110.png"/>Rio da Conceição<br />\
        <img src="styles/legend/Limites_Municipais_111.png"/>Rio dos Bois<br />\
        <img src="styles/legend/Limites_Municipais_112.png"/>Rio Sono<br />\
        <img src="styles/legend/Limites_Municipais_113.png"/>Sampaio<br />\
        <img src="styles/legend/Limites_Municipais_114.png"/>Sandolândia<br />\
        <img src="styles/legend/Limites_Municipais_115.png"/>Santa Fé do Araguaia<br />\
        <img src="styles/legend/Limites_Municipais_116.png"/>Santa Maria do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_117.png"/>Santa Rita do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_118.png"/>Santa Rosa do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_119.png"/>Santa Tereza do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_120.png"/>Santa Terezinha do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_121.png"/>São Bento do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_122.png"/>São Félix do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_123.png"/>São Miguel do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_124.png"/>São Salvador do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_125.png"/>São Sebastião do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_126.png"/>São Valério da Natividade<br />\
        <img src="styles/legend/Limites_Municipais_127.png"/>Silvanópolis<br />\
        <img src="styles/legend/Limites_Municipais_128.png"/>Sítio Novo do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_129.png"/>Sucupira<br />\
        <img src="styles/legend/Limites_Municipais_130.png"/>Taguatinga<br />\
        <img src="styles/legend/Limites_Municipais_131.png"/>Taipas do Tocantins<br />\
        <img src="styles/legend/Limites_Municipais_132.png"/>Talismã<br />\
        <img src="styles/legend/Limites_Municipais_133.png"/>Tocantínia<br />\
        <img src="styles/legend/Limites_Municipais_134.png"/>Tocantinópolis<br />\
        <img src="styles/legend/Limites_Municipais_135.png"/>Tupirama<br />\
        <img src="styles/legend/Limites_Municipais_136.png"/>Tupiratins<br />\
        <img src="styles/legend/Limites_Municipais_137.png"/>Wanderlândia<br />\
        <img src="styles/legend/Limites_Municipais_138.png"/>Xambioá<br />\
        <img src="styles/legend/Limites_Municipais_139.png"/><br /></a>'
        });
    lyr_Limites_Municipais.setSource(jsonSource_Limites_Municipais);
    lyr_Limites_Municipais.set(
    "title", '<div id="layertitle">Limites_Municipais<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Abreulândia" checked><img src="styles/legend/Limites_Municipais_0.png"/>Abreulândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aguiarnópolis" checked><img src="styles/legend/Limites_Municipais_1.png"/>Aguiarnópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aliança do Tocantins" checked><img src="styles/legend/Limites_Municipais_2.png"/>Aliança do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Almas" checked><img src="styles/legend/Limites_Municipais_3.png"/>Almas<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Alvorada" checked><img src="styles/legend/Limites_Municipais_4.png"/>Alvorada<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Ananás" checked><img src="styles/legend/Limites_Municipais_5.png"/>Ananás<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Angico" checked><img src="styles/legend/Limites_Municipais_6.png"/>Angico<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aparecida do Rio Negro" checked><img src="styles/legend/Limites_Municipais_7.png"/>Aparecida do Rio Negro<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aragominas" checked><img src="styles/legend/Limites_Municipais_8.png"/>Aragominas<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Araguacema" checked><img src="styles/legend/Limites_Municipais_9.png"/>Araguacema<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Araguaçu" checked><img src="styles/legend/Limites_Municipais_10.png"/>Araguaçu<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Araguaína" checked><img src="styles/legend/Limites_Municipais_11.png"/>Araguaína<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Araguanã" checked><img src="styles/legend/Limites_Municipais_12.png"/>Araguanã<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Araguatins" checked><img src="styles/legend/Limites_Municipais_13.png"/>Araguatins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Arapoema" checked><img src="styles/legend/Limites_Municipais_14.png"/>Arapoema<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Arraias" checked><img src="styles/legend/Limites_Municipais_15.png"/>Arraias<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Augustinópolis" checked><img src="styles/legend/Limites_Municipais_16.png"/>Augustinópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aurora do Tocantins" checked><img src="styles/legend/Limites_Municipais_17.png"/>Aurora do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Axixá do Tocantins" checked><img src="styles/legend/Limites_Municipais_18.png"/>Axixá do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Babaçulândia" checked><img src="styles/legend/Limites_Municipais_19.png"/>Babaçulândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bandeirantes do Tocantins" checked><img src="styles/legend/Limites_Municipais_20.png"/>Bandeirantes do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Barra do Ouro" checked><img src="styles/legend/Limites_Municipais_21.png"/>Barra do Ouro<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Barrolândia" checked><img src="styles/legend/Limites_Municipais_22.png"/>Barrolândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bernardo Sayão" checked><img src="styles/legend/Limites_Municipais_23.png"/>Bernardo Sayão<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bom Jesus do Tocantins" checked><img src="styles/legend/Limites_Municipais_24.png"/>Bom Jesus do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Brasilândia do Tocantins" checked><img src="styles/legend/Limites_Municipais_25.png"/>Brasilândia do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Brejinho de Nazaré" checked><img src="styles/legend/Limites_Municipais_26.png"/>Brejinho de Nazaré<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Buriti do Tocantins" checked><img src="styles/legend/Limites_Municipais_27.png"/>Buriti do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Cachoeirinha" checked><img src="styles/legend/Limites_Municipais_28.png"/>Cachoeirinha<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Campos Lindos" checked><img src="styles/legend/Limites_Municipais_29.png"/>Campos Lindos<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Cariri do Tocantins" checked><img src="styles/legend/Limites_Municipais_30.png"/>Cariri do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Carmolândia" checked><img src="styles/legend/Limites_Municipais_31.png"/>Carmolândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Carrasco Bonito" checked><img src="styles/legend/Limites_Municipais_32.png"/>Carrasco Bonito<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Caseara" checked><img src="styles/legend/Limites_Municipais_33.png"/>Caseara<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Centenário" checked><img src="styles/legend/Limites_Municipais_34.png"/>Centenário<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Chapada da Natividade" checked><img src="styles/legend/Limites_Municipais_35.png"/>Chapada da Natividade<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Chapada de Areia" checked><img src="styles/legend/Limites_Municipais_36.png"/>Chapada de Areia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Colinas do Tocantins" checked><img src="styles/legend/Limites_Municipais_37.png"/>Colinas do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Colméia" checked><img src="styles/legend/Limites_Municipais_38.png"/>Colméia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Combinado" checked><img src="styles/legend/Limites_Municipais_39.png"/>Combinado<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Conceição do Tocantins" checked><img src="styles/legend/Limites_Municipais_40.png"/>Conceição do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Couto de Magalhães" checked><img src="styles/legend/Limites_Municipais_41.png"/>Couto de Magalhães<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Cristalândia" checked><img src="styles/legend/Limites_Municipais_42.png"/>Cristalândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Crixás do Tocantins" checked><img src="styles/legend/Limites_Municipais_43.png"/>Crixás do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Darcinópolis" checked><img src="styles/legend/Limites_Municipais_44.png"/>Darcinópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Dianópolis" checked><img src="styles/legend/Limites_Municipais_45.png"/>Dianópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Divinópolis do Tocantins" checked><img src="styles/legend/Limites_Municipais_46.png"/>Divinópolis do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Dois Irmãos do Tocantins" checked><img src="styles/legend/Limites_Municipais_47.png"/>Dois Irmãos do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Dueré" checked><img src="styles/legend/Limites_Municipais_48.png"/>Dueré<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Esperantina" checked><img src="styles/legend/Limites_Municipais_49.png"/>Esperantina<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fátima" checked><img src="styles/legend/Limites_Municipais_50.png"/>Fátima<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Figueirópolis" checked><img src="styles/legend/Limites_Municipais_51.png"/>Figueirópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Filadélfia" checked><img src="styles/legend/Limites_Municipais_52.png"/>Filadélfia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Formoso do Araguaia" checked><img src="styles/legend/Limites_Municipais_53.png"/>Formoso do Araguaia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fortaleza do Tabocão" checked><img src="styles/legend/Limites_Municipais_54.png"/>Fortaleza do Tabocão<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Goianorte" checked><img src="styles/legend/Limites_Municipais_55.png"/>Goianorte<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Goiatins" checked><img src="styles/legend/Limites_Municipais_56.png"/>Goiatins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Guaraí" checked><img src="styles/legend/Limites_Municipais_57.png"/>Guaraí<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Gurupi" checked><img src="styles/legend/Limites_Municipais_58.png"/>Gurupi<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Ipueiras" checked><img src="styles/legend/Limites_Municipais_59.png"/>Ipueiras<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Itacajá" checked><img src="styles/legend/Limites_Municipais_60.png"/>Itacajá<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Itaguatins" checked><img src="styles/legend/Limites_Municipais_61.png"/>Itaguatins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Itapiratins" checked><img src="styles/legend/Limites_Municipais_62.png"/>Itapiratins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Itaporã do Tocantins" checked><img src="styles/legend/Limites_Municipais_63.png"/>Itaporã do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Jaú do Tocantins" checked><img src="styles/legend/Limites_Municipais_64.png"/>Jaú do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Juarina" checked><img src="styles/legend/Limites_Municipais_65.png"/>Juarina<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Lagoa da Confusão" checked><img src="styles/legend/Limites_Municipais_66.png"/>Lagoa da Confusão<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Lagoa do Tocantins" checked><img src="styles/legend/Limites_Municipais_67.png"/>Lagoa do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Lajeado" checked><img src="styles/legend/Limites_Municipais_68.png"/>Lajeado<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Lavandeira" checked><img src="styles/legend/Limites_Municipais_69.png"/>Lavandeira<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Lizarda" checked><img src="styles/legend/Limites_Municipais_70.png"/>Lizarda<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Luzinópolis" checked><img src="styles/legend/Limites_Municipais_71.png"/>Luzinópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Marianópolis do Tocantins" checked><img src="styles/legend/Limites_Municipais_72.png"/>Marianópolis do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Mateiros" checked><img src="styles/legend/Limites_Municipais_73.png"/>Mateiros<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Maurilândia do Tocantins" checked><img src="styles/legend/Limites_Municipais_74.png"/>Maurilândia do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Miracema do Tocantins" checked><img src="styles/legend/Limites_Municipais_75.png"/>Miracema do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Miranorte" checked><img src="styles/legend/Limites_Municipais_76.png"/>Miranorte<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Monte do Carmo" checked><img src="styles/legend/Limites_Municipais_77.png"/>Monte do Carmo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Monte Santo do Tocantins" checked><img src="styles/legend/Limites_Municipais_78.png"/>Monte Santo do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Muricilândia" checked><img src="styles/legend/Limites_Municipais_79.png"/>Muricilândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Natividade" checked><img src="styles/legend/Limites_Municipais_80.png"/>Natividade<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Nazaré" checked><img src="styles/legend/Limites_Municipais_81.png"/>Nazaré<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Nova Olinda" checked><img src="styles/legend/Limites_Municipais_82.png"/>Nova Olinda<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Nova Rosalândia" checked><img src="styles/legend/Limites_Municipais_83.png"/>Nova Rosalândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Novo Acordo" checked><img src="styles/legend/Limites_Municipais_84.png"/>Novo Acordo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Novo Alegre" checked><img src="styles/legend/Limites_Municipais_85.png"/>Novo Alegre<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Novo Jardim" checked><img src="styles/legend/Limites_Municipais_86.png"/>Novo Jardim<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Oliveira de Fátima" checked><img src="styles/legend/Limites_Municipais_87.png"/>Oliveira de Fátima<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Palmas" checked><img src="styles/legend/Limites_Municipais_88.png"/>Palmas<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Palmeirante" checked><img src="styles/legend/Limites_Municipais_89.png"/>Palmeirante<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Palmeiras do Tocantins" checked><img src="styles/legend/Limites_Municipais_90.png"/>Palmeiras do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Palmeirópolis" checked><img src="styles/legend/Limites_Municipais_91.png"/>Palmeirópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Paraíso do Tocantins" checked><img src="styles/legend/Limites_Municipais_92.png"/>Paraíso do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Paranã" checked><img src="styles/legend/Limites_Municipais_93.png"/>Paranã<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pau d\'Arco" checked><img src="styles/legend/Limites_Municipais_94.png"/>Pau d\'Arco<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pedro Afonso" checked><img src="styles/legend/Limites_Municipais_95.png"/>Pedro Afonso<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Peixe" checked><img src="styles/legend/Limites_Municipais_96.png"/>Peixe<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pequizeiro" checked><img src="styles/legend/Limites_Municipais_97.png"/>Pequizeiro<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pindorama do Tocantins" checked><img src="styles/legend/Limites_Municipais_98.png"/>Pindorama do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Piraquê" checked><img src="styles/legend/Limites_Municipais_99.png"/>Piraquê<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pium" checked><img src="styles/legend/Limites_Municipais_100.png"/>Pium<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Ponte Alta do Bom Jesus" checked><img src="styles/legend/Limites_Municipais_101.png"/>Ponte Alta do Bom Jesus<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Ponte Alta do Tocantins" checked><img src="styles/legend/Limites_Municipais_102.png"/>Ponte Alta do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Porto Alegre do Tocantins" checked><img src="styles/legend/Limites_Municipais_103.png"/>Porto Alegre do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Porto Nacional" checked><img src="styles/legend/Limites_Municipais_104.png"/>Porto Nacional<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Praia Norte" checked><img src="styles/legend/Limites_Municipais_105.png"/>Praia Norte<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Presidente Kennedy" checked><img src="styles/legend/Limites_Municipais_106.png"/>Presidente Kennedy<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Pugmil" checked><img src="styles/legend/Limites_Municipais_107.png"/>Pugmil<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Recursolândia" checked><img src="styles/legend/Limites_Municipais_108.png"/>Recursolândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Riachinho" checked><img src="styles/legend/Limites_Municipais_109.png"/>Riachinho<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Rio da Conceição" checked><img src="styles/legend/Limites_Municipais_110.png"/>Rio da Conceição<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Rio dos Bois" checked><img src="styles/legend/Limites_Municipais_111.png"/>Rio dos Bois<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Rio Sono" checked><img src="styles/legend/Limites_Municipais_112.png"/>Rio Sono<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sampaio" checked><img src="styles/legend/Limites_Municipais_113.png"/>Sampaio<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sandolândia" checked><img src="styles/legend/Limites_Municipais_114.png"/>Sandolândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Fé do Araguaia" checked><img src="styles/legend/Limites_Municipais_115.png"/>Santa Fé do Araguaia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Maria do Tocantins" checked><img src="styles/legend/Limites_Municipais_116.png"/>Santa Maria do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Rita do Tocantins" checked><img src="styles/legend/Limites_Municipais_117.png"/>Santa Rita do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Rosa do Tocantins" checked><img src="styles/legend/Limites_Municipais_118.png"/>Santa Rosa do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Tereza do Tocantins" checked><img src="styles/legend/Limites_Municipais_119.png"/>Santa Tereza do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Santa Terezinha do Tocantins" checked><img src="styles/legend/Limites_Municipais_120.png"/>Santa Terezinha do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Bento do Tocantins" checked><img src="styles/legend/Limites_Municipais_121.png"/>São Bento do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Félix do Tocantins" checked><img src="styles/legend/Limites_Municipais_122.png"/>São Félix do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Miguel do Tocantins" checked><img src="styles/legend/Limites_Municipais_123.png"/>São Miguel do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Salvador do Tocantins" checked><img src="styles/legend/Limites_Municipais_124.png"/>São Salvador do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Sebastião do Tocantins" checked><img src="styles/legend/Limites_Municipais_125.png"/>São Sebastião do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="São Valério da Natividade" checked><img src="styles/legend/Limites_Municipais_126.png"/>São Valério da Natividade<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Silvanópolis" checked><img src="styles/legend/Limites_Municipais_127.png"/>Silvanópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sítio Novo do Tocantins" checked><img src="styles/legend/Limites_Municipais_128.png"/>Sítio Novo do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sucupira" checked><img src="styles/legend/Limites_Municipais_129.png"/>Sucupira<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Taguatinga" checked><img src="styles/legend/Limites_Municipais_130.png"/>Taguatinga<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Taipas do Tocantins" checked><img src="styles/legend/Limites_Municipais_131.png"/>Taipas do Tocantins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Talismã" checked><img src="styles/legend/Limites_Municipais_132.png"/>Talismã<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Tocantínia" checked><img src="styles/legend/Limites_Municipais_133.png"/>Tocantínia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Tocantinópolis" checked><img src="styles/legend/Limites_Municipais_134.png"/>Tocantinópolis<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Tupirama" checked><img src="styles/legend/Limites_Municipais_135.png"/>Tupirama<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Tupiratins" checked><img src="styles/legend/Limites_Municipais_136.png"/>Tupiratins<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Wanderlândia" checked><img src="styles/legend/Limites_Municipais_137.png"/>Wanderlândia<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Xambioá" checked><img src="styles/legend/Limites_Municipais_138.png"/>Xambioá<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="ogis-other" checked><img src="styles/legend/Limites_Municipais_139.png"/>(all other)<br /></a>'
        );
    var featureCounter_Limites_Municipais = 1;
    jsonSource_Limites_Municipais.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Limites_Municipais++);
        feature.set("layerObject", lyr_Limites_Municipais);
    });        
    jsonSource_Limites_Municipais.addFeatures(features_Limites_Municipais);
}
var lyr_Processos_minerrios_ativos_ANM = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer?",
                attributions: '<a class="legend-realtime"><b>Processos_minerários_ativos_ANM</b><br />\<img src="https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer?request=GetLegendGraphic&version=1.3.0&format=image/png&layer=4&"></a>',
                params: {
                "LAYERS": "4",
                //"TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Processos_minerários_ativos_ANM<br />\<i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend-realtime">\<img src="https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer?request=GetLegendGraphic&version=1.3.0&format=image/png&layer=4&"></a>',
            popuplayertitle: 'Processos_minerários_ativos_ANM',
            permalink: 'Processos_minerrios_ativos_ANM',
            opacity: 0.566000,
            
            
            
            });
    wms_layers.push([lyr_Processos_minerrios_ativos_ANM, 0]);
    lyr_Processos_minerrios_ativos_ANM.setVisible(false);
    

var lyr_Limite_estimado_Comunidade_So_Joaquim = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Limite_estimado_Comunidade_So_Joaquim',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Limite_estimado_Comunidade_So_Joaquim",
    popuplayertitle: 'Limite_estimado_Comunidade_São_Joaquim',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Limite_estimado_Comunidade_So_Joaquim,
});
function load_Limite_estimado_Comunidade_So_Joaquim_data() {
    var format_Limite_estimado_Comunidade_So_Joaquim = new ol.format.GeoJSON();
    var features_Limite_estimado_Comunidade_So_Joaquim = format_Limite_estimado_Comunidade_So_Joaquim.readFeatures(json_Limite_estimado_Comunidade_So_Joaquim, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Limite_estimado_Comunidade_So_Joaquim = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Limite_estimado_Comunidade_So_Joaquim.png"/><b>Limite_estimado_Comunidade_São_Joaquim</b>'
    });
    lyr_Limite_estimado_Comunidade_So_Joaquim.setSource(jsonSource_Limite_estimado_Comunidade_So_Joaquim);
    lyr_Limite_estimado_Comunidade_So_Joaquim.set(
    "title", '<img src="styles/legend/Limite_estimado_Comunidade_So_Joaquim.png"/>Limite_estimado_Comunidade_São_Joaquim'
    );
    var featureCounter_Limite_estimado_Comunidade_So_Joaquim = 1;
    jsonSource_Limite_estimado_Comunidade_So_Joaquim.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Limite_estimado_Comunidade_So_Joaquim++);
        feature.set("layerObject", lyr_Limite_estimado_Comunidade_So_Joaquim);
    });        
    jsonSource_Limite_estimado_Comunidade_So_Joaquim.addFeatures(features_Limite_estimado_Comunidade_So_Joaquim);
}

var lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Limite_estimado_Comunidade_BaiaoCapao_da_Onca',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Limite_estimado_Comunidade_BaiaoCapao_da_Onca",
    popuplayertitle: 'Limite_estimado_Comunidade_Baião-Capão_da_Onça',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
    style: style_Limite_estimado_Comunidade_BaiaoCapao_da_Onca,
});
function load_Limite_estimado_Comunidade_BaiaoCapao_da_Onca_data() {
    var format_Limite_estimado_Comunidade_BaiaoCapao_da_Onca = new ol.format.GeoJSON();
    var features_Limite_estimado_Comunidade_BaiaoCapao_da_Onca = format_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.readFeatures(json_Limite_estimado_Comunidade_BaiaoCapao_da_Onca, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Limite_estimado_Comunidade_BaiaoCapao_da_Onca = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Limite_estimado_Comunidade_BaiaoCapao_da_Onca.png"/><b>Limite_estimado_Comunidade_Baião-Capão_da_Onça</b>'
    });
    lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.setSource(jsonSource_Limite_estimado_Comunidade_BaiaoCapao_da_Onca);
    lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.set(
    "title", '<img src="styles/legend/Limite_estimado_Comunidade_BaiaoCapao_da_Onca.png"/>Limite_estimado_Comunidade_Baião-Capão_da_Onça'
    );
    var featureCounter_Limite_estimado_Comunidade_BaiaoCapao_da_Onca = 1;
    jsonSource_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Limite_estimado_Comunidade_BaiaoCapao_da_Onca++);
        feature.set("layerObject", lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca);
    });        
    jsonSource_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.addFeatures(features_Limite_estimado_Comunidade_BaiaoCapao_da_Onca);
}
var lyr_SigcarTO_propriedade_area_imovel = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://geoserver.car.gov.br/geoserver/sicar/wms",
                attributions: 'Serviço Florestal Brasileiro / SICAR',
                params: {
                "LAYERS": "sicar:sicar_imoveis_to",
                "TILED": "true",
                "FORMAT": "image/png",
                "TRANSPARENT": true,
                "VERSION": "1.1.1"},
                serverType: "geoserver",
                crossOrigin: "anonymous",
            })),
            title: 'SICAR – limites dos imóveis rurais | TO',
            popuplayertitle: 'SICAR – limites dos imóveis rurais | TO',
            permalink: 'SigcarTO_propriedade_area_imovel',
            opacity: 1.000000,
            
            
            
            });
    lyr_SigcarTO_propriedade_area_imovel.set("auraSourceStatus", "SICAR federal – HTTPS");
    wms_layers.push([lyr_SigcarTO_propriedade_area_imovel, 0]);
    lyr_SigcarTO_propriedade_area_imovel.setVisible(false);
    

var lyr_servidao_2026_virasaia = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_2026_virasaia',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_2026_virasaia",
    popuplayertitle: 'servidao_2026_virasaia',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_servidao_2026_virasaia_data() {
    var format_servidao_2026_virasaia = new ol.format.GeoJSON();
    var features_servidao_2026_virasaia = format_servidao_2026_virasaia.readFeatures(json_servidao_2026_virasaia, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_servidao_2026_virasaia = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/servidao_2026_virasaia.png"/><b>servidao_2026_virasaia</b>'
    });
    lyr_servidao_2026_virasaia.setSource(jsonSource_servidao_2026_virasaia);
    lyr_servidao_2026_virasaia.set(
    "title", '<img src="styles/legend/servidao_2026_virasaia.png"/>servidao_2026_virasaia'
    );
    var featureCounter_servidao_2026_virasaia = 1;
    jsonSource_servidao_2026_virasaia.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_servidao_2026_virasaia++);
        feature.set("layerObject", lyr_servidao_2026_virasaia);
    });        
    jsonSource_servidao_2026_virasaia.addFeatures(features_servidao_2026_virasaia);
}
applySLDstyle(lyr_servidao_2026_virasaia, style_servidao_2026_virasaia, 'servidao_2026_virasaia');


var lyr_servidao_2026_jacobina = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_2026_jacobina',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_2026_jacobina",
    popuplayertitle: 'servidao_2026_jacobina',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_servidao_2026_jacobina_data() {
    var format_servidao_2026_jacobina = new ol.format.GeoJSON();
    var features_servidao_2026_jacobina = format_servidao_2026_jacobina.readFeatures(json_servidao_2026_jacobina, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_servidao_2026_jacobina = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/servidao_2026_jacobina.png"/><b>servidao_2026_jacobina</b>'
    });
    lyr_servidao_2026_jacobina.setSource(jsonSource_servidao_2026_jacobina);
    lyr_servidao_2026_jacobina.set(
    "title", '<img src="styles/legend/servidao_2026_jacobina.png"/>servidao_2026_jacobina'
    );
    var featureCounter_servidao_2026_jacobina = 1;
    jsonSource_servidao_2026_jacobina.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_servidao_2026_jacobina++);
        feature.set("layerObject", lyr_servidao_2026_jacobina);
    });        
    jsonSource_servidao_2026_jacobina.addFeatures(features_servidao_2026_jacobina);
}
applySLDstyle(lyr_servidao_2026_jacobina, style_servidao_2026_jacobina, 'servidao_2026_jacobina');


var lyr_servidao_2026_novaprata = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_2026_novaprata',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_2026_novaprata",
    popuplayertitle: 'servidao_2026_novaprata',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_servidao_2026_novaprata_data() {
    var format_servidao_2026_novaprata = new ol.format.GeoJSON();
    var features_servidao_2026_novaprata = format_servidao_2026_novaprata.readFeatures(json_servidao_2026_novaprata, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_servidao_2026_novaprata = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/servidao_2026_novaprata.png"/><b>servidao_2026_novaprata</b>'
    });
    lyr_servidao_2026_novaprata.setSource(jsonSource_servidao_2026_novaprata);
    lyr_servidao_2026_novaprata.set(
    "title", '<img src="styles/legend/servidao_2026_novaprata.png"/>servidao_2026_novaprata'
    );
    var featureCounter_servidao_2026_novaprata = 1;
    jsonSource_servidao_2026_novaprata.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_servidao_2026_novaprata++);
        feature.set("layerObject", lyr_servidao_2026_novaprata);
    });        
    jsonSource_servidao_2026_novaprata.addFeatures(features_servidao_2026_novaprata);
}
applySLDstyle(lyr_servidao_2026_novaprata, style_servidao_2026_novaprata, 'servidao_2026_novaprata');


var lyr_servidao_paiol_original = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_paiol_original',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_paiol_original",
    popuplayertitle: 'servidao_paiol_original',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_servidao_paiol_original_data() {
    var format_servidao_paiol_original = new ol.format.GeoJSON();
    var features_servidao_paiol_original = format_servidao_paiol_original.readFeatures(json_servidao_paiol_original, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_servidao_paiol_original = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/servidao_paiol_original.png"/><b>servidao_paiol_original</b>'
    });
    lyr_servidao_paiol_original.setSource(jsonSource_servidao_paiol_original);
    lyr_servidao_paiol_original.set(
    "title", '<img src="styles/legend/servidao_paiol_original.png"/>servidao_paiol_original'
    );
    var featureCounter_servidao_paiol_original = 1;
    jsonSource_servidao_paiol_original.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_servidao_paiol_original++);
        feature.set("layerObject", lyr_servidao_paiol_original);
    });        
    jsonSource_servidao_paiol_original.addFeatures(features_servidao_paiol_original);
}
applySLDstyle(lyr_servidao_paiol_original, style_servidao_paiol_original, 'servidao_paiol_original');


var lyr_servidao_virasaia_original = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_virasaia_original',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_virasaia_original",
    popuplayertitle: 'servidao_virasaia_original',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_servidao_virasaia_original_data() {
    var format_servidao_virasaia_original = new ol.format.GeoJSON();
    var features_servidao_virasaia_original = format_servidao_virasaia_original.readFeatures(json_servidao_virasaia_original, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_servidao_virasaia_original = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/servidao_virasaia_original.png"/><b>servidao_virasaia_original</b>'
    });
    lyr_servidao_virasaia_original.setSource(jsonSource_servidao_virasaia_original);
    lyr_servidao_virasaia_original.set(
    "title", '<img src="styles/legend/servidao_virasaia_original.png"/>servidao_virasaia_original'
    );
    var featureCounter_servidao_virasaia_original = 1;
    jsonSource_servidao_virasaia_original.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_servidao_virasaia_original++);
        feature.set("layerObject", lyr_servidao_virasaia_original);
    });        
    jsonSource_servidao_virasaia_original.addFeatures(features_servidao_virasaia_original);
}
applySLDstyle(lyr_servidao_virasaia_original, style_servidao_virasaia_original, 'servidao_virasaia_original');


var lyr_plano_diretor_2025 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> plano_diretor_2025',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "plano_diretor_2025",
    popuplayertitle: 'plano_diretor_2025',
    creationdate: '2026-06-17 09:33:28',
    interactive: true,
});
function load_plano_diretor_2025_data() {
    var format_plano_diretor_2025 = new ol.format.GeoJSON();
    var features_plano_diretor_2025 = format_plano_diretor_2025.readFeatures(json_plano_diretor_2025, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_plano_diretor_2025 = new ol.source.Vector({
    attributions: '<a class="legend"><b>plano_diretor_2025</b><br />\
        <img src="styles/legend/plano_diretor_2025_0.png"/>1<br />\
        <img src="styles/legend/plano_diretor_2025_1.png"/>10<br />\
        <img src="styles/legend/plano_diretor_2025_2.png"/>11<br />\
        <img src="styles/legend/plano_diretor_2025_3.png"/>12<br />\
        <img src="styles/legend/plano_diretor_2025_4.png"/>13<br />\
        <img src="styles/legend/plano_diretor_2025_5.png"/>14<br />\
        <img src="styles/legend/plano_diretor_2025_6.png"/>15<br />\
        <img src="styles/legend/plano_diretor_2025_7.png"/>16<br />\
        <img src="styles/legend/plano_diretor_2025_8.png"/>17<br />\
        <img src="styles/legend/plano_diretor_2025_9.png"/>18<br />\
        <img src="styles/legend/plano_diretor_2025_10.png"/>19<br />\
        <img src="styles/legend/plano_diretor_2025_11.png"/>2<br />\
        <img src="styles/legend/plano_diretor_2025_12.png"/>20<br />\
        <img src="styles/legend/plano_diretor_2025_13.png"/>21<br />\
        <img src="styles/legend/plano_diretor_2025_14.png"/>22<br />\
        <img src="styles/legend/plano_diretor_2025_15.png"/>23<br />\
        <img src="styles/legend/plano_diretor_2025_16.png"/>24<br />\
        <img src="styles/legend/plano_diretor_2025_17.png"/>25<br />\
        <img src="styles/legend/plano_diretor_2025_18.png"/>26<br />\
        <img src="styles/legend/plano_diretor_2025_19.png"/>27<br />\
        <img src="styles/legend/plano_diretor_2025_20.png"/>28<br />\
        <img src="styles/legend/plano_diretor_2025_21.png"/>29<br />\
        <img src="styles/legend/plano_diretor_2025_22.png"/>3<br />\
        <img src="styles/legend/plano_diretor_2025_23.png"/>30<br />\
        <img src="styles/legend/plano_diretor_2025_24.png"/>4<br />\
        <img src="styles/legend/plano_diretor_2025_25.png"/>5<br />\
        <img src="styles/legend/plano_diretor_2025_26.png"/>6<br />\
        <img src="styles/legend/plano_diretor_2025_27.png"/>7<br />\
        <img src="styles/legend/plano_diretor_2025_28.png"/>8<br />\
        <img src="styles/legend/plano_diretor_2025_29.png"/>9<br />\
        <img src="styles/legend/plano_diretor_2025_30.png"/><br /></a>'
        });
    lyr_plano_diretor_2025.setSource(jsonSource_plano_diretor_2025);
    lyr_plano_diretor_2025.set(
    "title", '<div id="layertitle">plano_diretor_2025<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="1" checked><img src="styles/legend/plano_diretor_2025_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="10" checked><img src="styles/legend/plano_diretor_2025_1.png"/>10<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="11" checked><img src="styles/legend/plano_diretor_2025_2.png"/>11<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="12" checked><img src="styles/legend/plano_diretor_2025_3.png"/>12<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="13" checked><img src="styles/legend/plano_diretor_2025_4.png"/>13<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="14" checked><img src="styles/legend/plano_diretor_2025_5.png"/>14<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="15" checked><img src="styles/legend/plano_diretor_2025_6.png"/>15<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="16" checked><img src="styles/legend/plano_diretor_2025_7.png"/>16<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="17" checked><img src="styles/legend/plano_diretor_2025_8.png"/>17<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="18" checked><img src="styles/legend/plano_diretor_2025_9.png"/>18<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="19" checked><img src="styles/legend/plano_diretor_2025_10.png"/>19<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="2" checked><img src="styles/legend/plano_diretor_2025_11.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="20" checked><img src="styles/legend/plano_diretor_2025_12.png"/>20<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="21" checked><img src="styles/legend/plano_diretor_2025_13.png"/>21<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="22" checked><img src="styles/legend/plano_diretor_2025_14.png"/>22<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="23" checked><img src="styles/legend/plano_diretor_2025_15.png"/>23<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="24" checked><img src="styles/legend/plano_diretor_2025_16.png"/>24<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="25" checked><img src="styles/legend/plano_diretor_2025_17.png"/>25<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="26" checked><img src="styles/legend/plano_diretor_2025_18.png"/>26<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="27" checked><img src="styles/legend/plano_diretor_2025_19.png"/>27<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="28" checked><img src="styles/legend/plano_diretor_2025_20.png"/>28<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="29" checked><img src="styles/legend/plano_diretor_2025_21.png"/>29<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="3" checked><img src="styles/legend/plano_diretor_2025_22.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="30" checked><img src="styles/legend/plano_diretor_2025_23.png"/>30<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="4" checked><img src="styles/legend/plano_diretor_2025_24.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="5" checked><img src="styles/legend/plano_diretor_2025_25.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="6" checked><img src="styles/legend/plano_diretor_2025_26.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="7" checked><img src="styles/legend/plano_diretor_2025_27.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="8" checked><img src="styles/legend/plano_diretor_2025_28.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="9" checked><img src="styles/legend/plano_diretor_2025_29.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="ogis-other" checked><img src="styles/legend/plano_diretor_2025_30.png"/>(all other)<br /></a>'
        );
    var featureCounter_plano_diretor_2025 = 1;
    jsonSource_plano_diretor_2025.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_plano_diretor_2025++);
        feature.set("layerObject", lyr_plano_diretor_2025);
    });        
    jsonSource_plano_diretor_2025.addFeatures(features_plano_diretor_2025);
}
applySLDstyle(lyr_plano_diretor_2025, style_plano_diretor_2025, 'plano_diretor_2025');


// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_servidao_2026_virasaia, source: 'servidao_2026_virasaia'},{layer: lyr_servidao_2026_jacobina, source: 'servidao_2026_jacobina'},{layer: lyr_servidao_2026_novaprata, source: 'servidao_2026_novaprata'},{layer: lyr_servidao_paiol_original, source: 'servidao_paiol_original'},{layer: lyr_servidao_virasaia_original, source: 'servidao_virasaia_original'}
    ];
    var layersHiddenOnStart = [
        {layer: lyr_V1_Fz_Lavandeira_II_16062026, source: 'V1_Fz_Lavandeira_II_16062026'},{layer: lyr_V1_Fz_Brejo_Alegre_III_16062026, source: 'V1_Fz_Brejo_Alegre_III_16062026'},{layer: lyr_V1_Fz_BrejoAlegreII_16062026, source: 'V1_Fz_BrejoAlegreII_16062026'},{layer: lyr_V1_Fz_BrejoAlegreI_16062026, source: 'V1_Fz_BrejoAlegreI_16062026'},{layer: lyr_V1_Fz_Nova_Barra_10062026, source: 'V1_Fz_Nova_Barra_10062026'},{layer: lyr_V1_Fz_Limeira_10062026, source: 'V1_Fz_Limeira_10062026'},{layer: lyr_V1_Fz_SantaHelena_29052026, source: 'V1_Fz_SantaHelena_29052026'},{layer: lyr_V1_Fz_Lavandeira_29052026, source: 'V1_Fz_Lavandeira_29052026'},{layer: lyr_V1_Fz_Amaralina_19052026, source: 'V1_Fz_Amaralina_19052026'},{layer: lyr_V1_Fz_Lote15_190526, source: 'V1_Fz_Lote15_190526'},{layer: lyr_V1_Fz_Sao_Jose_190526, source: 'V1_Fz_Sao_Jose_190526'},{layer: lyr_V2_Fz_SantaLuzia_19052026, source: 'V2_Fz_SantaLuzia_19052026'},{layer: lyr_V1_Fz_SantaLuzia_07052026, source: 'V1_Fz_SantaLuzia_07052026'},{layer: lyr_V3_Fz_NovaPrata_10052026, source: 'V3_Fz_NovaPrata_10052026'},{layer: lyr_V2_Fz_NovaPrata_07052026, source: 'V2_Fz_NovaPrata_07052026'},{layer: lyr_V1_Fz_NovaPrata_24042026, source: 'V1_Fz_NovaPrata_24042026'},{layer: lyr_Locais_visitados_Pliade_25052026, source: 'Locais_visitados_Pliade_25052026'},{layer: lyr_Imveis_Estrada_Opo3_Nova_Prata, source: 'Imveis_Estrada_Opo3_Nova_Prata'},{layer: lyr_RevisoADANovaPrata_27042026, source: 'RevisoADANovaPrata_27042026'},{layer: lyr_EstradasNovaPrata, source: 'EstradasNovaPrata'},{layer: lyr_Estradademinrio, source: 'Estradademinrio'},{layer: lyr_Desvio2, source: 'Desvio2'},{layer: lyr_Desvio1, source: 'Desvio1'},{layer: lyr_ComunidadeQuilombolaLajeadokmz, source: 'ComunidadeQuilombolaLajeadokmz'},{layer: lyr_ADAapsReunio27042026kmz, source: 'ADAapsReunio27042026kmz'},{layer: lyr_09Ps2reuniokmz, source: '09Ps2reuniokmz'},{layer: lyr_08Ps2reuniokmz, source: '08Ps2reuniokmz'},{layer: lyr_07Ps2reuniokmz, source: '07Ps2reuniokmz'},{layer: lyr_06Reuniokmz, source: '06Reuniokmz'},{layer: lyr_05Reuniokmz, source: '05Reuniokmz'},{layer: lyr_04kmz, source: '04kmz'},{layer: lyr_03kmz, source: '03kmz'},{layer: lyr_02kmz, source: '02kmz'},{layer: lyr_01kmz, source: '01kmz'},{layer: lyr_Polgono, source: 'Polgono'},{layer: lyr_AreiaSequeiro, source: 'AreiaSequeiro'},{layer: lyr_V1_Fz_Matheus_Lopes_Oeste_070526, source: 'V1_Fz_Matheus_Lopes_Oeste_070526'},{layer: lyr_V1_Fz_Floresta_070526, source: 'V1_Fz_Floresta_070526'},{layer: lyr_V1_Fz_Matheus_Lopes_240426, source: 'V1_Fz_Matheus_Lopes_240426'},{layer: lyr_FazendaAmaralina, source: 'FazendaAmaralina'},{layer: lyr_FazendaBrejoAlegreI, source: 'FazendaBrejoAlegreI'},{layer: lyr_FazendaBrejoAlegreII, source: 'FazendaBrejoAlegreII'},{layer: lyr_FazendaBrejoAlegreIII, source: 'FazendaBrejoAlegreIII'},{layer: lyr_FazendaFloresta, source: 'FazendaFloresta'},{layer: lyr_FazendaLavandeiraII, source: 'FazendaLavandeiraII'},{layer: lyr_FazendaLavandeira, source: 'FazendaLavandeira'},{layer: lyr_FazendaLote15, source: 'FazendaLote15'},{layer: lyr_FazendaMatheusLopesGeral, source: 'FazendaMatheusLopesGeral'},{layer: lyr_FazendaMatheusLopesOeste, source: 'FazendaMatheusLopesOeste'},{layer: lyr_FazendaNovaPrata, source: 'FazendaNovaPrata'},{layer: lyr_FazendaSantaHelena, source: 'FazendaSantaHelena'},{layer: lyr_FazendaSantaLuziaRioGrande, source: 'FazendaSantaLuziaRioGrande'},{layer: lyr_FazendaSoJos, source: 'FazendaSoJos'},{layer: lyr_Limites_Municipais, source: 'Limites_Municipais'},{layer: lyr_Limite_estimado_Comunidade_So_Joaquim, source: 'Limite_estimado_Comunidade_So_Joaquim'},{layer: lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca, source: 'Limite_estimado_Comunidade_BaiaoCapao_da_Onca'},{layer: lyr_plano_diretor_2025, source: 'plano_diretor_2025'}
    ];
    // Funzione per caricare il JSON source
	function loadJSON(fileName) {
		return new Promise((resolve, reject) => {
			let triedFallback = false; // Flag per controllare se abbiamo già provato il fallback
			function tryLoad(src) {
				//console.log(`Cerco file in: ${src}`);
				const script = document.createElement('script'); // Crea un nuovo script per ogni tentativo
				script.src = src;
				script.onload = () => resolve(fileName); // Risolve la promessa al successo
				script.onerror = () => {
					if (!triedFallback) {
						triedFallback = true; // Segna che abbiamo già provato la seconda opzione
						//console.warn(`File non trovato: ${src}, provo ../layers/${fileName}.js`);
						tryLoad(`../layers/${fileName}.js`); // Secondo tentativo
					} else {
						reject(new Error(`Errore nel caricamento di ${fileName}.js`)); // Rifiuta se anche il secondo fallisce
					}
				};
				document.head.appendChild(script); // Aggiungi il tag <script> al DOM
			}
			tryLoad(`layers/${fileName}.js`); // Primo tentativo
		});
	}
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            // Lancia il caricamento dei layer WFS subito
            const wfsLayers = [...layersVisibleOnStart, ...layersHiddenOnStart].filter(
                ({ layer }) => layer.get('sourceType') === 'wfs'
            );
            wfsLayers.forEach(({ layer, source }) => {
                window[`load_${source}_data`]();
            });
            // Carica prima i layer json visibili all'avvio
            for (const { layer, source } of layersVisibleOnStart) {
                if (layer.get('sourceType') === 'json') {
                    await loadJSON(source);
                    // Inietta i dati del layer
                    window[`load_${source}_data`]();
                }
            }
            // Carica i layer json non visibili all'avvio
            for (const { layer, source } of layersHiddenOnStart) {
                if (layer.get('sourceType') === 'json') {
                    await loadJSON(source);
                    // Inietta i dati del layer
                    window[`load_${source}_data`]();
                }
            }
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_a_plano_diretor = new ol.layer.Group({
                                layers: [lyr_plano_diretor_2025,],
                                openInLayerSwitcher: true,
                                title: 'a_plano_diretor'});
var group_b_areas_licencas = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b_areas_licencas'});
var group_c_servidao_mineral = new ol.layer.Group({
                                layers: [lyr_servidao_2026_virasaia,lyr_servidao_2026_jacobina,lyr_servidao_2026_novaprata,lyr_servidao_paiol_original,lyr_servidao_virasaia_original,],
                                openInLayerSwitcher: true,
                                title: 'c_servidao_mineral'});
var group_011_Base_Oficial_Aura = new ol.layer.Group({
                                layers: [group_c_servidao_mineral,group_b_areas_licencas,group_a_plano_diretor,],
                                openInLayerSwitcher: true,
                                title: '01-1_Base_Oficial_Aura'});
var group_Certificaes_Sigef_Incra = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Certificações_Sigef_Incra'});
var group_Fund_Palmares_Almas = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Fund_Palmares_Almas'});
var group_Fund_Palmares_DIanopolis = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Fund_Palmares_DIanopolis'});
var group_Fund_Palmares_Porto_Alegre_do_Tocantins = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Fund_Palmares_Porto_Alegre_do_Tocantins'});
var group_012_Bases_Complementares = new ol.layer.Group({
                                layers: [lyr_Limites_Municipais,lyr_Processos_minerrios_ativos_ANM,group_Fund_Palmares_Porto_Alegre_do_Tocantins,group_Fund_Palmares_DIanopolis,group_Fund_Palmares_Almas,lyr_Limite_estimado_Comunidade_So_Joaquim,lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca,group_Certificaes_Sigef_Incra,lyr_SigcarTO_propriedade_area_imovel,],
                                openInLayerSwitcher: true,
                                title: '01-2_Bases_Complementares'});
var group_01_BASES_DADOS_GERAIS = new ol.layer.Group({
                                layers: [group_012_Bases_Complementares,group_011_Base_Oficial_Aura,],
                                openInLayerSwitcher: true,
                                title: '01_BASES_DADOS_GERAIS'});
var group_Limite_Imveis = new ol.layer.Group({
                                layers: [lyr_FazendaAmaralina,lyr_FazendaBrejoAlegreI,lyr_FazendaBrejoAlegreII,lyr_FazendaBrejoAlegreIII,lyr_FazendaFloresta,lyr_FazendaLavandeiraII,lyr_FazendaLavandeira,lyr_FazendaLote15,lyr_FazendaMatheusLopesGeral,lyr_FazendaMatheusLopesOeste,lyr_FazendaNovaPrata,lyr_FazendaSantaHelena,lyr_FazendaSantaLuziaRioGrande,lyr_FazendaSoJos,],
                                openInLayerSwitcher: true,
                                title: 'Limite_Imóveis'});
var group_a1_recebidos_aura = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'a.1_recebidos_aura'});
var group_a2_obtidos_pleiade = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'a.2_obtidos_pleiade'});
var group_a_dados_especficos = new ol.layer.Group({
                                layers: [group_a2_obtidos_pleiade,group_a1_recebidos_aura,],
                                openInLayerSwitcher: true,
                                title: 'a_dados_específicos'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [lyr_V1_Fz_Matheus_Lopes_Oeste_070526,lyr_V1_Fz_Floresta_070526,lyr_V1_Fz_Matheus_Lopes_240426,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS01_Alarico_Virasaia = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-01_Alarico_Virasaia'});
var group_Estudo_Jazidas_Areia_0526 = new ol.layer.Group({
                                layers: [lyr_Polgono,lyr_AreiaSequeiro,],
                                openInLayerSwitcher: true,
                                title: 'Estudo_Jazidas_Areia_05-26'});
var group_Revisao_ADA_NovaPrata_27042026 = new ol.layer.Group({
                                layers: [lyr_RevisoADANovaPrata_27042026,lyr_EstradasNovaPrata,lyr_Estradademinrio,lyr_Desvio2,lyr_Desvio1,lyr_ComunidadeQuilombolaLajeadokmz,lyr_ADAapsReunio27042026kmz,lyr_09Ps2reuniokmz,lyr_08Ps2reuniokmz,lyr_07Ps2reuniokmz,lyr_06Reuniokmz,lyr_05Reuniokmz,lyr_04kmz,lyr_03kmz,lyr_02kmz,lyr_01kmz,],
                                openInLayerSwitcher: true,
                                title: 'Revisão_ADA_Nova Prata_27-04-2026'});
var group_a1_recebidos_aura = new ol.layer.Group({
                                layers: [group_Revisao_ADA_NovaPrata_27042026,group_Estudo_Jazidas_Areia_0526,],
                                openInLayerSwitcher: true,
                                title: 'a.1_recebidos_aura'});
var group_a2_obtidos_pleiade = new ol.layer.Group({
                                layers: [lyr_Locais_visitados_Pliade_25052026,lyr_Imveis_Estrada_Opo3_Nova_Prata,],
                                openInLayerSwitcher: true,
                                title: 'a.2_obtidos_pleiade'});
var group_a_dados_especficos = new ol.layer.Group({
                                layers: [group_a2_obtidos_pleiade,group_a1_recebidos_aura,],
                                openInLayerSwitcher: true,
                                title: 'a_dados_específicos'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [lyr_V1_Fz_Lavandeira_II_16062026,lyr_V1_Fz_Brejo_Alegre_III_16062026,lyr_V1_Fz_BrejoAlegreII_16062026,lyr_V1_Fz_BrejoAlegreI_16062026,lyr_V1_Fz_Nova_Barra_10062026,lyr_V1_Fz_Limeira_10062026,lyr_V1_Fz_SantaHelena_29052026,lyr_V1_Fz_Lavandeira_29052026,lyr_V1_Fz_Amaralina_19052026,lyr_V1_Fz_Lote15_190526,lyr_V1_Fz_Sao_Jose_190526,lyr_V2_Fz_SantaLuzia_19052026,lyr_V1_Fz_SantaLuzia_07052026,lyr_V3_Fz_NovaPrata_10052026,lyr_V2_Fz_NovaPrata_07052026,lyr_V1_Fz_NovaPrata_24042026,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS02_Nova_Prata = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-02_Nova_Prata'});
var group_02_ORDENS_SERVIOS = new ol.layer.Group({
                                layers: [group_OS02_Nova_Prata,group_OS01_Alarico_Virasaia,group_Limite_Imveis,],
                                openInLayerSwitcher: true,
                                title: '02_ORDENS_SERVIÇOS'});
var group_991_Versoes_Superadas = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: '99-1_Versoes_Superadas'});
var group_992_Testes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: '99-2_Testes'});
var group_993_Descartados = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: '99-3_Descartados'});
var group_98_HISTORICO = new ol.layer.Group({
                                layers: [group_993_Descartados,group_992_Testes,group_991_Versoes_Superadas,],
                                openInLayerSwitcher: true,
                                title: '98_HISTORICO'});
var group_99_IMAGENS_SENSOR_REMOTO = new ol.layer.Group({
                                layers: [lyr_Imagem_Google,lyr_ImagemdeSatlitePleiades2015,lyr_GlobalMonthly202603Mosaic,lyr_GlobalMonthly202507Mosaic,lyr_GlobalMonthly202407Mosaic,lyr_GlobalMonthly202307Mosaic,lyr_WorldImagery,],
                                openInLayerSwitcher: true,
                                title: '99_IMAGENS_SENSOR_REMOTO'});

lyr_Imagem_Google.setVisible(true);lyr_ImagemdeSatlitePleiades2015.setVisible(false);lyr_GlobalMonthly202603Mosaic.setVisible(false);lyr_GlobalMonthly202507Mosaic.setVisible(false);lyr_GlobalMonthly202407Mosaic.setVisible(false);lyr_GlobalMonthly202307Mosaic.setVisible(false);lyr_WorldImagery.setVisible(true);lyr_V1_Fz_Lavandeira_II_16062026.setVisible(false);lyr_V1_Fz_Brejo_Alegre_III_16062026.setVisible(false);lyr_V1_Fz_BrejoAlegreII_16062026.setVisible(false);lyr_V1_Fz_BrejoAlegreI_16062026.setVisible(false);lyr_V1_Fz_Nova_Barra_10062026.setVisible(false);lyr_V1_Fz_Limeira_10062026.setVisible(false);lyr_V1_Fz_SantaHelena_29052026.setVisible(false);lyr_V1_Fz_Lavandeira_29052026.setVisible(false);lyr_V1_Fz_Amaralina_19052026.setVisible(false);lyr_V1_Fz_Lote15_190526.setVisible(false);lyr_V1_Fz_Sao_Jose_190526.setVisible(false);lyr_V2_Fz_SantaLuzia_19052026.setVisible(false);lyr_V1_Fz_SantaLuzia_07052026.setVisible(false);lyr_V3_Fz_NovaPrata_10052026.setVisible(false);lyr_V2_Fz_NovaPrata_07052026.setVisible(false);lyr_V1_Fz_NovaPrata_24042026.setVisible(false);lyr_Locais_visitados_Pliade_25052026.setVisible(false);lyr_Imveis_Estrada_Opo3_Nova_Prata.setVisible(false);lyr_RevisoADANovaPrata_27042026.setVisible(false);lyr_EstradasNovaPrata.setVisible(false);lyr_Estradademinrio.setVisible(false);lyr_Desvio2.setVisible(false);lyr_Desvio1.setVisible(false);lyr_ComunidadeQuilombolaLajeadokmz.setVisible(false);lyr_ADAapsReunio27042026kmz.setVisible(false);lyr_09Ps2reuniokmz.setVisible(false);lyr_08Ps2reuniokmz.setVisible(false);lyr_07Ps2reuniokmz.setVisible(false);lyr_06Reuniokmz.setVisible(false);lyr_05Reuniokmz.setVisible(false);lyr_04kmz.setVisible(false);lyr_03kmz.setVisible(false);lyr_02kmz.setVisible(false);lyr_01kmz.setVisible(false);lyr_Polgono.setVisible(false);lyr_AreiaSequeiro.setVisible(false);lyr_V1_Fz_Matheus_Lopes_Oeste_070526.setVisible(false);lyr_V1_Fz_Floresta_070526.setVisible(false);lyr_V1_Fz_Matheus_Lopes_240426.setVisible(false);lyr_FazendaAmaralina.setVisible(false);lyr_FazendaBrejoAlegreI.setVisible(false);lyr_FazendaBrejoAlegreII.setVisible(false);lyr_FazendaBrejoAlegreIII.setVisible(false);lyr_FazendaFloresta.setVisible(false);lyr_FazendaLavandeiraII.setVisible(false);lyr_FazendaLavandeira.setVisible(false);lyr_FazendaLote15.setVisible(false);lyr_FazendaMatheusLopesGeral.setVisible(false);lyr_FazendaMatheusLopesOeste.setVisible(false);lyr_FazendaNovaPrata.setVisible(false);lyr_FazendaSantaHelena.setVisible(false);lyr_FazendaSantaLuziaRioGrande.setVisible(false);lyr_FazendaSoJos.setVisible(false);lyr_Limites_Municipais.setVisible(false);lyr_Processos_minerrios_ativos_ANM.setVisible(false);lyr_Limite_estimado_Comunidade_So_Joaquim.setVisible(false);lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.setVisible(false);lyr_SigcarTO_propriedade_area_imovel.setVisible(false);lyr_servidao_2026_virasaia.setVisible(true);lyr_servidao_2026_jacobina.setVisible(true);lyr_servidao_2026_novaprata.setVisible(true);lyr_servidao_paiol_original.setVisible(true);lyr_servidao_virasaia_original.setVisible(true);lyr_plano_diretor_2025.setVisible(false);
var layersList = [group_99_IMAGENS_SENSOR_REMOTO,group_98_HISTORICO,group_02_ORDENS_SERVIOS,group_01_BASES_DADOS_GERAIS];
lyr_V1_Fz_Lavandeira_II_16062026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_Brejo_Alegre_III_16062026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_BrejoAlegreII_16062026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_BrejoAlegreI_16062026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_Nova_Barra_10062026.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_V1_Fz_Limeira_10062026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_SantaHelena_29052026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_Lavandeira_29052026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_Amaralina_19052026.set('fieldAliases', {'ld': 'ld', 'NOME': 'NOME', });
lyr_V1_Fz_Lote15_190526.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_V1_Fz_Sao_Jose_190526.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_V2_Fz_SantaLuzia_19052026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V1_Fz_SantaLuzia_07052026.set('fieldAliases', {'NOME': 'NOME', });
lyr_V3_Fz_NovaPrata_10052026.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', });
lyr_V2_Fz_NovaPrata_07052026.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', });
lyr_V1_Fz_NovaPrata_24042026.set('fieldAliases', {'ID': 'ID', 'NOME': 'NOME', });
lyr_Locais_visitados_Pliade_25052026.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Imveis_Estrada_Opo3_Nova_Prata.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'nom_imovel': 'nom_imovel', 'numero_car': 'numero_car', 'carfederal': 'carfederal', 'municipio': 'municipio', });
lyr_RevisoADANovaPrata_27042026.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EstradasNovaPrata.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Estradademinrio.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Desvio2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Desvio1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ComunidadeQuilombolaLajeadokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_quilomb': 'cd_quilomb', 'cd_sr': 'cd_sr', 'nr_process': 'nr_process', 'nm_comunid': 'nm_comunid', 'nm_municip': 'nm_municip', 'cd_uf': 'cd_uf', 'dt_publica': 'dt_publica', 'dt_public1': 'dt_public1', 'nr_familia': 'nr_familia', 'dt_titulac': 'dt_titulac', 'nr_area_ha': 'nr_area_ha', 'nr_perimet': 'nr_perimet', 'cd_sipra': 'cd_sipra', 'ob_descric': 'ob_descric', 'st_titulad': 'st_titulad', 'dt_decreto': 'dt_decreto', 'tp_levanta': 'tp_levanta', 'nr_escalao': 'nr_escalao', 'area_calc_': 'area_calc_', 'perimetro_': 'perimetro_', 'esfera': 'esfera', 'fase': 'fase', 'responsave': 'responsave', });
lyr_ADAapsReunio27042026kmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_09Ps2reuniokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_08Ps2reuniokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_07Ps2reuniokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_06Reuniokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_05Reuniokmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_04kmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_03kmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_02kmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_01kmz.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Polgono.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AreiaSequeiro.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_V1_Fz_Matheus_Lopes_Oeste_070526.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_V1_Fz_Floresta_070526.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_V1_Fz_Matheus_Lopes_240426.set('fieldAliases', {'Id': 'Id', 'NOME': 'NOME', });
lyr_FazendaAmaralina.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaBrejoAlegreI.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaBrejoAlegreII.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaBrejoAlegreIII.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaFloresta.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaLavandeiraII.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaLavandeira.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaLote15.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaMatheusLopesGeral.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaMatheusLopesOeste.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaNovaPrata.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaSantaHelena.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaSantaLuziaRioGrande.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_FazendaSoJos.set('fieldAliases', {'Nome da Propriedade': 'Nome da Propriedade', 'Proprietário(s)': 'Proprietário(s)', 'Telefone': 'Telefone', 'N° Certidão': 'N° Certidão', 'Observações': 'Observações', });
lyr_Limites_Municipais.set('fieldAliases', {'COD_IBGE': 'COD_IBGE', 'NOME': 'NOME', });
lyr_Limite_estimado_Comunidade_So_Joaquim.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NOME': 'NOME', });
lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'snippet': 'snippet', });
lyr_servidao_2026_virasaia.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_jacobina.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_novaprata.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_paiol_original.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_virasaia_original.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_plano_diretor_2025.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'Descrição', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_V1_Fz_Lavandeira_II_16062026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Brejo_Alegre_III_16062026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_BrejoAlegreII_16062026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_BrejoAlegreI_16062026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Nova_Barra_10062026.set('fieldImages', {'Id': '', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Limeira_10062026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_SantaHelena_29052026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Lavandeira_29052026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Amaralina_19052026.set('fieldImages', {'ld': '', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Lote15_190526.set('fieldImages', {'Id': '', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Sao_Jose_190526.set('fieldImages', {'Id': '', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V2_Fz_SantaLuzia_19052026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_SantaLuzia_07052026.set('fieldImages', {'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V3_Fz_NovaPrata_10052026.set('fieldImages', {'ID': 'TextEdit', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V2_Fz_NovaPrata_07052026.set('fieldImages', {'ID': 'TextEdit', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_NovaPrata_24042026.set('fieldImages', {'ID': 'TextEdit', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Locais_visitados_Pliade_25052026.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Imveis_Estrada_Opo3_Nova_Prata.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'nom_imovel': 'TextEdit', 'numero_car': 'TextEdit', 'carfederal': 'TextEdit', 'municipio': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_RevisoADANovaPrata_27042026.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EstradasNovaPrata.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Estradademinrio.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Desvio2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Desvio1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ComunidadeQuilombolaLajeadokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'cd_quilomb': '', 'cd_sr': '', 'nr_process': '', 'nm_comunid': '', 'nm_municip': '', 'cd_uf': '', 'dt_publica': '', 'dt_public1': '', 'nr_familia': '', 'dt_titulac': '', 'nr_area_ha': '', 'nr_perimet': '', 'cd_sipra': '', 'ob_descric': '', 'st_titulad': '', 'dt_decreto': '', 'tp_levanta': '', 'nr_escalao': '', 'area_calc_': '', 'perimetro_': '', 'esfera': '', 'fase': '', 'responsave': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ADAapsReunio27042026kmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_09Ps2reuniokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_08Ps2reuniokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_07Ps2reuniokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_06Reuniokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_05Reuniokmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_04kmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_03kmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_02kmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_01kmz.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Polgono.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AreiaSequeiro.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Matheus_Lopes_Oeste_070526.set('fieldImages', {'Id': 'Range', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Floresta_070526.set('fieldImages', {'Id': 'Range', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Matheus_Lopes_240426.set('fieldImages', {'Id': 'Range', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaAmaralina.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaBrejoAlegreI.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaBrejoAlegreII.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaBrejoAlegreIII.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaFloresta.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaLavandeiraII.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaLavandeira.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaLote15.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaMatheusLopesGeral.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaMatheusLopesOeste.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaNovaPrata.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaSantaHelena.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaSantaLuziaRioGrande.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FazendaSoJos.set('fieldImages', {'Nome da Propriedade': '', 'Proprietário(s)': '', 'Telefone': '', 'N° Certidão': '', 'Observações': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Limites_Municipais.set('fieldImages', {'COD_IBGE': 'Range', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Limite_estimado_Comunidade_So_Joaquim.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descriptio': 'TextEdit', 'altitudeMo': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_virasaia.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_jacobina.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_novaprata.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_paiol_original.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_virasaia_original.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_plano_diretor_2025.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fz_Lavandeira_II_16062026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_Brejo_Alegre_III_16062026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_BrejoAlegreII_16062026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_BrejoAlegreI_16062026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_Nova_Barra_10062026.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_Limeira_10062026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_SantaHelena_29052026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_Lavandeira_29052026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_Amaralina_19052026.set('fieldLabels', {'ld': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_Lote15_190526.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_Sao_Jose_190526.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_V2_Fz_SantaLuzia_19052026.set('fieldLabels', {'NOME': 'no label', });
lyr_V1_Fz_SantaLuzia_07052026.set('fieldLabels', {'NOME': 'no label', });
lyr_V3_Fz_NovaPrata_10052026.set('fieldLabels', {'ID': 'no label', 'NOME': 'no label', });
lyr_V2_Fz_NovaPrata_07052026.set('fieldLabels', {'ID': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_NovaPrata_24042026.set('fieldLabels', {'ID': 'no label', 'NOME': 'no label', });
lyr_Locais_visitados_Pliade_25052026.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Imveis_Estrada_Opo3_Nova_Prata.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'nom_imovel': 'no label', 'numero_car': 'no label', 'carfederal': 'no label', 'municipio': 'no label', });
lyr_RevisoADANovaPrata_27042026.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_EstradasNovaPrata.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Estradademinrio.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Desvio2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Desvio1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ComunidadeQuilombolaLajeadokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cd_quilomb': 'no label', 'cd_sr': 'no label', 'nr_process': 'no label', 'nm_comunid': 'no label', 'nm_municip': 'no label', 'cd_uf': 'no label', 'dt_publica': 'no label', 'dt_public1': 'no label', 'nr_familia': 'no label', 'dt_titulac': 'no label', 'nr_area_ha': 'no label', 'nr_perimet': 'no label', 'cd_sipra': 'no label', 'ob_descric': 'no label', 'st_titulad': 'no label', 'dt_decreto': 'no label', 'tp_levanta': 'no label', 'nr_escalao': 'no label', 'area_calc_': 'no label', 'perimetro_': 'no label', 'esfera': 'no label', 'fase': 'no label', 'responsave': 'no label', });
lyr_ADAapsReunio27042026kmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_09Ps2reuniokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_08Ps2reuniokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_07Ps2reuniokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_06Reuniokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_05Reuniokmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_04kmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_03kmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_02kmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_01kmz.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Polgono.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AreiaSequeiro.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_V1_Fz_Matheus_Lopes_Oeste_070526.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_Floresta_070526.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_V1_Fz_Matheus_Lopes_240426.set('fieldLabels', {'Id': 'no label', 'NOME': 'no label', });
lyr_FazendaAmaralina.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaBrejoAlegreI.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaBrejoAlegreII.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaBrejoAlegreIII.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaFloresta.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaLavandeiraII.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaLavandeira.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaLote15.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaMatheusLopesGeral.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaMatheusLopesOeste.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaNovaPrata.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaSantaHelena.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaSantaLuziaRioGrande.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_FazendaSoJos.set('fieldLabels', {'Nome da Propriedade': 'no label', 'Proprietário(s)': 'no label', 'Telefone': 'no label', 'N° Certidão': 'no label', 'Observações': 'no label', });
lyr_Limites_Municipais.set('fieldLabels', {'COD_IBGE': 'no label', 'NOME': 'no label', });
lyr_Limite_estimado_Comunidade_So_Joaquim.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'NOME': 'no label', });
lyr_Limite_estimado_Comunidade_BaiaoCapao_da_Onca.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'snippet': 'no label', });
lyr_servidao_2026_virasaia.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_jacobina.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_novaprata.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_paiol_original.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_virasaia_original.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_plano_diretor_2025.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
