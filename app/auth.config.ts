import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth }) {
      const isLoggedIn = !!auth?.user;
      // As rotas protegidas são definidas pelo `matcher` no middleware.ts.
      // Se a rota não estiver no matcher, esta função não é chamada.
      return isLoggedIn;
    },
  },
  providers: [], // We will add providers like Credentials here later
} satisfies NextAuthConfig;