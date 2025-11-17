import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // Se o usuário não estiver logado, redireciona para a página de login.
      return isLoggedIn; // Retorna true se logado, senão redireciona para a página de signIn.
    },
  },
  // Adiciona o matcher aqui para definir quais rotas são protegidas.
  // Todas as outras rotas serão públicas por padrão.
  // Ex: /dashboard, /profile, etc.
  matcher: ['/dashboard/:path*', '/profile/:path*'],
  providers: [], // We will add providers like Credentials here later
} satisfies NextAuthConfig;