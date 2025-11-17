'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { AtSign, KeyRound, AlertCircle } from 'lucide-react';
import React from 'react';

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-primary/70 disabled:cursor-not-allowed"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Signing In...' : 'Sign in'}
    </button>
  );
}

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <>
      <div>
        <h2 className="mt-6 text-center font-serif text-3xl font-bold tracking-tight text-text-main">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-secondary">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-primary hover:text-primary/80"
          >
            Sign up
          </Link>
        </p>
      </div>

      <form action={formAction} className="mt-8 space-y-6">
        <div className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <AtSign className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <KeyRound className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                minLength={6}
                className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm">
          <a href="#" className="font-medium text-primary hover:text-primary/80">
            Forgot your password?
          </a>
        </div>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>

        <LoginButton />
      </form>
    </>
  );
}
