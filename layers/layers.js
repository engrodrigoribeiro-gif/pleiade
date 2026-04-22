var wms_layers = [];

var lyr_Imagem_Google = new ol.layer.Tile({
            'title': 'Imagem_Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
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
            url: "https://api.planet.com/basemaps/v1/mosaics/wmts?api_key=PLAK0b8ab29d7c5343aeb92b8eb3f0603912",
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
            url: "https://api.planet.com/basemaps/v1/mosaics/wmts?api_key=PLAK0b8ab29d7c5343aeb92b8eb3f0603912",
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
            url: "https://api.planet.com/basemaps/v1/mosaics/wmts?api_key=PLAK0b8ab29d7c5343aeb92b8eb3f0603912",
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
            url: "https://api.planet.com/basemaps/v1/mosaics/wmts?api_key=PLAK0b8ab29d7c5343aeb92b8eb3f0603912",
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

var lyr_v1_fazenda_grota_ouro = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> v1_fazenda_grota_ouro',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "v1_fazenda_grota_ouro",
    popuplayertitle: 'v1_fazenda_grota_ouro',
    creationdate: '2026-04-22 10:06:12',
    interactive: true,
});
function load_v1_fazenda_grota_ouro_data() {
    var format_v1_fazenda_grota_ouro = new ol.format.GeoJSON();
    var features_v1_fazenda_grota_ouro = format_v1_fazenda_grota_ouro.readFeatures(json_v1_fazenda_grota_ouro, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_v1_fazenda_grota_ouro = new ol.source.Vector({
    attributions: '<a class="legend"><b>v1_fazenda_grota_ouro</b><br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_0.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_1.png"/>Remanescente de Vegetação Nativa<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_2.png"/>APP a preservar<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_3.png"/>APP a recuperar<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_4.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_5.png"/>Hidrografia do imóvel<br />\
        <img src="styles/legend/v1_fazenda_grota_ouro_6.png"/>Reserva Legal Total<br /></a>'
        });
    lyr_v1_fazenda_grota_ouro.setSource(jsonSource_v1_fazenda_grota_ouro);
    lyr_v1_fazenda_grota_ouro.set(
    "title", '<div id="layertitle">v1_fazenda_grota_ouro<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/v1_fazenda_grota_ouro_0.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Remanescente de Vegetação Nativa" checked><img src="styles/legend/v1_fazenda_grota_ouro_1.png"/>Remanescente de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="APP a preservar" checked><img src="styles/legend/v1_fazenda_grota_ouro_2.png"/>APP a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="APP a recuperar" checked><img src="styles/legend/v1_fazenda_grota_ouro_3.png"/>APP a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/v1_fazenda_grota_ouro_4.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do imóvel" checked><img src="styles/legend/v1_fazenda_grota_ouro_5.png"/>Hidrografia do imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal Total" checked><img src="styles/legend/v1_fazenda_grota_ouro_6.png"/>Reserva Legal Total<br /></a>'
        );
    var featureCounter_v1_fazenda_grota_ouro = 1;
    jsonSource_v1_fazenda_grota_ouro.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_v1_fazenda_grota_ouro++);
        feature.set("layerObject", lyr_v1_fazenda_grota_ouro);
    });        
    jsonSource_v1_fazenda_grota_ouro.addFeatures(features_v1_fazenda_grota_ouro);
}
applySLDstyle(lyr_v1_fazenda_grota_ouro, style_v1_fazenda_grota_ouro, 'v1_fazenda_grota_ouro');


var lyr_servidao_2026_virasaia = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> servidao_2026_virasaia',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "servidao_2026_virasaia",
    popuplayertitle: 'servidao_2026_virasaia',
    creationdate: '2026-04-22 10:06:12',
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
    creationdate: '2026-04-22 10:06:12',
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
    creationdate: '2026-04-22 10:06:12',
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
    creationdate: '2026-04-22 10:06:12',
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
    creationdate: '2026-04-22 10:06:12',
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


