# Webmap Aura — pacote de publicação de 09/09/2026

Versão com 29 imóveis e 90 produtos vigentes, incluindo OS 05 — Vira Saia / Fazenda Galiléia (nº 29).

## Publicar pelo procedimento validado

1. Use **o conteúdo desta pasta** na raiz do repositório GitHub. Não faça commit do ZIP da entrega nem da planilha de gestão.
2. Preserve a versão anterior e envie primeiro para uma branch de Preview.
3. Mantenha `index.html`, `package.json`, `vercel.json` e `middleware.js` na raiz. Projeto estático, sem comando de build, saída `.`.
4. Na Vercel, mantenha `BASIC_AUTH_USER` e `BASIC_AUTH_PASSWORD` nas variáveis de ambiente de Preview e Production. Nenhuma senha real acompanha esta pasta.
5. Valide login, PDF em nova aba e incorporado, downloads e camadas no Preview HTTPS antes de promover para Production.
6. Após publicar, abra a URL em janela anônima, confirme a autenticação e registre commit/deployment.

## OS 05

- Proposta CAR **V3** vigente, V1/V2 preservadas no histórico; análise de perímetro V1 independente.
- Quatro PDFs, SHP recebido e KML do limite no Google Drive; links individuais conferidos e downloads comparados por SHA-256.
- O SHP V1 recebido **não está certificado como equivalente à carta V3**. A APP a preservar apresenta geometria inválida na origem. Não houve alteração silenciosa da geometria.
- Dados de titularidade, CAR e contato não foram inventados. As necessidades estão na planilha consolidada e na ficha do imóvel.

## Serviços e aceite final

- Sentinel-2: mosaico padrão disponível. O filtro antigo de data/nuvens retornava transparência integral e foi retirado. Não há promessa de imagem mais recente.
- A fonte externa de localidades quilombolas passou a exigir token (erro 499); está sinalizada como restrita. O WMS do território Lajeado segue separado. Nenhuma credencial de terceiro foi inserida.
- O PDF V3 e seu endpoint de preview abriram diretamente no Drive. A incorporação em iframe ficou em branco no navegador interno de testes; há alternativa explícita para abrir em nova aba. **Conferir incorporação no Preview HTTPS da Vercel** antes do aceite de produção.
- Os testes locais não substituem a verificação de autenticação e serviços no deploy Preview.

O relatório detalhado e a planilha de rastreio ficam fora desta pasta de aplicação, em `outputs/os05-integracao-2026-09-09` na pasta de trabalho.
