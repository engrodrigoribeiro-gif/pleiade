# Aura QJ Plêiade - Cadastro Multifinalitário Ambiental e Fundiário

WebGIS estático (qgis2web), acesso restrito por senha via Basic Auth
(Vercel Routing Middleware). A senha não fica no código.

## Credenciais sugeridas

- Usuário: `fundiario-aura`
- Senha: `@2026-qj-pleiade`

Essas credenciais devem ser configuradas como variáveis de ambiente na
Vercel, não estão fixas em nenhum arquivo deste repositório.

## Passo a passo completo

### 1. Subir o projeto no GitHub

1. Crie um repositório novo no GitHub (pode ser privado, recomendado).
2. Suba todos os arquivos desta pasta para a raiz do repositório
   (o `index.html` deve estar na raiz, não dentro de uma subpasta).

### 2. Importar na Vercel

1. Acesse vercel.com e faça login (pode usar a conta do GitHub).
2. Clique em "Add New..." → "Project".
3. Selecione o repositório que você acabou de criar.
4. Em "Framework Preset", selecione **Other** (não é Next.js nem nenhum
   framework, é projeto estático puro).
5. Não clique em Deploy ainda — primeiro configure a variável de ambiente
   no próximo passo (ou configure depois e faça redeploy).

### 3. Configurar a senha (Environment Variables)

1. Ainda na tela de configuração do projeto (ou depois, em
   Settings → Environment Variables, se já tiver feito o deploy):
2. Adicione:
   - `BASIC_AUTH_USER` → `fundiario-aura`
   - `BASIC_AUTH_PASSWORD` → `@2026-qj-pleiade`
3. Marque para aplicar em Production (e Preview, se quiser testar antes).
4. Salve.

### 4. Deploy

1. Clique em **Deploy**.
2. Se você já tinha feito deploy antes de configurar as variáveis: vá em
   **Deployments**, abra o deployment mais recente, clique nos três
   pontinhos → **Redeploy**. Variáveis de ambiente só valem a partir do
   próximo deploy.

### 5. Testar

1. Acesse a URL gerada pela Vercel (algo como
   `seu-projeto.vercel.app`).
2. O navegador deve mostrar uma caixinha pedindo usuário e senha
   (não é uma tela HTML customizada, é o prompt nativo do navegador).
3. Digite `fundiario-aura` e `@2026-qj-pleiade`.
4. O mapa deve carregar normalmente depois disso.

## Como funciona

`middleware.js` intercepta toda requisição antes de qualquer arquivo
(HTML, JS, imagem) ser entregue, e exige a autenticação. Sem a variável
`BASIC_AUTH_PASSWORD` configurada, o site fica bloqueado por padrão
(falha segura), nunca aberto.

## O que foi adicionado/alterado neste projeto

- `middleware.js`, `package.json`, `vercel.json`, `.gitignore`: suporte
  a Basic Auth na Vercel.
- `resources/o.gis/o.gis.js` e `resources/o.gis/o.gis_style.css`: botão
  de download em KML por camada vetorial, na própria legenda do mapa.

## Limitação a ter em mente

Basic Auth controla quem entra no site. Depois de autenticado, qualquer
usuário com conhecimento técnico (DevTools do navegador) pode ver o
conteúdo das camadas (GeoJSON embutido nos arquivos `.js` da pasta
`layers/`). Adequado para controlar acesso ao link, não para impedir
que um usuário autorizado extraia os dados depois de entrar.