var lyr_plano_diretor_2025_empreendimento = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> plano_diretor_2025_empreendimento',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "plano_diretor_2025_empreendimento",
    popuplayertitle: 'plano_diretor_2025_empreendimento',
    creationdate: '2026-04-22 10:06:12',
    interactive: true,
    style: style_plano_diretor_2025_empreendimento,
});
function load_plano_diretor_2025_empreendimento_data() {
    var format_plano_diretor_2025_empreendimento = new ol.format.GeoJSON();
    var features_plano_diretor_2025_empreendimento = format_plano_diretor_2025_empreendimento.readFeatures(json_plano_diretor_2025_empreendimento, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_plano_diretor_2025_empreendimento = new ol.source.Vector({
    attributions: '<a class="legend"><b>plano_diretor_2025_empreendimento</b><br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_0.png"/>1<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_1.png"/>10<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_2.png"/>11<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_3.png"/>12<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_4.png"/>13<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_5.png"/>14<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_6.png"/>15<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_7.png"/>16<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_8.png"/>17<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_9.png"/>18<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_10.png"/>19<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_11.png"/>2<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_12.png"/>20<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_13.png"/>21<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_14.png"/>22<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_15.png"/>23<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_16.png"/>24<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_17.png"/>25<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_18.png"/>26<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_19.png"/>27<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_20.png"/>28<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_21.png"/>29<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_22.png"/>3<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_23.png"/>30<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_24.png"/>4<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_25.png"/>5<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_26.png"/>6<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_27.png"/>7<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_28.png"/>8<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_29.png"/>9<br />\
        <img src="styles/legend/plano_diretor_2025_empreendimento_30.png"/><br /></a>'
        });
    lyr_plano_diretor_2025_empreendimento.setSource(jsonSource_plano_diretor_2025_empreendimento);
    lyr_plano_diretor_2025_empreendimento.set(
    "title", '<div id="layertitle">plano_diretor_2025_empreendimento<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="1" checked><img src="styles/legend/plano_diretor_2025_empreendimento_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="10" checked><img src="styles/legend/plano_diretor_2025_empreendimento_1.png"/>10<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="11" checked><img src="styles/legend/plano_diretor_2025_empreendimento_2.png"/>11<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="12" checked><img src="styles/legend/plano_diretor_2025_empreendimento_3.png"/>12<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="13" checked><img src="styles/legend/plano_diretor_2025_empreendimento_4.png"/>13<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="14" checked><img src="styles/legend/plano_diretor_2025_empreendimento_5.png"/>14<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="15" checked><img src="styles/legend/plano_diretor_2025_empreendimento_6.png"/>15<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="16" checked><img src="styles/legend/plano_diretor_2025_empreendimento_7.png"/>16<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="17" checked><img src="styles/legend/plano_diretor_2025_empreendimento_8.png"/>17<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="18" checked><img src="styles/legend/plano_diretor_2025_empreendimento_9.png"/>18<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="19" checked><img src="styles/legend/plano_diretor_2025_empreendimento_10.png"/>19<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="2" checked><img src="styles/legend/plano_diretor_2025_empreendimento_11.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="20" checked><img src="styles/legend/plano_diretor_2025_empreendimento_12.png"/>20<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="21" checked><img src="styles/legend/plano_diretor_2025_empreendimento_13.png"/>21<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="22" checked><img src="styles/legend/plano_diretor_2025_empreendimento_14.png"/>22<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="23" checked><img src="styles/legend/plano_diretor_2025_empreendimento_15.png"/>23<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="24" checked><img src="styles/legend/plano_diretor_2025_empreendimento_16.png"/>24<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="25" checked><img src="styles/legend/plano_diretor_2025_empreendimento_17.png"/>25<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="26" checked><img src="styles/legend/plano_diretor_2025_empreendimento_18.png"/>26<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="27" checked><img src="styles/legend/plano_diretor_2025_empreendimento_19.png"/>27<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="28" checked><img src="styles/legend/plano_diretor_2025_empreendimento_20.png"/>28<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="29" checked><img src="styles/legend/plano_diretor_2025_empreendimento_21.png"/>29<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="3" checked><img src="styles/legend/plano_diretor_2025_empreendimento_22.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="30" checked><img src="styles/legend/plano_diretor_2025_empreendimento_23.png"/>30<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="4" checked><img src="styles/legend/plano_diretor_2025_empreendimento_24.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="5" checked><img src="styles/legend/plano_diretor_2025_empreendimento_25.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="6" checked><img src="styles/legend/plano_diretor_2025_empreendimento_26.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="7" checked><img src="styles/legend/plano_diretor_2025_empreendimento_27.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="8" checked><img src="styles/legend/plano_diretor_2025_empreendimento_28.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="9" checked><img src="styles/legend/plano_diretor_2025_empreendimento_29.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="ogis-other" checked><img src="styles/legend/plano_diretor_2025_empreendimento_30.png"/>(all other)<br /></a>'
        );
    var featureCounter_plano_diretor_2025_empreendimento = 1;
    jsonSource_plano_diretor_2025_empreendimento.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_plano_diretor_2025_empreendimento++);
        feature.set("layerObject", lyr_plano_diretor_2025_empreendimento);
    });        
    jsonSource_plano_diretor_2025_empreendimento.addFeatures(features_plano_diretor_2025_empreendimento);
}

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_v1_fazenda_grota_ouro, source: 'v1_fazenda_grota_ouro'},{layer: lyr_servidao_2026_virasaia, source: 'servidao_2026_virasaia'},{layer: lyr_servidao_2026_jacobina, source: 'servidao_2026_jacobina'},{layer: lyr_servidao_2026_novaprata, source: 'servidao_2026_novaprata'},{layer: lyr_servidao_paiol_original, source: 'servidao_paiol_original'},{layer: lyr_servidao_virasaia_original, source: 'servidao_virasaia_original'},{layer: lyr_plano_diretor_2025_empreendimento, source: 'plano_diretor_2025_empreendimento'}
    ];
    var layersHiddenOnStart = [
        
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
                                layers: [lyr_plano_diretor_2025_empreendimento,],
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
var group_012_Bases_Complementares = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: false,
                                title: '01-2_Bases_Complementares'});
