(function () {
  "use strict";

  var data = window.AURA_NEW_DATA || {};
  var format = new ol.format.GeoJSON();
  var classColors = {
    "Área da Propriedade Rural": ["rgba(255,255,255,0.02)", "#000000", 3],
    "Área de Vegetação Nativa": ["rgba(51,160,44,0.72)", "#24731f", 1.4],
    "Área Consolidada": ["rgba(251,154,153,0.72)", "#b86665", 1.4],
    "Área Antropizada após 22/07/2008": ["rgba(255,127,0,0.76)", "#b75b00", 1.5],
    "Área de Uso Alternativo": ["rgba(171,86,204,0.72)", "#753b8d", 1.4],
    "Hidrografia do Imóvel": ["rgba(0,0,204,0.78)", "#00007f", 1.5],
    "Área de Preservação Permanente a preservar": ["rgba(0,224,41,0.62)", "#009b1c", 1.5],
    "Área de Preservação Permanente a recuperar": ["rgba(255,255,255,0.06)", "#00e029", 2],
  };
  var styleCache = {};

  function propertyStyle(feature) {
    var name = feature.get("NOME") || "";
    var ownerLayer = feature.get("layerObject");
    var active = ownerLayer && ownerLayer.get("activeSymbology");
    if (active && active.values && active.values.indexOf(name) === -1) return null;
    var colors = classColors[name] || ["rgba(125,146,140,0.35)", "#627d75", 1.2];
    var key = colors.join("|");
    if (!styleCache[key]) {
      styleCache[key] = new ol.style.Style({
        fill: new ol.style.Fill({ color: colors[0] }),
        stroke: new ol.style.Stroke({ color: colors[1], width: colors[2] }),
      });
    }
    return styleCache[key];
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function propertyLegendTitle(title, collection) {
    var preferredOrder = [
      "Área Antropizada após 22/07/2008", "Área Consolidada", "Área da Propriedade Rural",
      "Área de Preservação Permanente a preservar", "Área de Preservação Permanente a recuperar",
      "Área de Uso Alternativo", "Área de Vegetação Nativa", "Hidrografia do Imóvel"
    ];
    var names = [];
    (collection.features || []).forEach(function (feature) {
      var name = feature.properties && feature.properties.NOME;
      if (name && names.indexOf(name) === -1) names.push(name);
    });
    names.sort(function (a, b) {
      var ai = preferredOrder.indexOf(a); var bi = preferredOrder.indexOf(b);
      if (ai < 0) ai = preferredOrder.length; if (bi < 0) bi = preferredOrder.length;
      return ai - bi || a.localeCompare(b, "pt-BR");
    });
    var rows = names.map(function (name) {
      var colors = classColors[name] || ["rgba(125,146,140,0.35)", "#627d75", 1.2];
      return '<input type="checkbox" class="symbology" symbology-type="categorized" value="' + escapeHtml(name) + '" checked>' +
        '<span class="aura-theme-swatch" style="background:' + colors[0] + ';--aura-swatch-stroke:' + colors[1] + '"></span>' + escapeHtml(name) + '<br />';
    }).join("");
    return '<div class="layertitle aura-expandable-legend-title">' + escapeHtml(title) +
      '<span class="aura-legend-chevron" aria-hidden="true"></span></div>' +
      '<a class="layerlegend">' + rows + '</a>';
  }

  function simpleStyle(fill, stroke, width, dash) {
    var key = [fill, stroke, width, (dash || []).join(",")].join("|");
    if (!styleCache[key]) {
      styleCache[key] = new ol.style.Style({
        fill: new ol.style.Fill({ color: fill }),
        stroke: new ol.style.Stroke({ color: stroke, width: width, lineDash: dash }),
      });
    }
    return styleCache[key];
  }

  function vectorLayer(id, title, kind) {
    var collection = data[id];
    if (!collection) return null;
    var styles = {
      acesso: simpleStyle("rgba(224,142,54,0.30)", "#d3832f", 2),
      contorno: simpleStyle("rgba(0,0,0,0)", "#f0a14a", 2.5),
      projeto: simpleStyle("rgba(0,0,0,0)", "#31a5a8", 1.5, [7, 4]),
      malha: simpleStyle("rgba(93,76,150,0.24)", "#65549b", 1.2),
      pilha: simpleStyle("rgba(124,91,55,0.38)", "#765334", 2),
    };
    var source = new ol.source.Vector({
      features: format.readFeatures(collection, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }),
    });
    var layer = new ol.layer.Vector({
      title: kind === "propriedade" ? propertyLegendTitle(title, collection) : title,
      source: source,
      style: kind === "propriedade" ? propertyStyle : styles[kind],
      visible: false,
      interactive: true,
    });
    layer.set("permalink", id);
    layer.set("popuplayertitle", title);
    layer.set("sourceType", "json");
    source.getFeatures().forEach(function (feature, index) {
      feature.set("idO", index + 1);
      feature.set("layerObject", layer);
    });
    return layer;
  }

  function limitLayer(id, title) {
    var collection = data[id];
    if (!collection) return null;
    var limitCollection = {
      type: "FeatureCollection",
      features: collection.features.filter(function (feature) {
        return String(feature.properties.NOME || "")
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .toLowerCase() === "area da propriedade rural";
      }),
    };
    var source = new ol.source.Vector({
      features: format.readFeatures(limitCollection, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }),
    });
    var layer = new ol.layer.Vector({
      title: title,
      source: source,
      style: simpleStyle("rgba(255,255,255,0.01)", "#ffd54a", 3),
      visible: false,
      interactive: true,
    });
    layer.set("permalink", "limite_" + id);
    layer.set("popuplayertitle", title);
    layer.set("sourceType", "json");
    source.getFeatures().forEach(function (feature, index) {
      feature.set("idO", index + 1);
      feature.set("layerObject", layer);
    });
    return layer;
  }

  function group(title, layers, open) {
    return new ol.layer.Group({
      title: title,
      layers: layers.filter(Boolean),
      openInLayerSwitcher: open !== false,
    });
  }

  var properties = [
    vectorLayer("FAZENDA_JACOBINA_FAZENDA_JACOBINA", "V1_Fz_Jacobina_23072026", "propriedade"),
    vectorLayer("FAZENDA_ALTAMIRA_FAZENDA_ALTAMIRA", "V1_Fz_Altamira_23072026", "propriedade"),
    vectorLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_B_EVILENE_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_B_EVILENE", "V1_Fz_Agua_Doce_Gleba_B_Evilene_23072026", "propriedade"),
    vectorLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_GL_A_ULISSES_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_GL_A_ULISSES", "V1_Fz_Agua_Doce_Gleba_A_Ulisses_23072026", "propriedade"),
    vectorLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_REMANESC_DESIRE_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_REMANESC_DESIRE", "V1_Fz_Agua_Doce_Remanescente_Desire_23072026", "propriedade"),
    vectorLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_02_EUDISLENE_FAZENDA_AGUE_DOCE_LOTE_03_E_04_PARTE_Gleba_02_EUDISLENE", "V1_Fz_Agua_Doce_Gleba_02_Eudislene_23072026", "propriedade"),
    vectorLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_03_EDER_FAZENDA_AGUE_DOCE_LOTE_03_E_04_PARTE_Gleba_03_EDER", "V1_Fz_Agua_Doce_Gleba_03_Eder_23072026", "propriedade"),
  ];

  var newLimits = [
    limitLayer("LIMITE_FAZENDA_NOVA_BARRA", "OS 02.09 – Fazenda Nova Barra"),
    limitLayer("LIMITE_FAZENDA_LIMEIRA", "OS 02.08 – Fazenda Limeira"),
    limitLayer("FAZENDA_JACOBINA_FAZENDA_JACOBINA", "OS-03 – Fazenda Jacobina"),
    limitLayer("FAZENDA_ALTAMIRA_FAZENDA_ALTAMIRA", "OS-03 – Fazenda Altamira"),
    limitLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_B_EVILENE_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_B_EVILENE", "OS-03 – Fazenda Água Doce – Gleba B – Evilene"),
    limitLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_GL_A_ULISSES_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_GL_A_ULISSES", "OS-03 – Fazenda Água Doce – Gleba A – Ulisses"),
    limitLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_REMANESC_DESIRE_FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_REMANESC_DESIRE", "OS-03 – Fazenda Água Doce – Remanescente – Desirê"),
    limitLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_02_EUDISLENE_FAZENDA_AGUE_DOCE_LOTE_03_E_04_PARTE_Gleba_02_EUDISLENE", "OS-03 – Fazenda Água Doce – Gleba 02 – Eudislene"),
    limitLayer("FAZENDA_AGUA_DOCE_LOTE_03_E_04_PARTE_Gleba_03_EDER_FAZENDA_AGUE_DOCE_LOTE_03_E_04_PARTE_Gleba_03_EDER", "OS-03 – Fazenda Água Doce – Gleba 03 – Éder"),
  ];

  var accesses = [
    vectorLayer("SHP_JACOBINA_SHP_Acesso_Jacobina01", "Jacobina – Acesso 01", "acesso"),
    vectorLayer("SHP_JACOBINA_SHP_Acesso_Jacobina02", "Jacobina – Acesso 02", "acesso"),
    vectorLayer("SHP_JACOBINA_SHP_Acesso_Nova_Prata_01", "Nova Prata – Acesso 01", "acesso"),
    vectorLayer("SHP_JACOBINA_SHP_Acesso_Nova_Prata_02", "Nova Prata – Acesso 02", "acesso"),
    vectorLayer("SHP_JACOBINA_SHP_Acesso_Nova_Prata_03", "Nova Prata – Acesso 03", "acesso"),
  ];

  function pde(number) {
    var suffix = String(number).padStart(2, "0");
    var layers = [
      vectorLayer("SHP_JACOBINA_SHP_Contorno_PDE_" + suffix, "Contorno", "contorno"),
      vectorLayer("SHP_JACOBINA_SHP_Linhas_PDE_" + suffix, "Linhas de Projeto", "projeto"),
      vectorLayer("SHP_JACOBINA_SHP_Contorno_PDE_" + suffix, "Malha Cortada – Visualização Otimizada", "malha"),
    ];
    if (number === 5) layers.push(vectorLayer("SHP_JACOBINA_SHP_PDE_05", "PDE 05 – Geometria Complementar", "malha"));
    if (number === 6) layers.push(vectorLayer("SHP_JACOBINA_SHP_PDE_06", "PDE 06 – Geometria Complementar", "projeto"));
    return group("PDE " + suffix, layers, false);
  }

  var piles = [
    vectorLayer("SHP_JACOBINA_SHP_Pilha_El347_norte", "Norte – El. 347", "pilha"),
    vectorLayer("SHP_JACOBINA_SHP_Pilha_el350_Sul", "Sul – El. 350", "pilha"),
    vectorLayer("SHP_JACOBINA_SHP_Pilha_El_347_0_Oeste", "Oeste – El. 347", "pilha"),
    vectorLayer("SHP_JACOBINA_SHP_Pilha_El_347_0_Oeste_Pilha_2", "Oeste – Pilha 2", "pilha"),
  ];

  var groupOS03 = group("OS-03_Jacobina", [
    group("c_produto_validado", [], false),
    group("b_trabalho_em_curso", properties, true),
    group("a_dados_específicos", [
      group("a.2_obtidos_pleiade", [], false),
      group("a.1_recebidos_aura", [], false),
    ], false),
  ], true);
  group_02_ORDENS_SERVIOS.getLayers().insertAt(0, groupOS03);

  group_Limite_Imveis.getLayers().extend(newLimits.filter(Boolean));

  var limitLabels = [
    [lyr_FazendaMatheusLopesGeral, "OS 01.01 – Fazenda Matheus Lopes – Geral"],
    [lyr_FazendaMatheusLopesOeste, "OS 01.02 – Fazenda Matheus Lopes – Oeste"],
    [lyr_FazendaFloresta, "OS 01.03 – Fazenda Floresta"],
    [lyr_FazendaNovaPrata, "OS 02.01 – Fazenda Nova Prata"],
    [lyr_FazendaSantaLuziaRioGrande, "OS 02.02 – Fazenda Santa Luzia – Rio Grande"],
    [lyr_FazendaSoJos, "OS 02.03 – Fazenda São José"],
    [lyr_FazendaLote15, "OS 02.04 – Fazenda Lote 15"],
    [lyr_FazendaAmaralina, "OS 02.05 – Fazenda Amaralina"],
    [lyr_FazendaLavandeira, "OS 02.06 – Fazenda Lavandeira"],
    [lyr_FazendaSantaHelena, "OS 02.07 – Fazenda Santa Helena"],
    [lyr_FazendaBrejoAlegreI, "OS 02.10 – Fazenda Brejo Alegre I"],
    [lyr_FazendaBrejoAlegreII, "OS 02.11 – Fazenda Brejo Alegre II"],
    [lyr_FazendaBrejoAlegreIII, "OS 02.12 – Fazenda Brejo Alegre III"],
    [lyr_FazendaLavandeiraII, "OS 02.13 – Fazenda Lavandeira II"],
  ];
  var uniformLimitStyle = simpleStyle("rgba(255,255,255,0.01)", "#1a1a1a", 3);
  function applyLimitPresentation(layer, label) {
    var legendTitle = '<span class="aura-limit-swatch" aria-hidden="true"></span>' + label;
    if (typeof layer.setStyle === "function") layer.setStyle(uniformLimitStyle);
    layer.set("title", legendTitle);
    layer.set("popuplayertitle", label);
  }
  limitLabels.forEach(function (entry) {
    applyLimitPresentation(entry[0], entry[1]);
    entry[0].on("change:source", function () {
      window.setTimeout(function () {
        applyLimitPresentation(entry[0], entry[1]);
      }, 0);
    });
  });
  newLimits.filter(Boolean).forEach(function (layer) {
    applyLimitPresentation(layer, layer.get("popuplayertitle"));
  });

  var groupD = group("d – Acessos e Logística", accesses, false);
  var groupE = group("e – Estruturas PDE", [pde(6), pde(5), pde(4), pde(3), pde(2), pde(1)], false);
  var groupF = group("f – Pilhas", piles, false);
  group_011_Base_Oficial_Aura.setLayers(new ol.Collection([
    groupF, groupE, groupD,
    group_c_servidao_mineral, group_b_areas_licencas, group_a_plano_diretor,
  ]));
  group_01_BASES_DADOS_GERAIS.set("title", "01 – BASES DE DADOS GERAIS");
  group_011_Base_Oficial_Aura.set("title", "01.1 – Base Oficial Aura");
  group_012_Bases_Complementares.set("title", "01.2 – Bases Complementares");
  group_98_HISTORICO.set("title", "98 – HISTÓRICO");
  group_99_IMAGENS_SENSOR_REMOTO.set("title", "99 – IMAGENS DE SENSOR REMOTO");
  lyr_Imagem_Google.set("title", "Imagem – Google");
  lyr_ImagemdeSatlitePleiades2015.set("title", "Imagem de Satélite – Pleiades 2015");
  lyr_WorldImagery.set("title", "Imagem – World Imagery");
  /*
   * Os quatro mosaicos Planet dependiam de uma credencial privada no proxy
   * /api/planet. Como a publicação não entrega tiles sem essa credencial, eles
   * foram retirados da árvore ativa, sem alterar os demais serviços de imagem.
   */

  /*
   * Fontes complementares de imagem verificadas em 04/08/2026.
   * Wayback: versão histórica publicada em 03/05/2023 pela Esri.
   * Sentinel-2: ImageServer público da Esri, atualizado diariamente.
   * PRODES Cerrado: WMS temporal do INPE, último mosaico publicado em 2024.
   */
  var lyr_WorldImageryWayback = new ol.layer.Tile({
    title: "Imagem histórica – World Imagery Wayback (03/05/2023)",
    visible: false,
    source: new ol.source.XYZ({
      url: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/46399/{z}/{y}/{x}",
      maxZoom: 23,
      crossOrigin: "anonymous",
      attributions: "Esri, World Imagery Wayback",
    }),
  });
  lyr_WorldImageryWayback.set("permalink", "world_imagery_wayback_2023_05_03");
  lyr_WorldImageryWayback.set("popuplayertitle", "World Imagery Wayback – 03/05/2023");
  lyr_WorldImageryWayback.set("auraSourceStatus", "Esri WMTS operacional");

  // Imagem diária pública em WMS/TWMS. Dois dias de defasagem evitam solicitar
  // uma data ainda não processada pelo serviço de imagens quase em tempo real.
  var gibsDate = new Date();
  gibsDate.setUTCDate(gibsDate.getUTCDate() - 2);
  var gibsIsoDate = gibsDate.toISOString().slice(0, 10);
  var gibsPtDate = gibsIsoDate.split("-").reverse().join("/");
  var lyr_NasaGibsRecent = new ol.layer.Tile({
    title: "Imagem diária – NASA GIBS / VIIRS (" + gibsPtDate + ")",
    visible: false,
    source: new ol.source.TileWMS({
      url: "https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi",
      params: {
        LAYERS: "VIIRS_NOAA20_CorrectedReflectance_TrueColor",
        STYLES: "",
        VERSION: "1.1.1",
        FORMAT: "image/jpeg",
        TRANSPARENT: false,
        TIME: gibsIsoDate,
        TILED: true
      },
      crossOrigin: "anonymous",
      wrapX: true,
      attributions: "NASA EOSDIS GIBS, NOAA-20/VIIRS"
    })
  });
  lyr_NasaGibsRecent.set("permalink", "nasa_gibs_viirs_recente");
  lyr_NasaGibsRecent.set("popuplayertitle", "NASA GIBS / VIIRS – " + gibsPtDate);
  lyr_NasaGibsRecent.set("auraSourceStatus", "NASA GIBS WMS público – imagem diária, resolução moderada");

  var lyr_Sentinel2Recent = new ol.layer.Image({
    title: "Sentinel-2 – período mais recente",
    visible: false,
    source: new ol.source.ImageArcGISRest({
      url: "https://sentinel.arcgis.com/arcgis/rest/services/Sentinel2/ImageServer",
      crossOrigin: "anonymous",
      ratio: 1,
      params: {
        format: "jpgpng",
        renderingRule: JSON.stringify({ rasterFunction: "Natural Color with DRA" }),
        mosaicRule: JSON.stringify({
          mosaicMethod: "esriMosaicAttribute",
          sortField: "acquisitiondate",
          sortValue: Date.now(),
          ascending: false,
          where: "cloudcover < 0.2",
          mosaicOperation: "MT_FIRST",
        }),
      },
      attributions: "Esri, Sentinel-2",
    }),
  });
  lyr_Sentinel2Recent.set("permalink", "sentinel2_recente");
  lyr_Sentinel2Recent.set("popuplayertitle", "Sentinel-2 – período mais recente");
  lyr_Sentinel2Recent.set("auraSourceStatus", "Esri ImageServer operacional – baixa nebulosidade");

  var lyr_ProdesCerradoMosaic = new ol.layer.Tile({
    title: "INPE/PRODES Cerrado – mosaico 2024",
    visible: false,
    source: new ol.source.TileWMS({
      url: "https://terrabrasilis.dpi.inpe.br/geoserver/prodes-cerrado-nb/temporal_mosaic_cerrado/wms",
      params: {
        LAYERS: "temporal_mosaic_cerrado",
        STYLES: "raster",
        VERSION: "1.1.1",
        FORMAT: "image/png",
        TILED: true,
        TIME: "2024-01-01T00:00:00.000Z",
      },
      serverType: "geoserver",
      crossOrigin: "anonymous",
      attributions: "INPE, TerraBrasilis/PRODES Cerrado",
    }),
  });
  lyr_ProdesCerradoMosaic.set("permalink", "inpe_prodes_cerrado_mosaico_2024");
  lyr_ProdesCerradoMosaic.set("popuplayertitle", "INPE/PRODES Cerrado – mosaico 2024");
  lyr_ProdesCerradoMosaic.set("auraSourceStatus", "INPE WMS operacional");

  /*
   * O seletor exibe a coleção em ordem inversa. Esta sequência interna
   * produz a ordem visual aprovada para a pasta 99.
   */
  group_99_IMAGENS_SENSOR_REMOTO.setLayers(new ol.Collection([
    lyr_Imagem_Google,
    lyr_ImagemdeSatlitePleiades2015,
    lyr_ProdesCerradoMosaic,
    lyr_NasaGibsRecent,
    lyr_Sentinel2Recent,
    lyr_WorldImageryWayback,
    lyr_WorldImagery,
  ]));
  lyr_Limites_Municipais.set("title", "Limites Municipais");
  group_a_plano_diretor.set("title", "a – Plano Diretor");
  group_b_areas_licencas.set("title", "b – Áreas Licenciadas");
  group_c_servidao_mineral.set("title", "c – Servidões Minerárias");
  group_Fund_Palmares_Almas.set("title", "Fundação Palmares – Almas");
  group_Fund_Palmares_DIanopolis.set("title", "Fundação Palmares – Dianópolis");
  group_Fund_Palmares_Porto_Alegre_do_Tocantins.set("title", "Fundação Palmares – Porto Alegre do Tocantins");

  /*
   * Localidades quilombolas do Censo 2022, com o número do processo FCP.
   * Os grupos gerados pelo projeto original estavam vazios. A consulta remota
   * mantém a camada operacional sem inventar polígonos onde só há pontos.
   */
  function palmaresLocalities(municipality) {
    var where = "CD_UF=17 AND NM_MUNIC='" + municipality.replace(/'/g, "''") + "'";
    var endpoint = "https://services6.arcgis.com/oxRUIb6ORVv4ffhN/ArcGIS/rest/services/" +
      "Banco_de_dados___Octasecurity_WFL1/FeatureServer/32/query";
    var source = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: endpoint + "?where=" + encodeURIComponent(where) +
        "&outFields=NM_CQ,NM_MUNIC,P_FCP,CD_LQ&returnGeometry=true&outSR=4326&f=geojson",
    });
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({ color: "rgba(244, 181, 48, 0.92)" }),
        stroke: new ol.style.Stroke({ color: "#5b4311", width: 2 }),
      }),
    });
    var layer = new ol.layer.Vector({
      title: "Comunidades certificadas – " + municipality,
      source: source,
      style: style,
      visible: false,
    });
    layer.set("popuplayertitle", "Comunidades certificadas – " + municipality);
    layer.set("fieldAliases", {
      NM_CQ: "Comunidade",
      NM_MUNIC: "Município",
      P_FCP: "Processo FCP",
      CD_LQ: "Código da localidade",
    });
    return layer;
  }

  function quilombolaTerritoryWms() {
    var source = new ol.source.ImageWMS({
      url: "https://geoportal.to.gov.br/geoserver/base_cartografica_sudeste_tocantins/wms",
      params: {
        LAYERS: "base_cartografica_sudeste_tocantins:territorioquilombolaincra",
        VERSION: "1.1.1",
        FORMAT: "image/png",
        TRANSPARENT: true,
        CQL_FILTER: "nm_munic4 ILIKE '%DIAN%POLIS%'",
      },
      ratio: 1,
      serverType: "geoserver",
      crossOrigin: "anonymous",
    });
    var layer = new ol.layer.Image({
      title: "Território quilombola INCRA – Lajeado",
      source: source,
      visible: false,
    });
    layer.set("popuplayertitle", "Território quilombola INCRA – Lajeado");
    return layer;
  }

  group_Fund_Palmares_Almas.setLayers(new ol.Collection([
    palmaresLocalities("Almas"),
  ]));
  group_Fund_Palmares_DIanopolis.setLayers(new ol.Collection([
    quilombolaTerritoryWms(),
    palmaresLocalities("Dianópolis"),
  ]));
  group_Fund_Palmares_Porto_Alegre_do_Tocantins.setLayers(new ol.Collection([
    palmaresLocalities("Porto Alegre do Tocantins"),
  ]));

  function incraWms(title, theme) {
    var service = "https://acervofundiario.incra.gov.br/i3geo/ogc.php?tema=" + theme;
    var source = new ol.source.ImageWMS({
      url: service,
      params: { LAYERS: theme, VERSION: "1.1.1", FORMAT: "image/png", TRANSPARENT: true },
      projection: "EPSG:4326",
      ratio: 1,
      serverType: "mapserver",
    });
    var layer = new ol.layer.Image({
      title: title,
      source: source,
      visible: false,
      opacity: 0.82,
    });
    layer.set("permalink", theme);
    layer.set("popuplayertitle", title);
    layer.set("auraSourceStatus", "pronto");
    source.on("imageloadstart", function () {
      layer.set("auraSourceStatus", "carregando");
    });
    source.on("imageloadend", function () {
      layer.set("auraSourceStatus", "operacional");
    });
    source.on("imageloaderror", function () {
      layer.set("auraSourceStatus", "erro");
    });
    wms_layers.push([layer, 0]);
    return layer;
  }

  group_Certificaes_Sigef_Incra.getLayers().extend([
    incraWms("SNCI – imóveis certificados públicos | TO", "imoveiscertificados_publico_to"),
    incraWms("SNCI – imóveis certificados privados | TO", "imoveiscertificados_privado_to"),
    incraWms("SIGEF – parcelas certificadas públicas | TO", "certificada_sigef_publico_to"),
    incraWms("SIGEF – parcelas certificadas particulares | TO", "certificada_sigef_particular_to"),
  ]);
  group_Certificaes_Sigef_Incra.set("title", "Certificações Fundiárias – INCRA");
})();
