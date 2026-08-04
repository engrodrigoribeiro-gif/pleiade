(function () {
  "use strict";

  function walkLayers(collection, callback) {
    if (!collection || typeof collection.getArray !== "function") return;
    collection.getArray().forEach(function (layer) {
      if (layer && typeof layer.getLayers === "function") {
        walkLayers(layer.getLayers(), callback);
      } else if (layer) {
        callback(layer);
      }
    });
  }

  function isVectorLayer(layer) {
    return (
      window.ol &&
      ol.layer &&
      ol.layer.Vector &&
      layer instanceof ol.layer.Vector
    );
  }

  function setVectorVisibility(visible) {
    if (!window.map || typeof map.getLayers !== "function") return;
    walkLayers(map.getLayers(), function (layer) {
      if (isVectorLayer(layer) && typeof layer.setVisible === "function") {
        layer.setVisible(visible);
      }
    });
    if (typeof map.render === "function") map.render();
    window.setTimeout(updateLayerCount, 100);
  }

  function updateLayerCount() {
    var count = 0;
    var visible = 0;
    if (window.map && typeof map.getLayers === "function") {
      walkLayers(map.getLayers(), function (layer) {
        if (isVectorLayer(layer)) {
          count += 1;
          if (typeof layer.getVisible === "function" && layer.getVisible()) {
            visible += 1;
          }
        }
      });
    }
    var label = document.querySelector(".aura-layer-count");
    if (label) {
      label.textContent = visible + " de " + count + " visíveis";
      label.title = visible + " de " + count + " vetores visíveis";
    }
  }

  function filterLayers(value) {
    var panel = document.querySelector(".ol-layerswitcher .panel");
    if (!panel) return;
    var query = value.trim().toLocaleLowerCase("pt-BR");
    var items = Array.prototype.slice.call(panel.querySelectorAll("li"));
    var matches = 0;

    items.forEach(function (item) {
      var label = item.querySelector(":scope > .li-content label");
      var ownText = label ? label.textContent : "";
      var descendantMatch = Array.prototype.some.call(
        item.querySelectorAll("li label"),
        function (childLabel) {
          return childLabel.textContent
            .toLocaleLowerCase("pt-BR")
            .includes(query);
        }
      );
      var show =
        !query ||
        ownText.toLocaleLowerCase("pt-BR").includes(query) ||
        descendantMatch;
      item.style.display = show ? "" : "none";
      if (show && label && ownText.toLocaleLowerCase("pt-BR").includes(query)) {
        matches += 1;
      }
    });

    var empty = document.querySelector(".aura-layer-empty");
    if (empty) empty.classList.toggle("is-visible", !!query && matches === 0);
  }

  function createButton(text, handler) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "aura-layer-action";
    button.textContent = text;
    button.addEventListener("click", handler);
    return button;
  }

  function markUnavailableSources(panel) {
    var unavailable = [
      "Fund_Palmares_Almas",
      "Fund_Palmares_DIanopolis",
      "Fund_Palmares_Porto_Alegre_do_Tocantins",
    ];

    Array.prototype.forEach.call(panel.querySelectorAll("li"), function (item) {
      var content = item.querySelector(":scope > .li-content");
      var label = content && content.querySelector("label");
      if (!label) return;
      var text = label.textContent.trim();
      if (!unavailable.some(function (name) {
        return text.includes(name);
      })) {
        return;
      }

      item.classList.add("aura-source-unavailable");
      var input = content.querySelector("input");
      if (input) {
        input.disabled = true;
        input.checked = false;
      }
      var badge = document.createElement("span");
      badge.className = "aura-source-badge";
      badge.textContent = "sem fonte";
      label.appendChild(badge);
    });
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function osSequenceReference(os) {
    var ordens = (window.AURA_CATALOGO && window.AURA_CATALOGO.ordens) || [];
    var index = ordens.findIndex(function (entry) {
      return entry.id === os.id || entry.codigo === os.codigo;
    });
    var match = String(os.codigo || "").match(/(\d+)\.(\d+)/);
    var code = match ? "OS." + match[1] + "-" + match[2] : String(os.codigo || "");
    return (index >= 0 ? (index + 1) + " - " : "") + code;
  }

  function externalLink(label, url, className) {
    var link = element("a", className || "aura-os-link", label);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    if (/download/i.test(label)) link.setAttribute("download", "");
    return link;
  }

  function layersForOs(id) {
    var found = [];
    if (!window.map) return found;
    walkLayers(map.getLayers(), function (layer) {
      if (typeof layer.get === "function" && layer.get("auraOsId") === id) {
        found.push(layer);
      }
    });
    return found;
  }

  function locateOs(os) {
    var extent = ol.extent.createEmpty();
    var hasExtent = false;
    layersForOs(os.id).forEach(function (layer) {
      var source = typeof layer.getSource === "function" && layer.getSource();
      if (!source || typeof source.getExtent !== "function") return;
      var layerExtent = source.getExtent();
      if (layerExtent && !ol.extent.isEmpty(layerExtent)) {
        ol.extent.extend(extent, layerExtent);
        hasExtent = true;
      }
      layer.setVisible(true);
    });
    if (hasExtent) {
      map.getView().fit(extent, {
        padding: [72, 440, 72, 72],
        maxZoom: 16,
        duration: 500,
      });
    }
  }

  function openOsPanel(os) {
    var dashboardData = window.AURA_DASHBOARD || {};
    var documentsByOs = dashboardData.documentosPorOs || {};
    var titularidadeData = (window.AURA_TITULARIDADE && window.AURA_TITULARIDADE.ordens && window.AURA_TITULARIDADE.ordens[os.codigo]) || {};
    var vectorData = (window.AURA_VETORES && window.AURA_VETORES.ordens && window.AURA_VETORES.ordens[os.codigo]) || {};
    if (titularidadeData.documentos) os.documentosTitularidade = titularidadeData.documentos;
    if (titularidadeData.produtos) os.produtos = titularidadeData.produtos;
    if ((!os.documentosTitularidade || !os.documentosTitularidade.length) && documentsByOs[os.codigo]) {
      os.documentosTitularidade = documentsByOs[os.codigo];
    }
    var panel = document.querySelector(".aura-os-panel");
    if (!panel || !os) return;
    panel.replaceChildren();
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");

    var header = element("header", "aura-os-panel-header");
    var identity = element("div", "aura-os-identity");
    identity.appendChild(element("span", "aura-os-code", osSequenceReference(os)));
    identity.appendChild(element("h2", "", os.imovel));
    if (os.responsavel) identity.appendChild(element("p", "", os.responsavel));
    var close = createButton("Fechar", function () {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
    });
    close.classList.add("aura-os-close");
    header.appendChild(identity);
    header.appendChild(close);
    panel.appendChild(header);

    var meta = element("div", "aura-os-meta");
    meta.appendChild(element("span", "", "Atualizado em " + (titularidadeData.atualizadoEm || (os.camada && os.camada.revisao) || "-")));
    meta.appendChild(element("span", "", os.produtos.length + " produto(s) vigente(s)"));
    panel.appendChild(meta);

    var actions = element("div", "aura-os-actions");
    var locate = createButton("Localizar no mapa", function () { locateOs(os); });
    locate.classList.add("is-primary");
    actions.appendChild(locate);
    actions.appendChild(externalLink("Abrir pasta no Drive", os.driveFolderUrl, "aura-layer-action"));
    panel.appendChild(actions);

    var vetores = titularidadeData.vetores || vectorData;
    panel.appendChild(element("h3", "aura-os-section-title", "Dados vetoriais vigentes"));
    if (vetores && (vetores.shpDownloadUrl || vetores.kmlDownloadUrl)) {
      var vectorCard = element("article", "aura-product-card aura-vector-card");
      var vectorHeading = element("div", "aura-product-heading");
      vectorHeading.appendChild(element("strong", "", "Pacote vetorial completo"));
      vectorHeading.appendChild(element("span", "aura-version", vetores.versao || "Vigente"));
      vectorCard.appendChild(vectorHeading);
      vectorCard.appendChild(element("p", "aura-os-data-note", "Revisão: " + (vetores.revisao || "não informada")));
      var vectorLinks = element("div", "aura-product-links aura-vector-links");
      if (vetores.shpDownloadUrl) vectorLinks.appendChild(externalLink("Baixar SHP completo (.zip)", vetores.shpDownloadUrl));
      if (vetores.kmlDownloadUrl) vectorLinks.appendChild(externalLink("Download KML", vetores.kmlDownloadUrl));
      vectorCard.appendChild(vectorLinks);
      panel.appendChild(vectorCard);
    } else {
      panel.appendChild(element("p", "aura-os-pending-note", "Pacote vetorial ainda não vinculado à base consolidada."));
    }

    panel.appendChild(element("h3", "aura-os-section-title", "Titularidade"));
    var titularidade = element("dl", "aura-os-titularidade");
    [
      ["Responsável/recorte", os.responsavel],
      ["Proprietário informado", titularidadeData.proprietarioInformado || os.proprietario],
      ["Titular registral", titularidadeData.titularConfirmado],
      ["Matrícula(s)", titularidadeData.matriculas || os.matricula],
      ["CAR/TO", titularidadeData.carTo || os.car],
      ["CAR federal", titularidadeData.carFederal],
      ["Telefone", titularidadeData.telefone],
      ["Situação", titularidadeData.statusTitularidade],
    ].forEach(function (pair) {
      titularidade.appendChild(element("dt", "", pair[0]));
      var value = element("dd", pair[1] ? "" : "is-pending", pair[1] || "Pendente de confirmação");
      titularidade.appendChild(value);
    });
    panel.appendChild(titularidade);
    if (titularidadeData.ressalvas) panel.appendChild(element("p", "aura-os-pending-note", titularidadeData.ressalvas));

    panel.appendChild(element("h3", "aura-os-section-title", "Documentos de titularidade"));
    if (os.documentosTitularidade && os.documentosTitularidade.length) {
      var docList = element("div", "aura-product-list");
      os.documentosTitularidade.forEach(function (doc) {
        var docCard = element("article", "aura-product-card");
        docCard.appendChild(element("strong", "", doc.titulo || ((doc.tipo || "Documento") + (doc.numero ? " " + doc.numero : ""))));
        if (doc.denominacao) docCard.appendChild(element("p", "", doc.denominacao));
        if (doc.paginas) docCard.appendChild(element("p", "aura-os-data-note", doc.paginas + " página(s)"));
        var docLinks = element("div", "aura-product-links");
        if (doc.viewUrl) docLinks.appendChild(externalLink("Visualizar", doc.viewUrl));
        if (doc.downloadUrl) docLinks.appendChild(externalLink("Download", doc.downloadUrl));
        docCard.appendChild(docLinks);
        docList.appendChild(docCard);
      });
      panel.appendChild(docList);
    } else {
      panel.appendChild(element("p", "aura-os-pending-note", "Nenhum documento de titularidade está vinculado a esta OS na base consolidada."));
    }

    panel.appendChild(element("h3", "aura-os-section-title", "Produtos atuais"));

    var list = element("div", "aura-product-list");
    os.produtos.forEach(function (product) {
      var card = element("article", "aura-product-card");
      var heading = element("div", "aura-product-heading");
      heading.appendChild(element("strong", "", product.titulo));
      heading.appendChild(element("span", "aura-version", "V" + product.versaoVigente));
      card.appendChild(heading);
      card.appendChild(element("time", "", product.data));
      var links = element("div", "aura-product-links");
      links.appendChild(externalLink("Visualizar PDF", product.pdfViewUrl));
      links.appendChild(externalLink("Download", product.pdfDownloadUrl));
      card.appendChild(links);
      if (product.historico && product.historico.length) {
        var history = element("details", "aura-product-history");
        history.appendChild(element("summary", "", "Histórico substituído (" + product.historico.length + ")"));
        product.historico.forEach(function (old) {
          history.appendChild(externalLink("V" + old.versao + " · " + old.data, old.pdfViewUrl));
        });
        card.appendChild(history);
      }
      list.appendChild(card);
    });
    panel.appendChild(list);

    panel.appendChild(element("h3", "aura-os-section-title", "Medição contratual"));
    if (titularidadeData.medicao) {
      var measurement = element("dl", "aura-os-titularidade");
      [
        ["Boletim", titularidadeData.medicao.boletim], ["Contrato", titularidadeData.medicao.contrato],
        ["Período", titularidadeData.medicao.periodo], ["Município", titularidadeData.medicao.municipio],
        ["Proprietário/possuidor no BM", titularidadeData.medicao.proprietarioPossuidor],
        ["Matrícula(s) no BM", titularidadeData.medicao.matriculas], ["Área medida (ha)", titularidadeData.medicao.areaHa],
        ["Produtos vinculados", titularidadeData.medicao.produtosVinculados], ["Status", titularidadeData.medicao.status]
      ].forEach(function (pair) {
        measurement.appendChild(element("dt", "", pair[0]));
        measurement.appendChild(element("dd", pair[1] === "" || pair[1] == null ? "is-pending" : "", pair[1] === "" || pair[1] == null ? "Não informado" : String(pair[1])));
      });
      panel.appendChild(measurement);
    } else panel.appendChild(element("p", "aura-os-pending-note", "Nenhuma medição vinculada a esta OS na planilha consolidada."));

    panel.appendChild(element("h3", "aura-os-section-title", "Pendências para completude"));
    if (titularidadeData.pendencias && titularidadeData.pendencias.length) {
      var pendingList = element("div", "aura-product-list");
      titularidadeData.pendencias.forEach(function (pending) {
        var pendingCard = element("article", "aura-product-card aura-pending-card");
        pendingCard.appendChild(element("strong", "", pending.tipo + " - prioridade " + pending.prioridade));
        pendingCard.appendChild(element("p", "", pending.descricao));
        pendingCard.appendChild(element("p", "aura-os-data-note", "Responsável: " + pending.responsavel + " | Status: " + pending.status));
        pendingList.appendChild(pendingCard);
      });
      panel.appendChild(pendingList);
    } else panel.appendChild(element("p", "aura-os-data-note", "Sem pendência registrada na base consolidada."));

    panel.appendChild(element("h3", "aura-os-section-title", "Dados vetoriais e KML"));
    var vectorCard = element("article", "aura-product-card");
    vectorCard.appendChild(element("strong", "", vectorData.status || "Vetor canônico pendente"));
    if (vectorData.arquivo) vectorCard.appendChild(element("p", "", vectorData.arquivo));
    if (vectorData.fonte && /^https?:/i.test(vectorData.fonte)) vectorCard.appendChild(externalLink("Baixar KML canônico", vectorData.fonte));
    else if (vectorData.fonte) vectorCard.appendChild(element("p", "aura-os-data-note", "Fonte preservada: " + vectorData.fonte));
    panel.appendChild(vectorCard);
  }

  function installLimitPopup() {
    var supportedCodes = (window.AURA_CATALOGO && window.AURA_CATALOGO.ordens || []).map(function (os) {
      return os.codigo;
    });

    function escapePopupHtml(value) {
      return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
      });
    }

    function formatDate(value) {
      if (!value) return "Data não informada";
      var parts = String(value).split("-");
      return parts.length === 3 ? parts[2] + "/" + parts[1] + "/" + parts[0] : String(value);
    }

    function findPilotForLayer(layer) {
      if (!layer || typeof layer.get !== "function" || !layer.get("auraLimitColor")) return null;
      var osId = layer.get("auraOsId");
      return (window.AURA_CATALOGO && window.AURA_CATALOGO.ordens || []).find(function (item) {
        return item.id === osId && supportedCodes.indexOf(item.codigo) !== -1;
      }) || null;
    }

    function renderProducts(os) {
      var data = window.AURA_TITULARIDADE && window.AURA_TITULARIDADE.ordens && window.AURA_TITULARIDADE.ordens[os.codigo] || {};
      var products = (data.produtos || os.produtos || []).filter(function (product) {
        return product.status === "vigente" && product.pdfViewUrl;
      });
      var rows = products.map(function (product) {
        var download = product.pdfDownloadUrl ? '<a href="' + escapePopupHtml(product.pdfDownloadUrl) + '" target="_blank" rel="noopener noreferrer" download>Download</a>' : "";
        return '<section class="aura-map-product-item"><div class="aura-map-product-identity">' +
          '<strong>' + escapePopupHtml(product.titulo) + '</strong><span>V' + escapePopupHtml(product.versaoVigente) +
          ' &middot; ' + escapePopupHtml(formatDate(product.data)) + '</span></div><div class="aura-map-product-links">' +
          '<a href="' + escapePopupHtml(product.pdfViewUrl) + '" target="_blank" rel="noopener noreferrer">Visualizar PDF</a>' + download +
          '</div></section>';
      }).join("");
      if (!rows) rows = '<p class="aura-os-pending-note">Nenhuma carta aprovada est&aacute; vinculada a esta OS.</p>';
      return '<article class="aura-map-product-popup"><header class="aura-map-product-header">' +
        '<span class="aura-map-product-code">' + escapePopupHtml(osSequenceReference(os)) + '</span><h2>' +
        escapePopupHtml(os.imovel + (os.responsavel ? " — " + os.responsavel : "")) +
        '</h2></header><p class="aura-map-product-intro">Cartas aprovadas — versões vigentes</p>' +
        '<div class="aura-map-product-list">' + rows + '</div></article>';
    }

    window.AURA_LIMIT_POPUP = {
      supportedCodes: supportedCodes.slice(),
      templateForFeature: function (feature, layer) {
        var os = findPilotForLayer(layer);
        if (!os || !feature || typeof feature.set !== "function") return null;
        var html = renderProducts(os);
        feature.set("_auraCartasVigentes", html, true);
        return {
          title: function () {
            return escapePopupHtml(osSequenceReference(os) + " — " + os.imovel + (os.responsavel ? " — " + os.responsavel : ""));
          },
          attributes: {
            "_auraCartasVigentes": {
              title: '<span class="aura-popup-product-label">Produtos</span>',
              format: function () { return html; }
            }
          }
        };
      }
    };
  }

  function enhanceOsEntries(panel) {
    Array.prototype.forEach.call(panel.querySelectorAll("li"), function (item) {
      if (item.dataset.auraOsButton === "true") return;
      if (!item.querySelector(":scope > ul")) return;
      var label = item.querySelector(":scope > .li-content label");
      if (!label) return;
      var text = label.textContent.trim();
      var os = (window.AURA_CATALOGO && window.AURA_CATALOGO.ordens || []).find(function (entry) {
        return text.indexOf(entry.codigo) === 0;
      });
      if (!os) return;
      item.dataset.auraOsButton = "true";
      var button = createButton("Detalhes", function (event) {
        event.stopPropagation();
        openOsPanel(os);
      });
      button.classList.add("aura-os-detail");
      item.querySelector(":scope > .li-content").appendChild(button);
    });
  }

  function normalizeText(value) {
    return String(value || "")
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function productVersionLabel(product, suffix) {
    if (!product) return "—";
    var label = "V" + product.versaoVigente;
    if (suffix) label += " " + suffix;
    if (product.historico && product.historico.length) label += " · " + product.historico.length + " ant.";
    return label;
  }

  function buildProductMatrix(os) {
    var products = os.produtos || [];
    function find(type) { return products.find(function (product) { return product.tipo === type; }); }
    var interventionParts = [];
    var general = find("intervencoes-gerais");
    var sondagens = find("intervencoes-sondagens");
    var proposta = find("intervencoes-proposta-car");
    if (general) interventionParts.push(productVersionLabel(general, "geral"));
    if (sondagens) interventionParts.push(productVersionLabel(sondagens, "sond."));
    if (proposta) interventionParts.push(productVersionLabel(proposta, "proposta"));

    var matrix = element("div", "aura-property-product-matrix");
    [
      ["CAR atual", productVersionLabel(find("diagnostico-car-atual"))],
      ["Intervenções", interventionParts.length ? interventionParts.join(" + ") : "—"],
      ["Proposta CAR", productVersionLabel(find("proposta-car"))],
      ["Perímetro", productVersionLabel(find("proposta-perimetro"))]
    ].forEach(function (cellData) {
      var cell = element("span", "aura-property-product-cell" + (cellData[1] === "—" ? " is-absent" : ""));
      cell.appendChild(element("small", "", cellData[0]));
      cell.appendChild(element("b", "", cellData[1]));
      matrix.appendChild(cell);
    });
    return matrix;
  }

  function renderImoveisList(filterValue) {
    var container = document.querySelector(".aura-imoveis-list");
    if (!container) return;
    var ordens = (window.AURA_CATALOGO && window.AURA_CATALOGO.ordens) || [];
    var query = normalizeText(filterValue);
    container.replaceChildren();

    var matches = ordens.filter(function (os) {
      if (!query) return true;
      var haystack = normalizeText(
        [osSequenceReference(os), os.codigo, os.imovel, os.responsavel, os.proprietario, os.matricula].join(" ")
      );
      return haystack.indexOf(query) !== -1;
    });

    if (!matches.length) {
      container.appendChild(element("p", "aura-os-pending-note", "Nenhum imóvel encontrado para essa busca."));
      return;
    }

    var lastGroup = null;
    matches.forEach(function (os) {
      var groupClass = "aura-group-" + String(os.grupo || "").toLowerCase().replace(/\s+/g, "-");
      if (os.grupo !== lastGroup) {
        lastGroup = os.grupo;
        var groupLabel = os.grupo + (os.grupoTitulo ? " — " + os.grupoTitulo : "");
        container.appendChild(element("div", "aura-imoveis-group-title " + groupClass, groupLabel));
      }
      var row = element("button", "aura-imovel-row " + groupClass);
      row.type = "button";
      var identity = element("span", "aura-imovel-identity");
      identity.appendChild(element("span", "aura-os-code", osSequenceReference(os)));
      identity.appendChild(element("span", "aura-imovel-nome", os.imovel + (os.responsavel ? " — " + os.responsavel : "")));
      row.appendChild(identity);
      row.appendChild(buildProductMatrix(os));
      row.addEventListener("click", function () {
        openOsPanel(os);
      });
      container.appendChild(row);
    });
  }

  function initImoveisTab() {
    var search = document.querySelector(".aura-imoveis-search");
    if (!search || search.dataset.auraBound === "true") return;
    search.dataset.auraBound = "true";
    createOsPanel();
    renderImoveisList("");
    search.addEventListener("input", function () {
      renderImoveisList(search.value);
    });
  }

  function renderDashboard() {
    var container = document.querySelector(".aura-dashboard");
    var data = window.AURA_DASHBOARD;
    if (!container || !data || container.dataset.rendered === "true") return;
    container.dataset.rendered = "true";

    var intro = element("div", "aura-dashboard-intro");
    intro.appendChild(element("span", "aura-dashboard-eyebrow", "Visão operacional"));
    intro.appendChild(element("h2", "", "Ordens de Serviço, documentos e produtos"));
    intro.appendChild(element("p", "", "Acompanhamento consolidado do contrato. Os dados financeiros das medições não são exibidos."));
    container.appendChild(intro);

    var cards = element("section", "aura-kpi-grid");
    cards.setAttribute("aria-label", "Indicadores do contrato");
    [
      ["Ordens de Serviço", data.indicadores.ordensServico],
      ["Produtos vigentes", data.indicadores.produtosVigentes],
      ["OS com documento", data.indicadores.osComDocumento],
      ["Documentos únicos", data.indicadores.documentosUnicos],
      ["Contatos informados", data.indicadores.contatosInformados],
      ["Aguardando Athos", data.indicadores.aguardandoAthos]
    ].forEach(function (item) {
      var card = element("article", "aura-kpi-card");
      card.appendChild(element("strong", "", String(item[1])));
      card.appendChild(element("span", "", item[0]));
      cards.appendChild(card);
    });
    container.appendChild(cards);

    var measurement = data.medicao;
    var summary = element("section", "aura-measurement-summary");
    var summaryHead = element("div", "aura-measurement-head");
    var summaryTitle = element("div", "");
    summaryTitle.appendChild(element("span", "aura-dashboard-eyebrow", "Medição realizada"));
    summaryTitle.appendChild(element("h3", "", measurement.boletim));
    summaryHead.appendChild(summaryTitle);
    summaryHead.appendChild(element("span", "aura-measurement-status", "Medida"));
    summary.appendChild(summaryHead);

    var facts = element("dl", "aura-measurement-facts");
    [
      ["Contrato", measurement.contrato],
      ["Período", measurement.periodo],
      ["OS medidas", measurement.osMedidas],
      ["Produtos vinculados", measurement.produtosVinculados]
    ].forEach(function (fact) {
      facts.appendChild(element("dt", "", fact[0]));
      facts.appendChild(element("dd", "", String(fact[1])));
    });
    summary.appendChild(facts);
    summary.appendChild(element("p", "aura-measurement-note", measurement.observacao));
    container.appendChild(summary);

    var audit = element("section", "aura-product-audit-note");
    audit.appendChild(element("span", "aura-dashboard-eyebrow", "Revisão dos produtos"));
    audit.appendChild(element("strong", "", "92 PDFs conferidos: 83 vigentes e 9 históricos"));
    audit.appendChild(element("p", "", "Seis registros têm divergência entre a versão ou o título interno do PDF e a classificação do catálogo. Eles permanecem sinalizados para revisão, sem alteração automática."));
    container.appendChild(audit);

    var openMatrix = createButton("Consultar produtos por imóvel", function () {
      if (window.sidebar && typeof sidebar.open === "function") sidebar.open("imoveis");
    });
    openMatrix.classList.add("aura-dashboard-primary-action");
    container.appendChild(openMatrix);
  }

  function setLegendHiddenByDashboard(hidden) {
    var switcher = document.querySelector(".ol-layerswitcher");
    if (!switcher) return;
    switcher.classList.toggle("aura-hidden-by-dashboard", hidden);
    if (!hidden && window.matchMedia("(min-width: 821px)").matches) {
      switcher.classList.add("ol-forceopen");
    }
  }

  function hookSidebarDashboardToggle() {
    if (!window.sidebar || typeof sidebar.open !== "function" || sidebar.dataset_auraHooked) return;
    sidebar.dataset_auraHooked = true;
    var originalOpen = sidebar.open.bind(sidebar);
    var originalClose = sidebar.close.bind(sidebar);
    sidebar.open = function (id) {
      originalOpen(id);
      setLegendHiddenByDashboard(id === "imoveis" || id === "dashboard");
      return sidebar;
    };
    sidebar.close = function () {
      originalClose();
      setLegendHiddenByDashboard(false);
      return sidebar;
    };
  }

  function enhanceCartographicStatus() {
    var container = document.getElementById("bottom-left-container");
    var rail = document.querySelector(".aura-sidebar-tabs");
    if (!container || !rail || container.dataset.auraStatus === "true" || !window.map) return;
    container.dataset.auraStatus = "true";

    var dock = element("section", "aura-cartographic-dock");
    dock.setAttribute("aria-label", "Orientação e informações cartográficas");

    var title = element("span", "aura-cartographic-title", "Orientação do mapa");
    dock.appendChild(title);

    var rotationRow = element("div", "aura-rotation-row");
    var rotateWest = element("button", "aura-rotate-step aura-rotate-west");
    rotateWest.innerHTML = '<svg class="aura-status-rotate-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7H3v-4"/><path d="M3.5 7.2A9 9 0 1 1 5 18"/></svg>';
    rotateWest.type = "button";
    rotateWest.title = "Girar o mapa 15° para oeste";
    rotateWest.setAttribute("aria-label", rotateWest.title);
    var rotateEast = element("button", "aura-rotate-step aura-rotate-east");
    rotateEast.innerHTML = '<svg class="aura-status-rotate-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 7h4v-4"/><path d="M20.5 7.2A9 9 0 1 0 19 18"/></svg>';
    rotateEast.type = "button";
    rotateEast.title = "Girar o mapa 15° para leste";
    rotateEast.setAttribute("aria-label", rotateEast.title);

    var north = container.querySelector(".ol-rotate");
    if (north) {
      var northButton = north.querySelector("button");
      if (northButton) {
        northButton.innerHTML = '<span class="ol-compass aura-north-mark" aria-hidden="true"><img src="./resources/icons/north-arrow.svg" alt=""></span>';
        northButton.title = "Retornar o mapa ao norte";
        northButton.setAttribute("aria-label", northButton.title);
      }
      rotationRow.appendChild(rotateWest);
      rotationRow.appendChild(north);
      rotationRow.appendChild(rotateEast);
    }
    dock.appendChild(rotationRow);

    function rotateBy(degrees) {
      var view = map.getView();
      view.animate({ rotation: view.getRotation() + degrees * Math.PI / 180, duration: 220 });
    }
    rotateWest.addEventListener("click", function () { rotateBy(-15); });
    rotateEast.addEventListener("click", function () { rotateBy(15); });

    var scale = container.querySelector(".ol-scale-line");
    if (scale) {
      var scaleRow = element("div", "aura-status-row aura-scale-row");
      scaleRow.appendChild(element("span", "aura-status-label", "Escala"));
      scaleRow.appendChild(scale);
      dock.appendChild(scaleRow);
    }

    var coordinates = element("output", "aura-coordinate-readout");
    coordinates.setAttribute("aria-label", "Coordenada geográfica");
    coordinates.title = "Coordenadas geográficas em latitude e longitude (WGS 84)";
    var coordinateRow = element("div", "aura-status-row aura-coordinate-row");
    coordinateRow.appendChild(element("span", "aura-status-label", "Coordenadas"));
    coordinateRow.appendChild(coordinates);
    dock.appendChild(coordinateRow);

    var permalinkControl = container.querySelector(".ol-permalink");
    if (permalinkControl) {
      var permalinkButton = permalinkControl.querySelector("button");
      if (permalinkButton) {
        permalinkButton.innerHTML = '<svg class="aura-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10.6 13.4a4 4 0 0 0 5.7 0l2.1-2.1a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M13.4 10.6a4 4 0 0 0-5.7 0l-2.1 2.1a4 4 0 0 0 5.7 5.7l1.2-1.2"/></svg>';
        permalinkButton.title = "Copiar link desta visualização";
        permalinkButton.setAttribute("aria-label", permalinkButton.title);
      }
      var permalinkRow = element("div", "aura-permalink-row");
      permalinkRow.appendChild(permalinkControl);
      permalinkRow.appendChild(element("span", "aura-permalink-label", "Link desta visualização"));
      dock.appendChild(permalinkRow);
    }

    rail.appendChild(dock);

    function formatCoordinate(coordinate) {
      if (!coordinate) return "Coordenada indisponível";
      var geographic = ol.proj.transform(coordinate, map.getView().getProjection(), "EPSG:4326");
      var longitude = geographic[0];
      var latitude = geographic[1];
      return (
        Math.abs(latitude).toFixed(6) + "° " + (latitude < 0 ? "S" : "N") +
        "  ·  " +
        Math.abs(longitude).toFixed(6) + "° " + (longitude < 0 ? "O" : "L")
      );
    }

    function showMapCenter() {
      coordinates.value = formatCoordinate(map.getView().getCenter());
      coordinates.textContent = coordinates.value;
    }

    map.on("pointermove", function (event) {
      if (event.dragging) return;
      coordinates.value = formatCoordinate(event.coordinate);
      coordinates.textContent = coordinates.value;
    });
    map.on("moveend", showMapCenter);
    showMapCenter();
  }

  function createOsPanel() {
    if (document.querySelector(".aura-os-panel")) return;
    var panel = element("aside", "aura-os-panel");
    panel.setAttribute("aria-hidden", "true");
    panel.setAttribute("aria-label", "Detalhes da Ordem de Serviço");
    document.body.appendChild(panel);
  }

  function enhanceLayerSwitcher() {
    var switcher = document.querySelector(".ol-layerswitcher");
    var panel = document.querySelector(".ol-layerswitcher .panel-container");
    if (!switcher || !panel || switcher.dataset.auraEnhanced === "true") {
      return false;
    }

    switcher.dataset.auraEnhanced = "true";
    var tools = document.createElement("div");
    tools.className = "aura-layer-tools";

    var heading = document.createElement("div");
    heading.className = "aura-layer-heading";
    var title = document.createElement("span");
    title.className = "aura-layer-title";
    title.textContent = "Camadas do mapa";
    var count = document.createElement("span");
    count.className = "aura-layer-count";
    heading.appendChild(title);
    heading.appendChild(count);

    var search = document.createElement("input");
    search.type = "search";
    search.className = "aura-layer-search";
    search.placeholder = "Buscar camada…";
    search.setAttribute("aria-label", "Buscar camada");
    search.addEventListener("input", function () {
      filterLayers(search.value);
    });

    var empty = document.createElement("div");
    empty.className = "aura-layer-empty";
    empty.textContent = "Nenhuma camada encontrada.";

    tools.appendChild(heading);
    tools.appendChild(search);
    switcher.appendChild(tools);
    panel.appendChild(empty);
    markUnavailableSources(panel);
    createOsPanel();
    enhanceOsEntries(panel);

    switcher.addEventListener("change", function () {
      window.setTimeout(updateLayerCount, 40);
    });
    document.addEventListener(
      "click",
      function (event) {
        if (!window.matchMedia("(max-width: 820px)").matches) return;
        var switchButton = switcher.querySelector(":scope > button");
        if (
          !switchButton ||
          (event.target !== switchButton &&
            !switchButton.contains(event.target))
        ) {
          return;
        }
        var willOpen = !switcher.classList.contains("aura-mobile-open");
        event.preventDefault();
        event.stopImmediatePropagation();
        window.setTimeout(function () {
          switcher.classList.toggle("aura-mobile-open", willOpen);
        }, 0);
      },
      true
    );
    updateLayerCount();
    return true;
  }

  function init() {
    installLimitPopup();
    renderDashboard();
    initImoveisTab();
    hookSidebarDashboardToggle();
    enhanceCartographicStatus();
    if (enhanceLayerSwitcher()) return;
    var observer = new MutationObserver(function () {
      if (enhanceLayerSwitcher()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(function () {
      observer.disconnect();
      enhanceLayerSwitcher();
    }, 10000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
