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
        

var format_servidao_2026_virasaia = new ol.format.GeoJSON();
var features_servidao_2026_virasaia = format_servidao_2026_virasaia.readFeatures(json_servidao_2026_virasaia, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servidao_2026_virasaia = new ol.source.Vector({
    attributions: "<a class='legend'><b>servidao_2026_virasaia</b></a>"
    });
var lyr_servidao_2026_virasaia = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_servidao_2026_virasaia, 
    sourceType: 'json',
    permalink: "servidao_2026_virasaia",
    popuplayertitle: 'servidao_2026_virasaia',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    style: style_servidao_2026_virasaia,
    title: 'servidao_2026_virasaia'
    });
var featureCounter_servidao_2026_virasaia = 1;
jsonSource_servidao_2026_virasaia.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_servidao_2026_virasaia++);
    feature.set("layerObject", lyr_servidao_2026_virasaia);
});        
jsonSource_servidao_2026_virasaia.addFeatures(features_servidao_2026_virasaia);
//console.log("Caricate", features_servidao_2026_virasaia.length, "feature per servidao_2026_virasaia.");


var format_servidao_2026_jacobina = new ol.format.GeoJSON();
var features_servidao_2026_jacobina = format_servidao_2026_jacobina.readFeatures(json_servidao_2026_jacobina, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servidao_2026_jacobina = new ol.source.Vector({
    attributions: "<a class='legend'><b>servidao_2026_jacobina</b></a>"
    });
var lyr_servidao_2026_jacobina = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_servidao_2026_jacobina, 
    sourceType: 'json',
    permalink: "servidao_2026_jacobina",
    popuplayertitle: 'servidao_2026_jacobina',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    style: style_servidao_2026_jacobina,
    title: 'servidao_2026_jacobina'
    });
var featureCounter_servidao_2026_jacobina = 1;
jsonSource_servidao_2026_jacobina.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_servidao_2026_jacobina++);
    feature.set("layerObject", lyr_servidao_2026_jacobina);
});        
jsonSource_servidao_2026_jacobina.addFeatures(features_servidao_2026_jacobina);
//console.log("Caricate", features_servidao_2026_jacobina.length, "feature per servidao_2026_jacobina.");


var format_servidao_2026_novaprata = new ol.format.GeoJSON();
var features_servidao_2026_novaprata = format_servidao_2026_novaprata.readFeatures(json_servidao_2026_novaprata, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servidao_2026_novaprata = new ol.source.Vector({
    attributions: "<a class='legend'><b>servidao_2026_novaprata</b></a>"
    });
var lyr_servidao_2026_novaprata = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_servidao_2026_novaprata, 
    sourceType: 'json',
    permalink: "servidao_2026_novaprata",
    popuplayertitle: 'servidao_2026_novaprata',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    style: style_servidao_2026_novaprata,
    title: 'servidao_2026_novaprata'
    });
var featureCounter_servidao_2026_novaprata = 1;
jsonSource_servidao_2026_novaprata.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_servidao_2026_novaprata++);
    feature.set("layerObject", lyr_servidao_2026_novaprata);
});        
jsonSource_servidao_2026_novaprata.addFeatures(features_servidao_2026_novaprata);
//console.log("Caricate", features_servidao_2026_novaprata.length, "feature per servidao_2026_novaprata.");


var format_servidao_paiol_original = new ol.format.GeoJSON();
var features_servidao_paiol_original = format_servidao_paiol_original.readFeatures(json_servidao_paiol_original, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servidao_paiol_original = new ol.source.Vector({
    attributions: "<a class='legend'><b>servidao_paiol_original</b></a>"
    });
var lyr_servidao_paiol_original = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_servidao_paiol_original, 
    sourceType: 'json',
    permalink: "servidao_paiol_original",
    popuplayertitle: 'servidao_paiol_original',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    style: style_servidao_paiol_original,
    title: 'servidao_paiol_original'
    });
var featureCounter_servidao_paiol_original = 1;
jsonSource_servidao_paiol_original.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_servidao_paiol_original++);
    feature.set("layerObject", lyr_servidao_paiol_original);
});        
jsonSource_servidao_paiol_original.addFeatures(features_servidao_paiol_original);
//console.log("Caricate", features_servidao_paiol_original.length, "feature per servidao_paiol_original.");


