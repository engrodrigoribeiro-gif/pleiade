# Relatório de testes finais — Webmap Aura

Data da auditoria: 04/08/2026  
Versão candidata: `site-proposta-google-design-system`

## Resultado executivo

O pacote foi aprovado nos testes locais de integridade, autenticação,
links, geosserviços e responsividade. A publicação depende da configuração
das três variáveis de ambiente abaixo e da rotação da chave Planet antiga.

## Testes realizados

- 1.315 arquivos auditados na versão de trabalho, total de 105,68 MB.
- 103 referências locais do HTML verificadas; nenhuma ausente.
- 155 arquivos JavaScript verificados; nenhum erro de sintaxe.
- 292 links externos de documentos, vetores, Google Drive e serviços
  testados; 292 respostas HTTP 200.
- SIGEF/SNCI: quatro temas do INCRA testados na área do projeto; todos
  retornaram PNG válido.
- Sentinel-2, World Imagery Wayback e PRODES Cerrado testados na área do
  projeto.
- Breakpoints testados: 1920×1080, 1366×768, 1024×768 e 390×844.
  Não foi detectada rolagem horizontal; painéis permaneceram dentro da tela.
- Street View substituído por link direto do Google Maps na coordenada central,
  sem dependência da API JavaScript sem chave.
- Console do navegador: nenhum erro JavaScript após os ajustes finais.

## Autenticação

O middleware foi testado nos seguintes cenários:

| Cenário | Resultado esperado | Resultado |
|---|---:|---:|
| Senha não configurada | 503 | Aprovado |
| Cabeçalho ausente | 401 | Aprovado |
| Cabeçalho malformado | 401 | Aprovado |
| Senha incorreta | 401 | Aprovado |
| Credencial correta | libera a requisição | Aprovado |

## Variáveis obrigatórias na Vercel

- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`
- `PLANET_API_KEY`

Aplicar em **Production** e **Preview**. As variáveis não devem ser
registradas no GitHub. Depois de qualquer alteração, executar novo deploy.

## Pendência obrigatória antes da publicação

A chave Planet utilizada durante o desenvolvimento já esteve embutida em
`layers/layers.js`. Mesmo removida do pacote final, ela pode permanecer no
histórico Git ou em commits remotos. Revogar essa chave no painel Planet e
criar uma nova. Configurar somente a nova chave em `PLANET_API_KEY` na Vercel.

## Teste de aceitação após o deploy Preview

1. Abrir a URL sem credenciais e confirmar resposta 401/prompt de login.
2. Entrar com as credenciais configuradas.
3. Ativar um mosaico Planet e confirmar a imagem.
4. Ativar Sentinel-2, PRODES Cerrado, SIGEF e SNCI.
5. Abrir um PDF em **Visualizar** e testar **Download**.
6. Baixar um SHP e um KML.
7. Conferir a tela em celular e notebook.
8. Somente depois promover o Preview para Production.
