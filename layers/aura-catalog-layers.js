(function () {
  "use strict";

  var catalog = window.AURA_CATALOGO;
  if (!catalog || !Array.isArray(catalog.ordens)) return;

  var layerByPermalink = {};
  function indexLayers(collection) {
    if (!collection || typeof collection.getArray !== "function") return;
    collection.getArray().forEach(function (layer) {
      if (!layer) return;
      if (typeof layer.getLayers === "function") indexLayers(layer.getLayers());
      var key = typeof layer.get === "function" && layer.get("permalink");
      if (key && !layerByPermalink[key]) layerByPermalink[key] = layer;
      var title = typeof layer.get === "function" && layer.get("popuplayertitle");
      if (title && !layerByPermalink[title]) layerByPermalink[title] = layer;
    });
  }
  layersList.forEach(function (layer) {
    if (layer && typeof layer.getLayers === "function") indexLayers(layer.getLayers());
  });
  (window.AURA_OS04_LAYERS || []).forEach(function (layer) {
    if (layer && typeof layer.getLayers === "function") indexLayers(layer.getLayers());
    else if (layer) {
      var key = typeof layer.get === "function" && layer.get("permalink");
      if (key && !layerByPermalink[key]) layerByPermalink[key] = layer;
    }
  });

  function findLayer(key, preferLimit) {
    if (!key) return null;
    if (preferLimit && layerByPermalink["limite_" + key]) {
      return layerByPermalink["limite_" + key];
    }
    return layerByPermalink[key] || null;
  }

  function versionLabel(os) {
    var raw = os.camada && os.camada.produtoGeograficoLegado;
    var match = raw && raw.match(/^V(\d+)_.*_(\d{6}|\d{8})$/);
    if (!match) return "Análise Cartográfica Vigente";
    var version = match[1];
    var digits = match[2];
    var day = digits.slice(0, 2);
    var month = digits.slice(2, 4);
    var year = digits.length === 8 ? digits.slice(4, 8) : "20" + digits.slice(4, 6);
    return "V" + version + " · " + day + "/" + month + "/" + year;
  }

  function labelFor(os) {
    var propertyName = String(os.imovel || "").replace(/\s*\|\s*/g, " – ");
    var parts = [os.codigo, propertyName];
    if (os.responsavel) parts.push(os.responsavel);
    return parts.join(" – ");
  }

  function numberedLimitLabel(os, index) {
    var match = String(os.codigo || "").match(/(\d+)\.(\d+)/);
    var code = match ? "OS." + match[1] + "-" + match[2] : String(os.codigo || "");
    var propertyName = String(os.imovel || "").replace(/\s*\|\s*/g, " - ");
    var parts = [(index + 1) + " - " + code, propertyName];
    if (os.responsavel) parts.push(os.responsavel);
    return parts.join(" - ");
  }

  var THEME_COLORS = {
    "Área da Propriedade Rural": ["rgba(255,255,255,0.02)", "#000000"],
    "Área de Vegetação Nativa": ["rgba(51,160,44,0.72)", "#24731f"],
    "Área Consolidada": ["rgba(251,154,153,0.72)", "#b86665"],
    "Área Antropizada após 22/07/2008": ["rgba(255,127,0,0.76)", "#b75b00"],
    "Área de Uso Alternativo": ["rgba(171,86,204,0.72)", "#753b8d"],
    "Hidrografia do Imóvel": ["rgba(0,0,204,0.78)", "#00007f"],
    "Área de Preservação Permanente a preservar": ["rgba(0,224,41,0.62)", "#009b1c"],
    "Área de Preservação Permanente a recuperar": ["rgba(255,255,255,0.06)", "#00e029"],
    "Área de Preservação Permanente": ["rgba(0,194,132,0.46)", "#007c58"],
    "Reserva Legal proposta": ["rgba(178,220,65,0.46)", "#709700"]
  };

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function categorizedTitle(os, layer) {
    var source = layer && layer.getSource && layer.getSource();
    var features = source && source.getFeatures ? source.getFeatures() : [];
    var names = [];
    features.forEach(function (feature) {
      var name = feature.get("NOME");
      if (name && names.indexOf(name) === -1) names.push(name);
    });
    var order = Object.keys(THEME_COLORS);
    names.sort(function (a, b) {
      var ai = order.indexOf(a); var bi = order.indexOf(b);
      if (ai < 0) ai = order.length; if (bi < 0) bi = order.length;
      return ai - bi || a.localeCompare(b, "pt-BR");
    });
    if (!names.length) return versionLabel(os);
    var rows = names.map(function (name) {
      var colors = THEME_COLORS[name] || ["rgba(125,146,140,0.35)", "#627d75"];
      return '<input type="checkbox" class="symbology" symbology-type="categorized" value="' + escapeHtml(name) + '" checked>' +
        '<span class="aura-theme-swatch" style="background:' + colors[0] + ';--aura-swatch-stroke:' + colors[1] + '"></span>' + escapeHtml(name) + '<br />';
    }).join("");
    var version = os.camada && os.camada.produtoGeograficoLegado || versionLabel(os);
    return '<div class="layertitle aura-expandable-legend-title">' + escapeHtml(version) +
      '<span class="aura-legend-chevron" aria-hidden="true"></span></div>' +
      '<a class="layerlegend">' + rows + '</a>';
  }

  var groups = {};
  var limitLayers = [];
  var LIMIT_COLOR = "#1a1a1a";

  function applyLimitStyle(layer, color) {
    if (!layer || typeof layer.setStyle !== "function") return;
    layer.setStyle(new ol.style.Style({
      fill: new ol.style.Fill({ color: "rgba(255,255,255,0.015)" }),
      stroke: new ol.style.Stroke({ color: color, width: 3 }),
    }));
  }

  catalog.ordens.forEach(function (os, osIndex) {
    if (!groups[os.grupo]) groups[os.grupo] = [];

    var limit = findLayer(os.camada && os.camada.camadaLegada, true);
    var thematic = findLayer(os.camada && os.camada.produtoGeograficoLegado, false);
    var osVector = window.AURA_VETORES && window.AURA_VETORES.ordens && window.AURA_VETORES.ordens[os.codigo];
    var children = [];

    if (limit) {
      var limitLabel = numberedLimitLabel(os, osIndex);
      applyLimitStyle(limit, LIMIT_COLOR);
      limit.set(
        "title",
        '<span class="aura-limit-swatch" aria-hidden="true"></span>' + escapeHtml(limitLabel)
      );
      limit.set("auraDisplayTitle", '<span class="aura-limit-swatch" aria-hidden="true"></span>' + escapeHtml(limitLabel));
      limit.set("popuplayertitle", limitLabel + " - limite");
      limit.set("auraOsId", os.id);
      limit.set("auraLimitColor", LIMIT_COLOR);
      var limitVector = window.AURA_VETORES && window.AURA_VETORES.ordens && window.AURA_VETORES.ordens[os.codigo];
      if (limitVector && limitVector.kmlDownloadUrl) {
        limit.set("auraKmlDownloadUrl", limitVector.kmlDownloadUrl);
        limit.set("auraKmlFileName", limitVector.kmlNome);
      }
      limitLayers.push(limit);
    }
    if (thematic && thematic !== limit) {
      thematic.set("title", categorizedTitle(os, thematic));
      thematic.set("popuplayertitle", labelFor(os) + " – análise vigente");
      thematic.set("auraOsId", os.id);
      thematic.set("auraVersionCode", os.camada && os.camada.produtoGeograficoLegado);
      thematic.set("auraSuppressKmlDownload", true);
      children.push(thematic);
    }

    var subgroup = new ol.layer.Group({
      title: labelFor(os),
      layers: children,
      openInLayerSwitcher: false,
      visible: true,
    });
    subgroup.set("auraOsId", os.id);
    subgroup.set("auraCatalogEntry", true);
    if (osVector && osVector.shpDownloadUrl) {
      subgroup.set("auraShpDownloadUrl", osVector.shpDownloadUrl);
      subgroup.set("auraShpFileName", osVector.shpNome);
    }
    groups[os.grupo].push(subgroup);
  });

  var ordered = ["OS 01", "OS 02", "OS 03", "OS 04"].map(function (groupCode) {
    var first = catalog.ordens.find(function (os) { return os.grupo === groupCode; });
    var title = first ? groupCode + " – " + first.grupoTitulo : groupCode;
    var groupLayers = (groups[groupCode] || []).slice().reverse();
    if (groupCode === "OS 04" && window.AURA_OS04_STUDIES_GROUP) groupLayers.push(window.AURA_OS04_STUDIES_GROUP);
    return new ol.layer.Group({
      title: title,
      layers: groupLayers,
      openInLayerSwitcher: groupCode === "OS 03",
      visible: true,
    });
  });

  group_02_ORDENS_SERVIOS.set("title", "02 – ORDENS DE SERVIÇO");
  var limitsGroup = new ol.layer.Group({
    title: "Limites dos Imóveis",
    layers: limitLayers.slice().reverse(),
    openInLayerSwitcher: true,
    visible: true,
  });
  limitsGroup.set("auraLimitsGroup", true);
  group_02_ORDENS_SERVIOS.setLayers(new ol.Collection(ordered.slice().reverse().concat([limitsGroup])));
  group_02_ORDENS_SERVIOS.set("openInLayerSwitcher", true);
  window.AURA_OS_LAYER_INDEX = layerByPermalink;

  function setTreeVisible(layer, visible) {
    if (!layer) return;
    if (typeof layer.setVisible === "function") layer.setVisible(visible);
    if (typeof layer.getLayers === "function") {
      layer.getLayers().forEach(function (child) { setTreeVisible(child, visible); });
    }
  }

  // Estado inicial do webmapa ao abrir o link: "c — Servidões Minerárias",
  // "g — Alvo Buzina" e "Imagem — Google" ficam marcadas.
  setTreeVisible(group_01_BASES_DADOS_GERAIS, false);
  setTreeVisible(group_02_ORDENS_SERVIOS, false);
  setTreeVisible(group_98_HISTORICO, false);
  setTreeVisible(group_99_IMAGENS_SENSOR_REMOTO, false);

  group_01_BASES_DADOS_GERAIS.setVisible(true);
  group_011_Base_Oficial_Aura.setVisible(true);
  setTreeVisible(group_c_servidao_mineral, true);
  if (window.AURA_ALVO_BUZINA_GROUP) {
    setTreeVisible(window.AURA_ALVO_BUZINA_GROUP, true);
  }

  group_99_IMAGENS_SENSOR_REMOTO.setVisible(true);
  if (typeof lyr_Imagem_Google !== "undefined" && lyr_Imagem_Google) {
    lyr_Imagem_Google.setVisible(true);
  }

  function extendWithVectorSources(layer, extent) {
    if (!layer) return 0;
    if (typeof layer.getLayers === "function") {
      var childCount = 0;
      layer.getLayers().forEach(function (child) { childCount += extendWithVectorSources(child, extent); });
      return childCount;
    }
    var source = typeof layer.getSource === "function" ? layer.getSource() : null;
    if (!source || typeof source.getExtent !== "function") return 0;
    var sourceExtent = source.getExtent();
    if (sourceExtent && sourceExtent.every(Number.isFinite) && !ol.extent.isEmpty(sourceExtent)) {
      ol.extent.extend(extent, sourceExtent);
      return 1;
    }
    return 0;
  }

  // Um permalink com lon/lat/z preserva o enquadramento compartilhado. Na
  // abertura limpa, o mapa considera simultaneamente os cinco setores
  // minerários e a poligonal do Alvo Buzina.
  var viewParams = new URLSearchParams(window.location.search);
  var hasSharedView = viewParams.has("lon") || viewParams.has("lat") || viewParams.has("z");
  if (!hasSharedView) {
    var fitOpeningContext = function (attempt) {
      if (typeof map === "undefined" || !map || !map.getView()) return;
      var openingExtent = ol.extent.createEmpty();
      var loadedSources = 0;
      loadedSources += extendWithVectorSources(group_c_servidao_mineral, openingExtent);
      loadedSources += extendWithVectorSources(window.AURA_ALVO_BUZINA_GROUP, openingExtent);
      // Os cinco setores são carregados por arquivos GeoJSON. Aguarde todos os
      // seis contornos (5 setores + Alvo Buzina) antes de calcular o zoom.
      if (loadedSources < 6 && attempt < 24) {
        window.setTimeout(function () { fitOpeningContext(attempt + 1); }, 250);
        return;
      }
      if (ol.extent.isEmpty(openingExtent)) return;
      var compact = window.innerWidth < 900;
      map.getView().fit(openingExtent, {
        padding: compact ? [36, 28, 132, 28] : [58, 430, 58, 245],
        maxZoom: 12,
        duration: 0
      });
    };
    window.setTimeout(function () { fitOpeningContext(0); }, 250);
  }

  // Estado de abertura/fechamento da árvore ao abrir o link (igual ao print
  // de referência): 01 e 02 abertos no primeiro nível, subgrupos fechados.
  group_01_BASES_DADOS_GERAIS.set("openInLayerSwitcher", true);
  group_011_Base_Oficial_Aura.set("openInLayerSwitcher", false);
  group_012_Bases_Complementares.set("openInLayerSwitcher", false);
  group_02_ORDENS_SERVIOS.set("openInLayerSwitcher", true);
  limitsGroup.set("openInLayerSwitcher", false);
  ordered.forEach(function (osGroup) { osGroup.set("openInLayerSwitcher", false); });
  group_98_HISTORICO.set("openInLayerSwitcher", false);
  group_99_IMAGENS_SENSOR_REMOTO.set("openInLayerSwitcher", false);
})();
