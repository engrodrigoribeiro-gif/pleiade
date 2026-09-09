(function () {
  "use strict";
  var data = window.AURA_OS05_DATA, meta = window.AURA_OS05_META;
  if (!data || !meta || !window.AURA_CATALOGO) return;
  var os = window.AURA_CATALOGO.ordens.find(function (entry) { return entry.id === "os-05-01"; });
  if (!os) return;
  var colors = {
    "Área da Propriedade Rural": ["rgba(255,255,255,0.02)", "#000000"],
    "Área de Vegetação Nativa": ["rgba(51,160,44,0.72)", "#24731f"],
    "Área Consolidada": ["rgba(251,154,153,0.72)", "#b86665"],
    "Área Antropizada após 22/07/2008": ["rgba(255,127,0,0.76)", "#b75b00"],
    "Área de Uso Alternativo": ["rgba(171,86,204,0.72)", "#753b8d"],
    "Hidrografia do Imóvel": ["rgba(0,0,204,0.78)", "#00007f"],
    "Área de Preservação Permanente a preservar": ["rgba(0,224,41,0.62)", "#009b1c"],
    "Área de Preservação Permanente a recuperar": ["rgba(255,255,255,0.06)", "#00e029"]
  };
  function makeLayer(features, permalink, style) {
    var source = new ol.source.Vector({features:new ol.format.GeoJSON().readFeatures({type:"FeatureCollection", features:features}, {dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});
    var layer = new ol.layer.Vector({source:source,visible:false,permalink:permalink,style:style});
    source.getFeatures().forEach(function (f,i) { f.set("layerObject",layer); f.set("idO",i); });
    layer.set("auraOsId",os.id);
    return layer;
  }
  var limit = makeLayer(data.features.filter(function(f){return f.properties.NOME === "Área da Propriedade Rural";}),"limite_os05_limit_05_01");
  var styles = {};
  var thematic = makeLayer(data.features,"V1_Fz_Galileia_02092026",function(f){
    var name=f.get("NOME"), active=f.get("layerObject").get("activeSymbology");
    if(active && active.values && active.values.indexOf(name) === -1) return null;
    if(!styles[name]) { var c=colors[name];styles[name]=new ol.style.Style({fill:new ol.style.Fill({color:c[0]}),stroke:new ol.style.Stroke({color:c[1],width:name === "Área da Propriedade Rural" ? 3 : 1.5})}); }
    return styles[name];
  });
  thematic.set("auraWarning",meta.vetores.ressalvas);
  window.AURA_EXTRA_OS_LAYERS = (window.AURA_EXTRA_OS_LAYERS || []).concat([limit,thematic]);
  window.AURA_VETORES = window.AURA_VETORES || {ordens:{}};
  window.AURA_VETORES.ordens[os.codigo]=meta.vetores;
  window.AURA_TITULARIDADE = window.AURA_TITULARIDADE || {ordens:{}};
  window.AURA_TITULARIDADE.ordens[os.codigo]=Object.assign({},meta.titularidade || {},{
    codigo:os.codigo, imovel:os.imovel, atualizadoEm:meta.atualizadoEm,
    statusTitularidade:"Documentos de titularidade ainda não recebidos",
    ressalvas:"Área do limite vetorial: 1.366,9107 ha. Matrículas citadas na análise de perímetro não equivalem a documentos de titularidade recebidos.",
    documentos:[],produtos:os.produtos,vetores:meta.vetores,pendencias:meta.pendencias
  });
  if(window.AURA_DASHBOARD) {
    window.AURA_DASHBOARD.atualizadoEm="09/09/2026";
    window.AURA_DASHBOARD.indicadores.ordensServico=window.AURA_CATALOGO.ordens.length;
    window.AURA_DASHBOARD.indicadores.produtosVigentes=window.AURA_CATALOGO.ordens.reduce(function(n,o){return n+(o.produtos||[]).filter(function(p){return p.status === "vigente";}).length;},0);
  }
  // Preview is separate from download, for both local PDFs and Drive.
  document.addEventListener("click", function(event) {
    var link=event.target.closest && event.target.closest("a[href]");
    if(!link || link.dataset.auraSkipPreview || link.hasAttribute("download") || /baixar|download/i.test(link.textContent)) return;
    var doc=meta.documentos.find(function(d){return link.getAttribute("href")===d.pdfViewUrl;});
    if(!doc)return;
    event.preventDefault();event.stopPropagation();
    var dialog=document.createElement("dialog");dialog.className="aura-os05-pdf";
    dialog.setAttribute("aria-label",doc.titulo+" V"+doc.versao);
    var heading=document.createElement("header"),title=document.createElement("strong");title.textContent=doc.titulo+" V"+doc.versao;
    var close=document.createElement("button");close.textContent="Fechar PDF";close.type="button";
    close.onclick=function(){dialog.close();};
    heading.append(title,close);
    var frame=document.createElement("iframe");frame.title=title.textContent;
    frame.src=doc.pdfViewUrl.replace(/\/view(?:\?.*)?$/, "/preview");
    var fallback=document.createElement("a");fallback.href=doc.pdfViewUrl;fallback.target="_blank";fallback.rel="noopener noreferrer";fallback.textContent="Abrir PDF em nova aba";
    fallback.dataset.auraSkipPreview="true";
    var note=document.createElement("small");note.textContent="Se o visualizador do Drive não carregar neste navegador, use Abrir PDF em nova aba.";
    dialog.append(heading,frame,note,fallback);document.body.append(dialog);
    dialog.addEventListener("close",function(){dialog.remove();});
    dialog.showModal();
  },true);
})();