var group_01_BASES_DADOS_GERAIS = new ol.layer.Group({
                                layers: [group_012_Bases_Complementares,group_011_Base_Oficial_Aura,],
                                openInLayerSwitcher: true,
                                title: '01_BASES_DADOS_GERAIS'});
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS02_Melquiades_Nova_Prata = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-02_Melquiades_Nova_Prata'});
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS03_Nova_Prata_Operacional = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-03_Nova_Prata_Operacional'});
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
                                openInLayerSwitcher: false,
                                title: 'a_dados_específicos'});
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [lyr_v1_fazenda_grota_ouro,],
                                openInLayerSwitcher: false,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_NivardoFazendaGrotadoOuro = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'Nivardo - Fazenda Grota do Ouro'});
var group_OS04_Virasaia_Cava_Sul = new ol.layer.Group({
                                layers: [group_NivardoFazendaGrotadoOuro,],
                                openInLayerSwitcher: true,
                                title: 'OS-04_Virasaia_Cava_Sul'});
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS05_Barragens_Alteamento = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-05_Barragens_Alteamento'});
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS06_Virasaia_Cava_Norte = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-06_Virasaia_Cava_Norte'});
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
var group_b1_limite_imovel = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.1_limite_imovel'});
var group_b2_car_imovel_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.2_car_imovel_vs_intervencoes'});
var group_b3_analise_car = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: true,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS07_Areas_Quilombolas = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: true,
                                title: 'OS-07_Areas_Quilombolas'});
var group_02_ORDENS_SERVIOS = new ol.layer.Group({
                                layers: [group_OS07_Areas_Quilombolas,group_OS06_Virasaia_Cava_Norte,group_OS05_Barragens_Alteamento,group_OS04_Virasaia_Cava_Sul,group_OS03_Nova_Prata_Operacional,group_OS02_Melquiades_Nova_Prata,group_OS01_Alarico_Virasaia,],
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
                                layers: [lyr_Imagem_Google,lyr_ImagemdeSatlitePleiades2015,lyr_GlobalMonthly202603Mosaic,lyr_GlobalMonthly202507Mosaic,lyr_GlobalMonthly202407Mosaic,lyr_GlobalMonthly202307Mosaic,],
                                openInLayerSwitcher: true,
                                title: '99_IMAGENS_SENSOR_REMOTO'});

lyr_Imagem_Google.setVisible(true);lyr_ImagemdeSatlitePleiades2015.setVisible(false);lyr_GlobalMonthly202603Mosaic.setVisible(false);lyr_GlobalMonthly202507Mosaic.setVisible(false);lyr_GlobalMonthly202407Mosaic.setVisible(false);lyr_GlobalMonthly202307Mosaic.setVisible(false);lyr_v1_fazenda_grota_ouro.setVisible(true);lyr_servidao_2026_virasaia.setVisible(true);lyr_servidao_2026_jacobina.setVisible(true);lyr_servidao_2026_novaprata.setVisible(true);lyr_servidao_paiol_original.setVisible(true);lyr_servidao_virasaia_original.setVisible(true);lyr_plano_diretor_2025_empreendimento.setVisible(true);
var layersList = [group_99_IMAGENS_SENSOR_REMOTO,group_98_HISTORICO,group_02_ORDENS_SERVIOS,group_01_BASES_DADOS_GERAIS];
lyr_v1_fazenda_grota_ouro.set('fieldAliases', {'fid': 'fid', 'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', 'NOME': 'NOME', 'Link': 'Link', });
lyr_servidao_2026_virasaia.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_jacobina.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_novaprata.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_paiol_original.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_virasaia_original.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_plano_diretor_2025_empreendimento.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'Descrição', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_v1_fazenda_grota_ouro.set('fieldImages', {'fid': 'TextEdit', 'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', 'NOME': 'TextEdit', 'Link': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_virasaia.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_jacobina.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_novaprata.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_paiol_original.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_virasaia_original.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_plano_diretor_2025_empreendimento.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_v1_fazenda_grota_ouro.set('fieldLabels', {'fid': 'no label', 'COD_IMOVEL': 'no label', 'ID': 'no label', 'NOME': 'no label', 'Link': 'no label', });
lyr_servidao_2026_virasaia.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_jacobina.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_novaprata.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_paiol_original.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_virasaia_original.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_plano_diretor_2025_empreendimento.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
