(function () {
  "use strict";

  var data = window.AURA_OS04_DATA;
  if (!data || !window.AURA_CATALOGO) return;

  var definitions = [
    { code: "04.01", slug: "Fazenda-Nogueira", name: "Fazenda Nogueira", carTo: "3583473", carFederal: "TO-1707009-D45A11579C00455195E34A842697E705", area: "265,9562 ha", pdf: "Carta_Imagem_CAR_Fazenda_Nogueira.pdf" },
    { code: "04.02", slug: "Cachoeira-de-Santa-Maria", name: "Cachoeira de Santa Maria", carTo: "3583408", carFederal: "TO-1707009-A01273091B2D4AF59A77820DBD49D7EF", area: "291,7596 ha", pdf: "Carta_Imagem_CAR_Cachoeira_de_Santa_Maria.pdf" },
    { code: "04.03", slug: "Fazenda-Lavrinha-Lote-18", name: "Fazenda Lavrinha - Lote 18", carTo: "3311487", carFederal: "TO-1707009-BF20515DB6844BDDBB637E0D3425393E", area: "150,9617 ha", pdf: "Carta_Imagem_CAR_Fazenda_Lavrinha_Lote_18_ajuste_tipografia.pdf" },
    { code: "04.04", slug: "Fazenda-Cancela", name: "Fazenda Cancela", carTo: "3325305", carFederal: "TO-1707009-5501F613199C44B090444B9A63B939DB", area: "366,0679 ha", pdf: "Carta_Imagem_CAR_Fazenda_Cancela_ajuste_tipografia.pdf" },
    { code: "04.05", slug: "Cabeceira-da-Buzina", name: "Cabeceira da Buzina", carTo: "2933505", carFederal: "TO-1707009-92B0F54E88494AD5810A452D0D657AEC", area: "426,4244 ha", pdf: "Carta_Imagem_CAR_Cabeceira_da_Buzina_ajuste_tipografia.pdf" }
  ];

  var colors = {
    "Área da Propriedade Rural": ["rgba(255,255,255,0.02)", "#17211e", 3],
    "Área de Vegetação Nativa": ["rgba(48,153,79,0.58)", "#21713b", 1.5],
    "Área Consolidada": ["rgba(231,124,121,0.58)", "#a84e4b", 1.5],
    "Hidrografia do Imóvel": ["rgba(47,111,213,0.62)", "#174e9e", 1.5],
    "Reserva Legal proposta": ["rgba(178,220,65,0.46)", "#709700", 1.8],
    "Área de Preservação Permanente": ["rgba(0,194,132,0.46)", "#007c58", 1.8]
  };

  function vectorSource(collection) {
    return new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(collection, { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" })
    });
  }

  function categoryStyle(feature) {
    var style = colors[feature.get("NOME")] || ["rgba(122,95,190,0.30)", "#6249a3", 2];
    return new ol.style.Style({
      fill: new ol.style.Fill({ color: style[0] }),
      stroke: new ol.style.Stroke({ color: style[1], width: style[2] })
    });
  }

  /*
   * Camada-síntese da Base Oficial Aura. A geometria foi dissolvida a partir
   * dos cinco limites vigentes e contém somente o contorno externo do conjunto.
   * Os limites individuais permanecem preservados em 02 — Ordens de Serviço.
   */
  if (data.target && data.target.geojson) {
    window.AURA_ALVO_BUZINA_LAYER = new ol.layer.Vector({
      source: vectorSource(data.target.geojson),
      visible: true,
      title: "Alvo Buzina",
      permalink: "alvo_buzina",
      popuplayertitle: "Alvo Buzina - poligonal externa",
      style: new ol.style.Style({
        fill: new ol.style.Fill({ color: "rgba(236, 179, 62, 0.08)" }),
        stroke: new ol.style.Stroke({ color: "#d59616", width: 4 })
      })
    });
    window.AURA_ALVO_BUZINA_LAYER.set("permalink", "alvo_buzina");
    window.AURA_ALVO_BUZINA_LAYER.set("auraDataOrigin", data.target.method);
    window.AURA_ALVO_BUZINA_LAYER.set("auraSummaryLayer", true);

    window.AURA_ALVO_BUZINA_GROUP = new ol.layer.Group({
      title: "g – Alvo Buzina",
      layers: [window.AURA_ALVO_BUZINA_LAYER],
      openInLayerSwitcher: false,
      visible: true
    });
    // O seletor apresenta a coleção em ordem inversa; índice 0 exibe o item g
    // depois dos itens a–f já consolidados.
    group_011_Base_Oficial_Aura.getLayers().insertAt(0, window.AURA_ALVO_BUZINA_GROUP);
  }

  window.AURA_OS04_LAYERS = [];
  definitions.forEach(function (definition) {
    var item = data.properties[definition.code];
    var osCode = "OS " + definition.code;
    var key = definition.code.replace(".", "_");
    var thematicPermalink = "V1_CAR_Atual_OS_" + key + "_07082026";
    var limitPermalink = "os04_limit_" + key;
    var productPath = "documents/produtos/os04/" + definition.pdf;
    var kmlPath = "downloads/os04/OS-" + definition.code + "_" + definition.slug + "_Limite-Vigente.kml";
    var vectorPath = "downloads/os04/OS-" + definition.code + "_" + definition.slug + "_Dados-Vetoriais.zip";

    var limitFeatures = item.geojson.features.filter(function (feature) { return feature.properties.NOME === "Área da Propriedade Rural"; });
    var limitLayer = new ol.layer.Vector({
      source: vectorSource({ type: "FeatureCollection", features: limitFeatures }),
      visible: false,
      title: definition.name,
      permalink: "limite_" + limitPermalink,
      popuplayertitle: definition.name + " - limite do imóvel"
    });
    limitLayer.set("permalink", "limite_" + limitPermalink);
    limitLayer.set("auraDataOrigin", "CAR atual consolidado em 07/08/2026");

    var thematicLayer = new ol.layer.Vector({
      source: vectorSource(item.geojson),
      style: categoryStyle,
      visible: false,
      title: "V1 - Análise do CAR atual",
      permalink: thematicPermalink,
      popuplayertitle: osCode + " - " + definition.name + " - análise do CAR atual"
    });
    thematicLayer.set("permalink", thematicPermalink);
    thematicLayer.set("auraPdfViewUrl", productPath);
    window.AURA_OS04_LAYERS.push(limitLayer, thematicLayer);

    if (!window.AURA_CATALOGO.ordens.some(function (entry) { return entry.codigo === osCode; })) window.AURA_CATALOGO.ordens.push({
      id: "os-" + definition.code.replace(".", "-"),
      codigo: osCode,
      grupo: "OS 04",
      grupoTitulo: "Alvo Buzina",
      imovel: definition.name,
      responsavel: "",
      driveFolderUrl: "",
      camada: {
        arquivoPublicado: "data/os04/OS-" + definition.code + "_" + definition.slug + "_Dados-Vetoriais.geojson",
        revisao: "2026-08-07",
        estilo: "car-atual",
        status: "publicado",
        camadaLegada: limitPermalink,
        produtoGeograficoLegado: thematicPermalink
      },
      produtos: [{
        tipo: "diagnostico-car-atual",
        titulo: "Análise do CAR atual",
        versaoVigente: 1,
        data: "2026-08-07",
        pdfViewUrl: productPath,
        pdfDownloadUrl: productPath,
        status: "vigente",
        historico: []
      }],
      observacoes: [
        "Produto referente à situação do CAR atual; não corresponde a uma proposta de CAR.",
        item.missing.length ? "Classes não localizadas na fonte: " + item.missing.join(", ") + "." : "As classes temáticas disponíveis foram consolidadas na versão vigente."
      ]
    });

    if (window.AURA_VETORES && window.AURA_VETORES.ordens) {
      window.AURA_VETORES.ordens[osCode] = {
        codigo: osCode,
        imovel: definition.name,
        versao: "V1_CAR_Atual_07082026",
        revisao: "2026-08-07",
        camadaFonte: thematicPermalink,
        shpNome: "OS-" + definition.code + "_" + definition.slug + "_Dados-Vetoriais.zip",
        shpDownloadUrl: vectorPath,
        kmlNome: "OS-" + definition.code + "_" + definition.slug + "_Limite-Vigente.kml",
        kmlDownloadUrl: kmlPath,
        formatoPacote: "GeoJSON + KML"
      };
    }
    if (window.AURA_TITULARIDADE && window.AURA_TITULARIDADE.ordens) {
      window.AURA_TITULARIDADE.ordens[osCode] = {
        codigo: osCode,
        imovel: definition.name,
        proprietarioInformado: "",
        titularConfirmado: "",
        statusTitularidade: "Informação documental ainda não consolidada",
        matriculas: "",
        carTo: definition.carTo,
        carFederal: definition.carFederal,
        telefone: "",
        quantidadeProdutosVigentes: 1,
        produtosVersoesVigentes: "Análise do CAR atual V1",
        ressalvas: "Área do CAR: " + definition.area,
        atualizadoEm: "2026-08-07",
        vetores: window.AURA_VETORES && window.AURA_VETORES.ordens[osCode],
        documentos: []
      };
    }
  });

  function studyLayer(key, color) {
    var study = data.studies[key];
    var layer = new ol.layer.Vector({
      source: vectorSource(study.geojson),
      visible: false,
      title: study.title,
      style: new ol.style.Style({
        fill: new ol.style.Fill({ color: color.replace("1)", "0.20)") }),
        stroke: new ol.style.Stroke({ color: color, width: 3, lineDash: [10, 6] })
      })
    });
    layer.set("popuplayertitle", study.title);
    layer.set("auraPdfViewUrl", study.pdf);
    layer.set("auraPreliminaryStudy", true);
    window.AURA_OS04_LAYERS.push(layer);
    return layer;
  }

  var divisionBuzina = new ol.layer.Group({
    title: "EST 04.01 - Divisão suposta Cabeceira da Buzina",
    layers: [studyLayer("est-04-01-sul", "rgba(77,118,194,1)"), studyLayer("est-04-01-norte", "rgba(42,157,143,1)")],
    openInLayerSwitcher: false,
    visible: false
  });
  var divisionCancela = new ol.layer.Group({
    title: "EST 04.02 - Divisão suposta Cancela + Lavrinha ⚠",
    layers: [studyLayer("est-04-02-oeste", "rgba(157,78,221,1)"), studyLayer("est-04-02-leste", "rgba(233,196,106,1)")],
    openInLayerSwitcher: false,
    visible: false
  });
  divisionCancela.set("auraWarning", "Os vetores fornecidos intersectam efetivamente apenas a Fazenda Cancela; a referência à Lavrinha permanece como hipótese nominal a conferir.");

  var interventionKeys = Object.keys(data.studies).filter(function (key) { return key.indexOf("est-04-03-") === 0; });
  var intervention = new ol.layer.Group({
    title: "EST 04.03 - Possível Área de Intervenção",
    layers: interventionKeys.slice().reverse().map(function (key, index) { return studyLayer(key, index ? "rgba(230,57,70,1)" : "rgba(244,132,31,1)"); }),
    openInLayerSwitcher: false,
    visible: false
  });
  window.AURA_OS04_STUDIES_GROUP = new ol.layer.Group({
    title: "Estudos Territoriais Integrados - preliminares",
    layers: [intervention, divisionCancela, divisionBuzina],
    openInLayerSwitcher: true,
    visible: false
  });
  window.AURA_OS04_STUDIES_GROUP.set("auraWarning", "Estudos preliminares, sem efeito registral, cadastral ou geodésico.");

  if (window.AURA_DASHBOARD && window.AURA_DASHBOARD.indicadores) {
    window.AURA_DASHBOARD.atualizadoEm = "07/08/2026";
    window.AURA_DASHBOARD.indicadores.ordensServico = window.AURA_CATALOGO.ordens.length;
    window.AURA_DASHBOARD.indicadores.produtosVigentes = window.AURA_CATALOGO.ordens.reduce(function (total, os) {
      return total + (os.produtos || []).filter(function (product) { return product.status === "vigente"; }).length;
    }, 0);
  }
})();
