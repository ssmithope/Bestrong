import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  /* Match all request paths except for the ones starting with: api, _next/static, _next/image, or files with an extension (e.g. .ico) */
  // matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
    matcher: ['/dashboard/:path*'],
};