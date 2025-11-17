import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublicRoute =
        ['/', '/login', '/register'].includes(nextUrl.pathname) ||
        nextUrl.pathname.startsWith('/_next/') ||
        nextUrl.pathname.endsWith('.png'); // Adicione outras extensões se necessário

      if (isPublicRoute) {
        return true; // Always allow access to public routes
      }

      return isLoggedIn; // For all other routes, user must be logged in
    },
  },
  providers: [], // We will add providers like Credentials here later
} satisfies NextAuthConfig;