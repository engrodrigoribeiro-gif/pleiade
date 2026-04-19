var wms_layers = [];


var format_14_APP_SEM_VEGETACAO_CALCULADO = new ol.format.GeoJSON();
var features_14_APP_SEM_VEGETACAO_CALCULADO = format_14_APP_SEM_VEGETACAO_CALCULADO.readFeatures(json_14_APP_SEM_VEGETACAO_CALCULADO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14_APP_SEM_VEGETACAO_CALCULADO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/14_APP_SEM_VEGETACAO_CALCULADO.png"/><b>14_APP_SEM_VEGETACAO_CALCULADO</b>'
    });
var lyr_14_APP_SEM_VEGETACAO_CALCULADO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_14_APP_SEM_VEGETACAO_CALCULADO, 
    sourceType: 'json',
    permalink: "14_APP_SEM_VEGETACAO_CALCULADO",
    popuplayertitle: '14_APP_SEM_VEGETACAO_CALCULADO',
    creationdate: '2026-04-19 18:01:13',
    interactive: true,
    style: style_14_APP_SEM_VEGETACAO_CALCULADO,
    title: '<img src="styles/legend/14_APP_SEM_VEGETACAO_CALCULADO.png"/>14_APP_SEM_VEGETACAO_CALCULADO'
    });
var featureCounter_14_APP_SEM_VEGETACAO_CALCULADO = 1;
jsonSource_14_APP_SEM_VEGETACAO_CALCULADO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_14_APP_SEM_VEGETACAO_CALCULADO++);
    feature.set("layerObject", lyr_14_APP_SEM_VEGETACAO_CALCULADO);
});        
jsonSource_14_APP_SEM_VEGETACAO_CALCULADO.addFeatures(features_14_APP_SEM_VEGETACAO_CALCULADO);
//console.log("Caricate", features_14_APP_SEM_VEGETACAO_CALCULADO.length, "feature per 14_APP_SEM_VEGETACAO_CALCULADO.");


var format_16_ARL_TOTAL_CALCULADO = new ol.format.GeoJSON();
var features_16_ARL_TOTAL_CALCULADO = format_16_ARL_TOTAL_CALCULADO.readFeatures(json_16_ARL_TOTAL_CALCULADO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16_ARL_TOTAL_CALCULADO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/16_ARL_TOTAL_CALCULADO.png"/><b>16_ARL_TOTAL_CALCULADO</b>'
    });
var lyr_16_ARL_TOTAL_CALCULADO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_16_ARL_TOTAL_CALCULADO, 
    sourceType: 'json',
    permalink: "16_ARL_TOTAL_CALCULADO",
    popuplayertitle: '16_ARL_TOTAL_CALCULADO',
    creationdate: '2026-04-19 18:01:13',
    interactive: true,
    style: style_16_ARL_TOTAL_CALCULADO,
    title: '<img src="styles/legend/16_ARL_TOTAL_CALCULADO.png"/>16_ARL_TOTAL_CALCULADO'
    });
var featureCounter_16_ARL_TOTAL_CALCULADO = 1;
jsonSource_16_ARL_TOTAL_CALCULADO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_16_ARL_TOTAL_CALCULADO++);
    feature.set("layerObject", lyr_16_ARL_TOTAL_CALCULADO);
});        
jsonSource_16_ARL_TOTAL_CALCULADO.addFeatures(features_16_ARL_TOTAL_CALCULADO);
//console.log("Caricate", features_16_ARL_TOTAL_CALCULADO.length, "feature per 16_ARL_TOTAL_CALCULADO.");


var format_17_ARL_COM_VEGETACAO_CALCULADO = new ol.format.GeoJSON();
var features_17_ARL_COM_VEGETACAO_CALCULADO = format_17_ARL_COM_VEGETACAO_CALCULADO.readFeatures(json_17_ARL_COM_VEGETACAO_CALCULADO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_ARL_COM_VEGETACAO_CALCULADO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/17_ARL_COM_VEGETACAO_CALCULADO.png"/><b>17_ARL_COM_VEGETACAO_CALCULADO</b>'
    });
var lyr_17_ARL_COM_VEGETACAO_CALCULADO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_17_ARL_COM_VEGETACAO_CALCULADO, 
    sourceType: 'json',
    permalink: "17_ARL_COM_VEGETACAO_CALCULADO",
    popuplayertitle: '17_ARL_COM_VEGETACAO_CALCULADO',
    creationdate: '2026-04-19 18:01:13',
    interactive: true,
    style: style_17_ARL_COM_VEGETACAO_CALCULADO,
    title: '<img src="styles/legend/17_ARL_COM_VEGETACAO_CALCULADO.png"/>17_ARL_COM_VEGETACAO_CALCULADO'
    });
var featureCounter_17_ARL_COM_VEGETACAO_CALCULADO = 1;
jsonSource_17_ARL_COM_VEGETACAO_CALCULADO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_17_ARL_COM_VEGETACAO_CALCULADO++);
    feature.set("layerObject", lyr_17_ARL_COM_VEGETACAO_CALCULADO);
});        
jsonSource_17_ARL_COM_VEGETACAO_CALCULADO.addFeatures(features_17_ARL_COM_VEGETACAO_CALCULADO);
//console.log("Caricate", features_17_ARL_COM_VEGETACAO_CALCULADO.length, "feature per 17_ARL_COM_VEGETACAO_CALCULADO.");


