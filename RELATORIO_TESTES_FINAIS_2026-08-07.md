# Relatório de testes finais — Webmap Aura — 07/08/2026

## Pacote avaliado

- Pasta: `site-final-publicacao-2026-08-07`
- Entrada: `index.html`
- Publicação prevista: GitHub → Vercel
- Autenticação: Basic Auth por `middleware.js`

## Integridade do pacote

| Verificação | Resultado |
|---|---:|
| Arquivos no pacote final | 688 |
| Tamanho | 148,76 MB |
| Arquivos JavaScript verificados | 157 |
| Erros de sintaxe JavaScript | 0 |
| Arquivos JSON inválidos | 0 |
| Referências locais ausentes | 0 |
| Artefatos proibidos (`.git`, `.vercel`, `.env`, logs) | 0 |
| Arquivos acima de 95 MB | 0 |
| Credenciais reais encontradas | 0 |

## Catálogo consolidado

- 28 ordens de serviço.
- 88 produtos atuais cadastrados.
- zero produto sem link individual.
- zero aviso e zero erro estrutural.
- as cinco OS do Alvo Buzina constam no catálogo público gerado.

## Autenticação

| Cenário | Resultado |
|---|---:|
| Senha de ambiente ausente | 503 |
| Credencial ausente | 401 |
| Cabeçalho malformado | 401 |
| Credencial incorreta | 401 |
| Credencial correta | Acesso liberado |

Os testes utilizaram valores fictícios. Nenhuma credencial real foi registrada.

## Abertura e geosserviços

- `g — Alvo Buzina` contém uma única feição `Polygon`, sem divisões internas.
- Na abertura ficam ativos o Alvo Buzina, as cinco servidões minerárias e a imagem Google.
- O link inicial produzido no teste registrou `alvo_buzina:1` e as cinco servidões.
- O enquadramento inicial abrange os dois conjuntos territoriais.
- NASA GIBS/VIIRS retornou imagem JPEG válida de 512 × 512 pixels via WMS.
- Os mosaicos Planet e o proxy dependente de chave privada foram retirados do pacote.
- Nenhum erro foi registrado no console durante o carregamento final.

## Responsividade

| Resolução | Rolagem horizontal involuntária | Controles fora da tela | Resultado |
|---|---:|---:|---|
| 1920 × 1080 | Não | 0 | Aprovado |
| 1366 × 768 | Não | 0 | Aprovado |
| 1024 × 768 | Não | 0 | Aprovado |
| 390 × 844 | Não | 0 | Aprovado |

## Conclusão

O pacote está tecnicamente apto para commit no GitHub e implantação na Vercel.
Antes de promover para produção, confirmar na Vercel as variáveis
`BASIC_AUTH_USER` e `BASIC_AUTH_PASSWORD` em Preview e Production.