var format_servidao_virasaia_original = new ol.format.GeoJSON();
var features_servidao_virasaia_original = format_servidao_virasaia_original.readFeatures(json_servidao_virasaia_original, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servidao_virasaia_original = new ol.source.Vector({
    attributions: "<a class='legend'><b>servidao_virasaia_original</b></a>"
    });
var lyr_servidao_virasaia_original = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_servidao_virasaia_original, 
    sourceType: 'json',
    permalink: "servidao_virasaia_original",
    popuplayertitle: 'servidao_virasaia_original',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    style: style_servidao_virasaia_original,
    title: 'servidao_virasaia_original'
    });
var featureCounter_servidao_virasaia_original = 1;
jsonSource_servidao_virasaia_original.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_servidao_virasaia_original++);
    feature.set("layerObject", lyr_servidao_virasaia_original);
});        
jsonSource_servidao_virasaia_original.addFeatures(features_servidao_virasaia_original);
//console.log("Caricate", features_servidao_virasaia_original.length, "feature per servidao_virasaia_original.");


var format_V1_Fazenda_Grota_Ouro = new ol.format.GeoJSON();
var features_V1_Fazenda_Grota_Ouro = format_V1_Fazenda_Grota_Ouro.readFeatures(json_V1_Fazenda_Grota_Ouro, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V1_Fazenda_Grota_Ouro = new ol.source.Vector({
    attributions: '<a class="legend"><b>V1_Fazenda_Grota_Ouro</b><br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_0.png"/>Área da Propriedade Rural<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_1.png"/>Área de Uso Alternativo<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_2.png"/>Remanescente de Vegetação Nativa<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_3.png"/>APP a preservar<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_4.png"/>APP a recuperar<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_5.png"/>Hidrografia do imóvel<br />\
        <img src="styles/legend/V1_Fazenda_Grota_Ouro_6.png"/>Reserva Legal Total<br /></a>'
        });
var lyr_V1_Fazenda_Grota_Ouro = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_V1_Fazenda_Grota_Ouro, 
    sourceType: 'json',
    permalink: "V1_Fazenda_Grota_Ouro",
    popuplayertitle: 'V1_Fazenda_Grota_Ouro',
    creationdate: '2026-04-21 16:11:32',
    interactive: true,
    title: '<div id="layertitle">V1_Fazenda_Grota_Ouro<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área da Propriedade Rural" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_0.png"/>Área da Propriedade Rural<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Área de Uso Alternativo" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_1.png"/>Área de Uso Alternativo<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Remanescente de Vegetação Nativa" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_2.png"/>Remanescente de Vegetação Nativa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="APP a preservar" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_3.png"/>APP a preservar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="APP a recuperar" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_4.png"/>APP a recuperar<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hidrografia do imóvel" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_5.png"/>Hidrografia do imóvel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Reserva Legal Total" checked><img src="styles/legend/V1_Fazenda_Grota_Ouro_6.png"/>Reserva Legal Total<br /></a>'
        });
var featureCounter_V1_Fazenda_Grota_Ouro = 1;
jsonSource_V1_Fazenda_Grota_Ouro.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_V1_Fazenda_Grota_Ouro++);
    feature.set("layerObject", lyr_V1_Fazenda_Grota_Ouro);
});        
jsonSource_V1_Fazenda_Grota_Ouro.addFeatures(features_V1_Fazenda_Grota_Ouro);
//console.log("Caricate", features_V1_Fazenda_Grota_Ouro.length, "feature per V1_Fazenda_Grota_Ouro.");
applySLDstyle(lyr_V1_Fazenda_Grota_Ouro, style_V1_Fazenda_Grota_Ouro, 'V1_Fazenda_Grota_Ouro');



window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
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
                                openInLayerSwitcher: false,
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
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.3_analise_car'});
var group_b4_analise_car_vs_intervencoes = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b.4_analise_car_vs_intervencoes'});
var group_b_trabalho_em_curso = new ol.layer.Group({
                                layers: [group_b4_analise_car_vs_intervencoes,group_b3_analise_car,group_b2_car_imovel_vs_intervencoes,group_b1_limite_imovel,],
                                openInLayerSwitcher: false,
                                title: 'b_trabalho_em_curso'});
var group_c_produto_validado = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'c_produto_validado'});
var group_OS03_Nova_Prata_Operacional = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: false,
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
var group_OS04_Virasaia_Cava_Sul = new ol.layer.Group({
                                layers: [group_c_produto_validado,group_b_trabalho_em_curso,group_a_dados_especficos,],
                                openInLayerSwitcher: false,
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
                                openInLayerSwitcher: false,
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
                                openInLayerSwitcher: false,
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
                                openInLayerSwitcher: false,
                                title: 'OS-07_Areas_Quilombolas'});
