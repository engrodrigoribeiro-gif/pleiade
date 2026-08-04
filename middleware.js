export const config = {
  matcher: '/(.*)',
};

export default function middleware(request) {
  const authHeader = request.headers.get('authorization');

  const expectedUser = process.env.BASIC_AUTH_USER || 'fundiario-aura';
  const expectedPass = process.env.BASIC_AUTH_PASSWORD;

  if (!expectedPass) {
    // Falha segura: sem variável de ambiente configurada, bloqueia tudo
    // em vez de liberar acesso por padrão.
    return new Response('Acesso não configurado. Defina BASIC_AUTH_PASSWORD nas variáveis de ambiente da Vercel.', {
      status: 503,
    });
  }

  if (authHeader) {
    try {
      const [scheme, encoded] = authHeader.split(' ');
      if (scheme?.toLowerCase() === 'basic' && encoded) {
        const credentials = atob(encoded);
        const separator = credentials.indexOf(':');
        const user = separator >= 0 ? credentials.slice(0, separator) : '';
        const pass = separator >= 0 ? credentials.slice(separator + 1) : '';

        if (user === expectedUser && pass === expectedPass) {
          return; // libera o acesso, segue para o conteúdo normalmente
        }
      }
    } catch {
      // Cabeçalho malformado continua como acesso não autorizado.
    }
  }

  return new Response('Acesso restrito.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Cadastro Multifinalitario Ambiental e Fundiario - Aura QJ Pleiade"',
    },
  });
}
