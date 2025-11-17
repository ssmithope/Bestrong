import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // Protege todas as rotas, exceto a página inicial, login, registro e arquivos estáticos.
  matcher: ['/((?!login|register|api|_next/static|_next/image|.*\\.png$).*)'],
};