var group_02_ORDENS_SERVIOS = new ol.layer.Group({
                                layers: [group_OS07_Areas_Quilombolas,group_OS06_Virasaia_Cava_Norte,group_OS05_Barragens_Alteamento,group_OS04_Virasaia_Cava_Sul,group_OS03_Nova_Prata_Operacional,group_OS02_Melquiades_Nova_Prata,group_OS01_Alarico_Virasaia,],
                                openInLayerSwitcher: false,
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
                                layers: [lyr_V1_Fazenda_Grota_Ouro,],
                                openInLayerSwitcher: true,
                                title: '99-3_Descartados'});
var group_99_HISTORICO = new ol.layer.Group({
                                layers: [group_993_Descartados,group_992_Testes,group_991_Versoes_Superadas,],
                                openInLayerSwitcher: true,
                                title: '99_HISTORICO'});
var group_b_areas_licencas = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'b_areas_licencas'});
var group_c_servidao_mineral = new ol.layer.Group({
                                layers: [lyr_servidao_2026_virasaia,lyr_servidao_2026_jacobina,lyr_servidao_2026_novaprata,lyr_servidao_paiol_original,lyr_servidao_virasaia_original,],
                                openInLayerSwitcher: true,
                                title: 'c_servidao_mineral'});
var group_011_Base_Oficial_Aura = new ol.layer.Group({
                                layers: [group_c_servidao_mineral,group_b_areas_licencas,],
                                openInLayerSwitcher: true,
                                title: '01-1_Base_Oficial_Aura'});
var group_012_Imagens_Sensoriamento_Remoto = new ol.layer.Group({
                                layers: [lyr_Imagem_Google,],
                                openInLayerSwitcher: false,
                                title: '01-2_Imagens_Sensoriamento_Remoto'});
var group_013_Bases_Complementares = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: false,
                                title: '01-3_Bases_Complementares'});
var group_01_BASES_DADOS_GERAIS = new ol.layer.Group({
                                layers: [group_013_Bases_Complementares,group_012_Imagens_Sensoriamento_Remoto,group_011_Base_Oficial_Aura,],
                                openInLayerSwitcher: true,
                                title: '01_BASES_DADOS_GERAIS'});

lyr_Imagem_Google.setVisible(true);lyr_servidao_2026_virasaia.setVisible(true);lyr_servidao_2026_jacobina.setVisible(true);lyr_servidao_2026_novaprata.setVisible(true);lyr_servidao_paiol_original.setVisible(true);lyr_servidao_virasaia_original.setVisible(true);lyr_V1_Fazenda_Grota_Ouro.setVisible(true);
var layersList = [group_01_BASES_DADOS_GERAIS,group_99_HISTORICO,group_02_ORDENS_SERVIOS];
lyr_servidao_2026_virasaia.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_jacobina.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_2026_novaprata.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_paiol_original.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_servidao_virasaia_original.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'link': 'link', });
lyr_V1_Fazenda_Grota_Ouro.set('fieldAliases', {'COD_IMOVEL': 'https://pleiadeagro-my.sharepoint.com/:b:/g/personal/rodrigo_pleiadeagro_com_br1/IQCfkn8TYjtARLqZobuPWreCAZOrIzWW1GjkFfh4HqkGgjs?e=gNb9NK', 'ID': 'https://pleiadeagro-my.sharepoint.com/:b:/g/personal/rodrigo_pleiadeagro_com_br1/IQCfkn8TYjtARLqZobuPWreCAZOrIzWW1GjkFfh4HqkGgjs?e=gNb9NK', 'NOME': 'NOME', });
lyr_servidao_2026_virasaia.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_jacobina.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_novaprata.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_paiol_original.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_virasaia_original.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'link': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_V1_Fazenda_Grota_Ouro.set('fieldImages', {'COD_IMOVEL': 'TextEdit', 'ID': 'TextEdit', 'NOME': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_servidao_2026_virasaia.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_jacobina.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_2026_novaprata.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_paiol_original.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_servidao_virasaia_original.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'link': 'no label', });
lyr_V1_Fazenda_Grota_Ouro.set('fieldLabels', {'COD_IMOVEL': 'no label', 'ID': 'no label', 'NOME': 'no label', });