var format_AURA_Propriedades_Paiol_Rev01 = new ol.format.GeoJSON();
var features_AURA_Propriedades_Paiol_Rev01 = format_AURA_Propriedades_Paiol_Rev01.readFeatures(json_AURA_Propriedades_Paiol_Rev01, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AURA_Propriedades_Paiol_Rev01 = new ol.source.Vector({
    attributions: '<a class="legend"><b>AURA_Propriedades_Paiol_Rev01</b><br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_0.png"/>Almas Paiol<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_1.png"/>Diversos<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_2.png"/>Fazenda Água Doce<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_3.png"/>Fazenda Água Doce - Lote 04<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_4.png"/>Fazenda Água Doce , lote 03<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_5.png"/>FAZENDA BURITI<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_6.png"/>Fazenda Figueira<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_7.png"/>Fazenda Jacobina<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_8.png"/>Fazenda Kanauan/Fazenda Laço de Ouro<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_9.png"/>Não Identificado<br />\
        <img src="styles/legend/AURA_Propriedades_Paiol_Rev01_10.png"/><br /></a>'
        });
var lyr_AURA_Propriedades_Paiol_Rev01 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_AURA_Propriedades_Paiol_Rev01, 
    sourceType: 'json',
    permalink: "AURA_Propriedades_Paiol_Rev01",
    popuplayertitle: 'AURA_Propriedades_Paiol_Rev01',
    creationdate: '2026-04-19 18:01:13',
    interactive: true,
    style: style_AURA_Propriedades_Paiol_Rev01,
    title: '<div id="layertitle">AURA_Propriedades_Paiol_Rev01<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Almas Paiol" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_0.png"/>Almas Paiol<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Diversos" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_1.png"/>Diversos<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Água Doce" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_2.png"/>Fazenda Água Doce<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Água Doce - Lote 04" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_3.png"/>Fazenda Água Doce - Lote 04<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Água Doce , lote 03" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_4.png"/>Fazenda Água Doce , lote 03<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FAZENDA BURITI" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_5.png"/>FAZENDA BURITI<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Figueira" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_6.png"/>Fazenda Figueira<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Jacobina" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_7.png"/>Fazenda Jacobina<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fazenda Kanauan/Fazenda Laço de Ouro" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_8.png"/>Fazenda Kanauan/Fazenda Laço de Ouro<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Não Identificado" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_9.png"/>Não Identificado<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="ogis-other" checked><img src="styles/legend/AURA_Propriedades_Paiol_Rev01_10.png"/>(all other)<br /></a>'
        });
var featureCounter_AURA_Propriedades_Paiol_Rev01 = 1;
jsonSource_AURA_Propriedades_Paiol_Rev01.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AURA_Propriedades_Paiol_Rev01++);
    feature.set("layerObject", lyr_AURA_Propriedades_Paiol_Rev01);
});        
jsonSource_AURA_Propriedades_Paiol_Rev01.addFeatures(features_AURA_Propriedades_Paiol_Rev01);
//console.log("Caricate", features_AURA_Propriedades_Paiol_Rev01.length, "feature per AURA_Propriedades_Paiol_Rev01.");



window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
var group_group3 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'group3'});
var group_group2 = new ol.layer.Group({
                                layers: [lyr_16_ARL_TOTAL_CALCULADO,group_group3,],
                                openInLayerSwitcher: true,
                                title: 'group2'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_14_APP_SEM_VEGETACAO_CALCULADO,group_group2,],
                                openInLayerSwitcher: true,
                                title: 'group1'});

lyr_14_APP_SEM_VEGETACAO_CALCULADO.setVisible(true);lyr_16_ARL_TOTAL_CALCULADO.setVisible(true);lyr_17_ARL_COM_VEGETACAO_CALCULADO.setVisible(true);lyr_AURA_Propriedades_Paiol_Rev01.setVisible(true);
var layersList = [group_group1,lyr_17_ARL_COM_VEGETACAO_CALCULADO,lyr_AURA_Propriedades_Paiol_Rev01];
lyr_14_APP_SEM_VEGETACAO_CALCULADO.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_16_ARL_TOTAL_CALCULADO.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_17_ARL_COM_VEGETACAO_CALCULADO.set('fieldAliases', {'COD_IMOVEL': 'COD_IMOVEL', 'ID': 'ID', });
lyr_AURA_Propriedades_Paiol_Rev01.set('fieldAliases', {'area': 'area', 'ID': 'ID', 'SUPERFICIA': 'SUPERFICIA', 'CPF_CNPJ': 'CPF_CNPJ', 'NOME_PROP': 'NOME_PROP', 'MATRICULA': 'MATRICULA', 'OBSERVACAO': 'OBSERVACAO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_14_APP_SEM_VEGETACAO_CALCULADO.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_16_ARL_TOTAL_CALCULADO.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_17_ARL_COM_VEGETACAO_CALCULADO.set('fieldImages', {'COD_IMOVEL': '', 'ID': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AURA_Propriedades_Paiol_Rev01.set('fieldImages', {'area': 'TextEdit', 'ID': 'TextEdit', 'SUPERFICIA': 'TextEdit', 'CPF_CNPJ': 'TextEdit', 'NOME_PROP': 'TextEdit', 'MATRICULA': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_14_APP_SEM_VEGETACAO_CALCULADO.set('fieldLabels', {'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_16_ARL_TOTAL_CALCULADO.set('fieldLabels', {'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_17_ARL_COM_VEGETACAO_CALCULADO.set('fieldLabels', {'COD_IMOVEL': 'no label', 'ID': 'no label', });
lyr_AURA_Propriedades_Paiol_Rev01.set('fieldLabels', {'area': 'no label', 'ID': 'no label', 'SUPERFICIA': 'no label', 'CPF_CNPJ': 'no label', 'NOME_PROP': 'no label', 'MATRICULA': 'no label', 'OBSERVACAO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
