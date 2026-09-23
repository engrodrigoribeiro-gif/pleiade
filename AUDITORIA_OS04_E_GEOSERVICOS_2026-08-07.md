# Auditoria da OS 04 e dos geosserviços — 07/08/2026

## Resultado executivo

- A `OS 04 — Alvo Buzina` foi incorporada à versão de trabalho do Webmap.
- A pasta global `Limites dos Imóveis` passou de 23 para 28 itens, preservando a numeração contínua.
- Foram publicados cinco produtos `V1 — Análise do CAR atual`, dez PDFs e cinco pares de downloads locais: pacote vetorial em GeoJSON + KML e KML isolado do limite.
- Foram publicados três estudos territoriais integrados, todos identificados como preliminares e sem efeito registral, cadastral ou geodésico.
- O antigo WMS SIGCAR estadual em HTTP foi substituído pelo WMS federal SICAR em HTTPS, camada `sicar:sicar_imoveis_to`.
- A camada Google deixou de usar HTTP e passou a usar HTTPS.
- Não permanecem URLs `http://` nas definições dos geosserviços do mapa.

## Testes da OS 04

| Verificação | Resultado |
|---|---|
| Grupo `OS 04 — Alvo Buzina` na árvore | Aprovado |
| `Estudos Territoriais Integrados` como primeiro item da OS 04 | Aprovado |
| Imóveis 24 a 28 em `Limites dos Imóveis` | Aprovado |
| Cinco fichas no painel de documentos | Aprovado |
| Produto `Análise do CAR atual` por imóvel | Aprovado |
| Visualização do PDF vigente | Aprovado |
| Download do pacote vetorial e do KML | Aprovado |
| Referências locais ausentes no `index.html` | 0 |
| Erros JavaScript após carregamento | 0 |

## Disponibilidade temática

- Fazenda Nogueira e Cachoeira de Santa Maria: área do imóvel, vegetação nativa, Reserva Legal proposta e APP. Área consolidada e hidrografia não foram localizadas nas fontes recebidas e não foram simuladas.
- Fazenda Lavrinha — Lote 18, Fazenda Cancela e Cabeceira da Buzina: as seis classes previstas foram consolidadas.
- Estudo `Cancela + Lavrinha`: os vetores recebidos intersectam efetivamente apenas a Fazenda Cancela. A ressalva foi preservada no grupo do estudo.
- Possível Área de Intervenção: 387,3056 ha no total; 258,1585 ha na Cabeceira da Buzina; 27,1035 ha na Cancela; e 102,0420 ha na Lavrinha.

## Auditoria dos geosserviços

Os serviços abaixo foram ativados pela interface local e permaneceram sem erro de carregamento no console do navegador durante a janela de teste.

| Serviço | Tecnologia | Situação em 07/08/2026 | Ação aplicada |
|---|---|---|---|
| SICAR — imóveis rurais do Tocantins | WMS GeoServer | Operacional no teste | Substituído endpoint estadual HTTP pelo federal HTTPS e pela camada `sicar:sicar_imoveis_to` |
| SIGEF particular e público — TO | WMS INCRA/i3Geo | Sem erro no teste de ativação | Mantido em HTTPS |
| SNCI privado e público — TO | WMS INCRA/i3Geo | Sem erro no teste de ativação | Mantido em HTTPS |
| Pleiades 2015 | WMS Geoportal TO | Sem erro no teste de ativação | Mantido no endpoint oficial HTTPS |
| PRODES Cerrado 2024 | WMS TerraBrasilis/INPE | Sem erro no teste de ativação | Mantido no endpoint oficial HTTPS |
| Processos minerários ANM | WMS ArcGIS | Sem erro no teste de ativação | Mantido no endpoint oficial HTTPS |
| Território quilombola INCRA — Lajeado | WMS Geoportal TO | Sem erro no teste de ativação | Mantido no endpoint oficial HTTPS |
| Comunidades Palmares — Almas, Dianópolis e Porto Alegre do Tocantins | ArcGIS FeatureServer | Sem erro no teste de ativação | Mantidas como vetores remotos, pois não são WMS |
| Google | XYZ | Operacional | URL corrigida de HTTP para HTTPS |

## Observações operacionais

- Os mosaicos Planet não são WMS: são tiles XYZ consumidos pelo proxy `/api/planet` e dependem de `PLANET_API_KEY` configurada na Vercel. A ausência dessa variável não deve ser interpretada como falha dos WMS.
- Os serviços externos continuam sujeitos à disponibilidade dos respectivos órgãos. O Webmap agora evita conteúdo misto HTTP e registra estado de carregamento para as camadas INCRA.
- O pacote vetorial da OS 04 contém GeoJSON e KML. A geração de SHP binário deve ser feita na etapa de publicação no Drive quando o conversor GIS homologado estiver disponível; o painel não rotula esse pacote como SHP.
