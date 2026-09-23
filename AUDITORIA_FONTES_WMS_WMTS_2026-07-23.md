# Auditoria de fontes WMS, WMTS e vetoriais

Data: 23/07/2026

## Resultado por item

| Item | Tipo real | Diagnóstico | Tratamento aplicado |
|---|---|---|---|
| SigcarTO_propriedade_area_imovel | WMS 1.1.1 | O endereço original usa HTTP; uma rota exclusiva da Vercel quebrou a abertura local | Seleção automática: abertura local usa o WMS original; publicação HTTPS usa `/services/sigcar` |
| Certificações_Sigef_Incra | Grupo vazio | Não contém camada, URL ou fonte de dados | Marcado como `sem fonte` e desabilitado na interface |
| Fund_Palmares_Almas | Grupo vazio | Não contém camada, URL ou fonte de dados | Marcado como `sem fonte` e desabilitado na interface |
| Fund_Palmares_DIanopolis | Grupo vazio | Não contém camada, URL ou fonte de dados | Marcado como `sem fonte` e desabilitado na interface |
| Fund_Palmares_Porto_Alegre_do_Tocantins | Grupo vazio | Não contém camada, URL ou fonte de dados | Marcado como `sem fonte` e desabilitado na interface |
| Limite_estimado_Comunidade_São_Joaquim | GeoJSON local | Arquivo válido, uma feição, coordenadas compatíveis com a área do mapa | Mantido |
| Limite_estimado_Comunidade_Baião-Capão_da_Onça | GeoJSON local | Arquivo válido, uma feição, coordenadas compatíveis com a área do mapa | Mantido |
| Global Monthly 2023 07 Mosaic | Planet WMTS | A autorização da chave e do mosaico não pôde ser comprovada | Configuração original restaurada; não declarar funcional até obter resposta válida da Planet |
| Global Monthly 2024 07 Mosaic | Planet WMTS | A autorização da chave e do mosaico não pôde ser comprovada | Configuração original restaurada; não declarar funcional até obter resposta válida da Planet |
| Global Monthly 2025 07 Mosaic | Planet WMTS | A autorização da chave e do mosaico não pôde ser comprovada | Configuração original restaurada; não declarar funcional até obter resposta válida da Planet |
| Global Monthly 2026 03 Mosaic | Planet WMTS | A autorização da chave e do mosaico não pôde ser comprovada | Configuração original restaurada; não declarar funcional até obter resposta válida da Planet |

## Verificações realizadas

- Sintaxe JavaScript de `layers/layers.js`: válida.
- Sintaxe JavaScript de `resources/aura-refinement.js`: válida.
- Estrutura JSON de `vercel.json`: válida.
- Seleção automática do endereço SIGCAR conforme protocolo local ou HTTPS: confirmada estruturalmente.
- Arquivo São Joaquim: uma feição; bbox `[-47.154823, -11.754600, -47.079390, -11.679789]`.
- Arquivo Baião-Capão da Onça: uma feição; bbox `[-47.254883, -11.794933, -47.207229, -11.750786]`.

## Validação ainda necessária

A validade sintática foi confirmada localmente. A resposta efetiva do WMS SIGCAR e a autorização da conta Planet ainda precisam de verificação externa, pois:

1. a rota reversa SIGCAR só existe no ambiente Vercel;
2. o acesso Planet depende do plano, período contratado e área de acesso associados à chave;
3. a consulta externa direta foi bloqueada pelo controle de rede do ambiente de desenvolvimento.

Não publicar em produção antes do teste Preview desses serviços.
