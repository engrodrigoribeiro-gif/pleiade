var wms_layers = [];

var lyr_Imagem_Google = new ol.layer.Tile({
            'title': 'Imagem_Google',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
        

var format_Plano_Diretor_2025_Empreendimento = new ol.format.GeoJSON();
var features_Plano_Diretor_2025_Empreendimento = format_Plano_Diretor_2025_Empreendimento.readFeatures(json_Plano_Diretor_2025_Empreendimento, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plano_Diretor_2025_Empreendimento = new ol.source.Vector({
    attributions: '<a class="legend"><b>Plano_Diretor_2025_Empreendimento</b><br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_0.png"/>1<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_1.png"/>10<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_2.png"/>11<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_3.png"/>12<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_4.png"/>13<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_5.png"/>14<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_6.png"/>15<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_7.png"/>16<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_8.png"/>17<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_9.png"/>18<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_10.png"/>19<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_11.png"/>2<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_12.png"/>20<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_13.png"/>21<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_14.png"/>22<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_15.png"/>23<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_16.png"/>24<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_17.png"/>25<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_18.png"/>26<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_19.png"/>27<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_20.png"/>28<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_21.png"/>29<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_22.png"/>3<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_23.png"/>30<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_24.png"/>4<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_25.png"/>5<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_26.png"/>6<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_27.png"/>7<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_28.png"/>8<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_29.png"/>9<br />\
        <img src="styles/legend/Plano_Diretor_2025_Empreendimento_30.png"/><br /></a>'
        });
var lyr_Plano_Diretor_2025_Empreendimento = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Plano_Diretor_2025_Empreendimento, 
    sourceType: 'json',
    permalink: "Plano_Diretor_2025_Empreendimento",
    popuplayertitle: 'Plano_Diretor_2025_Empreendimento',
    creationdate: '2026-04-20 00:31:03',
    interactive: true,
    style: style_Plano_Diretor_2025_Empreendimento,
    title: '<div id="layertitle">Plano_Diretor_2025_Empreendimento<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="1" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="10" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_1.png"/>10<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="11" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_2.png"/>11<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="12" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_3.png"/>12<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="13" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_4.png"/>13<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="14" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_5.png"/>14<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="15" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_6.png"/>15<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="16" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_7.png"/>16<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="17" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_8.png"/>17<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="18" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_9.png"/>18<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="19" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_10.png"/>19<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="2" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_11.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="20" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_12.png"/>20<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="21" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_13.png"/>21<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="22" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_14.png"/>22<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="23" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_15.png"/>23<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="24" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_16.png"/>24<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="25" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_17.png"/>25<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="26" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_18.png"/>26<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="27" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_19.png"/>27<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="28" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_20.png"/>28<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="29" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_21.png"/>29<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="3" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_22.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="30" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_23.png"/>30<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="4" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_24.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="5" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_25.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="6" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_26.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="7" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_27.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="8" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_28.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="9" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_29.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="ogis-other" checked><img src="styles/legend/Plano_Diretor_2025_Empreendimento_30.png"/>(all other)<br /></a>'
        });
var featureCounter_Plano_Diretor_2025_Empreendimento = 1;
jsonSource_Plano_Diretor_2025_Empreendimento.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Plano_Diretor_2025_Empreendimento++);
    feature.set("layerObject", lyr_Plano_Diretor_2025_Empreendimento);
});        
jsonSource_Plano_Diretor_2025_Empreendimento.addFeatures(features_Plano_Diretor_2025_Empreendimento);
//console.log("Caricate", features_Plano_Diretor_2025_Empreendimento.length, "feature per Plano_Diretor_2025_Empreendimento.");



window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
var group_011_BASE_OFICIAL_AURA = new ol.layer.Group({
                                layers: [lyr_Plano_Diretor_2025_Empreendimento,],
                                openInLayerSwitcher: true,
                                title: '01-1_BASE_OFICIAL_AURA'});
var group_012_IMAGENS_SENSORIAMENTO_REMOTO = new ol.layer.Group({
                                layers: [lyr_Imagem_Google,],
                                openInLayerSwitcher: true,
                                title: '01-2_IMAGENS_SENSORIAMENTO_REMOTO'});
var group_01_BASES_DADOS_GERAIS = new ol.layer.Group({
                                layers: [group_012_IMAGENS_SENSORIAMENTO_REMOTO,group_011_BASE_OFICIAL_AURA,],
                                openInLayerSwitcher: true,
                                title: '01_BASES_DADOS_GERAIS'});

lyr_Imagem_Google.setVisible(true);lyr_Plano_Diretor_2025_Empreendimento.setVisible(true);
var layersList = [group_01_BASES_DADOS_GERAIS];
lyr_Plano_Diretor_2025_Empreendimento.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'Descrição', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Plano_Diretor_2025_Empreendimento.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Plano_Diretor_2025_Empreendimento.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
