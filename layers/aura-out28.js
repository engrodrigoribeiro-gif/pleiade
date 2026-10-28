(function () {
  'use strict';
  var meta=window.AURA_OUT28_META, data=window.AURA_OUT28_DATA;
  if(!meta||!data||!window.AURA_CATALOGO)return;
  var colors={"Área da Propriedade Rural":["rgba(255,255,255,0.02)","#222"],"Área de Vegetação Nativa":["rgba(51,160,44,0.72)","#24731f"],"Área Consolidada":["rgba(251,154,153,0.72)","#b86665"],"Área Antropizada após 22/07/2008":["rgba(255,127,0,0.76)","#b75b00"],"Área de Uso Alternativo":["rgba(171,86,204,0.72)","#753b8d"],"Hidrografia do Imóvel":["rgba(0,0,204,0.78)","#00007f"],"Área de Preservação Permanente a preservar":["rgba(0,224,41,0.62)","#009b1c"],"Área de Preservação Permanente a recuperar":["rgba(255,255,255,0.06)","#00e029"]};
  function make(limit){
    var features=limit?data.features.filter(function(f){return f.properties.NOME==='Área da Propriedade Rural';}):data.features;
    var source=new ol.source.Vector({features:new ol.format.GeoJSON().readFeatures({type:'FeatureCollection',features:features},{dataProjection:'EPSG:4326',featureProjection:'EPSG:3857'})});
    var layer=new ol.layer.Vector({source:source,visible:false,permalink:limit?'limite_out28_santo':'V1_Fz_Santo_Antonio_19102026',style:function(f){
      var name=f.get('NOME'),active=layer.get('activeSymbology');
      if(active&&active.values&&active.values.indexOf(name)===-1)return null;
      var c=colors[name]||['rgba(255,255,255,0.1)','#333'];return new ol.style.Style({fill:new ol.style.Fill({color:c[0]}),stroke:new ol.style.Stroke({color:c[1],width:name==='Área da Propriedade Rural'?3:1.5})});
    }});
    source.getFeatures().forEach(function(f,i){f.set('layerObject',layer);f.set('idO',i);});
    layer.set('auraOsId','os-02-14');layer.set('interactive',limit);return layer;
  }
  window.AURA_EXTRA_OS_LAYERS=(window.AURA_EXTRA_OS_LAYERS||[]).concat([make(true),make(false)]);
  window.AURA_VETORES.ordens['OS 02.14']=meta.vetorSanto;
  Object.keys(meta.notas).forEach(function(code){var v=window.AURA_VETORES.ordens[code];if(v){v.ressalvas=meta.notas[code];v.tituloPacote=code==='OS 01.02'?'SHP anterior V1 — vetor V2 pendente':'SHP anterior V3 — vetor V4 pendente';}});
  window.AURA_CATALOGO.ordens.forEach(function(o){var r=window.AURA_TITULARIDADE.ordens[o.codigo];if(r){r.produtos=o.produtos;if(window.AURA_VETORES.ordens[o.codigo])r.vetores=window.AURA_VETORES.ordens[o.codigo];}});
  if(window.AURA_DASHBOARD){window.AURA_DASHBOARD.atualizadoEm='28/10/2026';window.AURA_DASHBOARD.indicadores.ordensServico=31;window.AURA_DASHBOARD.indicadores.produtosVigentes=98;}
  document.addEventListener('click',function(event){
    var link=event.target.closest&&event.target.closest('a[href]');
    if(!link||link.dataset.auraSkipPreview||link.hasAttribute('download')||/baixar|download/i.test(link.textContent))return;
    var doc=meta.documentos.find(function(d){return d.pdfViewUrl===link.getAttribute('href');});if(!doc)return;
    event.preventDefault();event.stopPropagation();
    var dialog=document.createElement('dialog');dialog.className='aura-os05-pdf';dialog.setAttribute('aria-label',doc.titulo);
    var header=document.createElement('header'),title=document.createElement('strong'),close=document.createElement('button');
    title.textContent=doc.titulo+' — '+doc.rotuloVersao;close.textContent='Fechar PDF';close.type='button';close.onclick=function(){dialog.close();};header.append(title,close);
    var frame=document.createElement('iframe');frame.title=title.textContent;frame.src='https://drive.google.com/file/d/'+doc.driveId+'/preview';
    var drive=document.createElement('a');drive.href=doc.pdfViewUrl;drive.target='_blank';drive.rel='noopener noreferrer';drive.dataset.auraSkipPreview='true';drive.textContent='Abrir original no Google Drive';
    var local=document.createElement('button');local.type='button';local.textContent='Se o Drive não carregar, visualizar cópia deste site';local.onclick=function(){frame.src=doc.local;};
    dialog.append(header,frame,drive,local);document.body.append(dialog);dialog.addEventListener('close',function(){dialog.remove();});dialog.showModal();
  },true);
})();
