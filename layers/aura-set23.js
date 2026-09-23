(function () {
  "use strict";
  var meta=window.AURA_SET23_META, data=window.AURA_SET23_DATA;
  if (!meta || !data || !window.AURA_CATALOGO) return;
  function make(key) {
    var source=new ol.source.Vector({features:new ol.format.GeoJSON().readFeatures(data,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});
    var layer=new ol.layer.Vector({source:source,visible:false,permalink:key,style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255,255,255,0.02)"}),stroke:new ol.style.Stroke({color:"#222222",width:3,lineDash:[8,4]})})});
    source.getFeatures().forEach(function(f,i){f.set("layerObject",layer);f.set("idO",i);});
    layer.set("auraOsId","os-01-04");layer.set("interactive",key.indexOf("limite_")===0);return layer;
  }
  window.AURA_EXTRA_OS_LAYERS=(window.AURA_EXTRA_OS_LAYERS||[]).concat([make("limite_set23_sul_pdf"),make("set23_sul_tema")]);
  window.AURA_VETORES.ordens["OS 01.04"]=meta.vetorSul;
  var fl=window.AURA_VETORES.ordens["OS 01.03"];
  if(fl){fl.tituloPacote="SHP anterior V1 — SHP V2 pendente";fl.formatoPacote="SHP anterior V1";fl.ressalvas="PDFs V2 de 23/09/2026 disponíveis. O SHP e o KML existentes pertencem à versão anterior; aguarda-se o vetor original da revisão V2.";}
  if(fl && window.AURA_TITULARIDADE.ordens["OS 01.03"])window.AURA_TITULARIDADE.ordens["OS 01.03"].vetores=fl;
  window.AURA_CATALOGO.ordens.forEach(function(os){
    var record=window.AURA_TITULARIDADE.ordens[os.codigo];
    if(record)record.produtos=os.produtos;
  });
  if(window.AURA_DASHBOARD){window.AURA_DASHBOARD.atualizadoEm="23/09/2026";window.AURA_DASHBOARD.indicadores.ordensServico=window.AURA_CATALOGO.ordens.length;window.AURA_DASHBOARD.indicadores.produtosVigentes=window.AURA_CATALOGO.ordens.reduce(function(n,o){return n+o.produtos.length;},0);}
  document.addEventListener("click",function(event){
    var link=event.target.closest && event.target.closest("a[href]");
    if(!link||link.dataset.auraSkipPreview||link.hasAttribute("download")||/baixar|download/i.test(link.textContent))return;
    var doc=meta.documentos.find(function(d){return d.pdfViewUrl===link.getAttribute("href");});if(!doc)return;
    event.preventDefault();event.stopPropagation();
    var dialog=document.createElement("dialog");dialog.className="aura-os05-pdf";dialog.setAttribute("aria-label",doc.titulo);
    var header=document.createElement("header"),title=document.createElement("strong"),close=document.createElement("button");
    title.textContent=doc.titulo+" — "+doc.rotuloVersao;close.textContent="Fechar PDF";close.type="button";close.onclick=function(){dialog.close();};header.append(title,close);
    var frame=document.createElement("iframe");frame.title=title.textContent;
    frame.src="https://drive.google.com/file/d/"+doc.driveId+"/preview";
    var drive=document.createElement("a");drive.href=doc.pdfViewUrl;drive.target="_blank";drive.rel="noopener noreferrer";drive.dataset.auraSkipPreview="true";drive.textContent="Abrir original no Google Drive";
    var local=document.createElement("button");local.type="button";local.textContent="Se o Drive não carregar, visualizar cópia deste site";local.onclick=function(){frame.src=doc.local;};
    dialog.append(header,frame);if(doc.observacao){var note=document.createElement("p");note.textContent=doc.observacao;dialog.append(note);}dialog.append(drive,local);document.body.append(dialog);dialog.addEventListener("close",function(){dialog.remove();});dialog.showModal();
  },true);
})();
