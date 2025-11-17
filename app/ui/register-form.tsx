'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser, State } from '@/app/lib/actions';
import {
  User,
  AtSign,
  KeyRound,
  Phone,
  Home,
  MapPin,
  Globe,
} from 'lucide-react';
import React from 'react';

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-primary/70 disabled:cursor-not-allowed"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Creating Account...' : 'Create account'}
    </button>
  );
}

const RegisterForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <>
      <div>
        <h2 className="mt-6 text-center font-serif text-3xl font-bold tracking-tight text-text-main">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-secondary">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80">
            Sign in
          </Link>
        </p>
      </div>
      <form action={dispatch} className="mt-8 space-y-6">
        {/* Personal Info */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-semibold text-text-main">Personal Info</legend>
          {/* Name Field */}
          <div className="space-y-1">
            <div className="relative">
              <User className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="name" name="name" type="text" placeholder="Full name" required className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="name-error" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name && state.errors.name.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
          {/* Email Field */}
          <div className="space-y-1">
            <div className="relative">
              <AtSign className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="email" name="email" type="email" placeholder="Email address" required className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="email-error" />
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email && state.errors.email.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
          {/* Password Field */}
          <div className="space-y-1">
            <div className="relative">
              <KeyRound className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="password" name="password" type="password" placeholder="Password" required minLength={6} className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="password-error" />
            </div>
            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password && state.errors.password.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
          {/* Phone Number Field */}
          <div className="space-y-1">
            <div className="relative">
              <Phone className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="phone_number" name="phone_number" type="tel" placeholder="Phone number (Optional)" className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="phone-error" />
            </div>
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              {state.errors?.phone_number && state.errors.phone_number.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
        </fieldset>

        {/* Shipping Address */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-semibold text-text-main">Shipping Address</legend>
          {/* Street Field */}
          <div className="space-y-1">
            <div className="relative">
              <Home className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="street" name="street" type="text" placeholder="Street address" required className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="street-error" />
            </div>
            <div id="street-error" aria-live="polite" aria-atomic="true">
              {state.errors?.street && state.errors.street.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
          {/* City Field */}
          <div className="space-y-1">
            <div className="relative">
              <MapPin className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="city" name="city" type="text" placeholder="City" required className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="city-error" />
            </div>
            <div id="city-error" aria-live="polite" aria-atomic="true">
              {state.errors?.city && state.errors.city.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
          {/* State and ZIP Code */}
          <div className="flex gap-4">
            <div className="w-1/2 space-y-1">
              <div className="relative">
                <input id="state" name="state" type="text" placeholder="State / Province" required className="block w-full rounded-md border border-ui-border py-2 px-3 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="state-error" />
              </div>
              <div id="state-error" aria-live="polite" aria-atomic="true">
                {state.errors?.state && state.errors.state.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
              </div>
            </div>
            <div className="w-1/2 space-y-1">
              <div className="relative">
                <input id="zip_code" name="zip_code" type="text" placeholder="ZIP / Postal code" required className="block w-full rounded-md border border-ui-border py-2 px-3 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="zip-error" />
              </div>
              <div id="zip-error" aria-live="polite" aria-atomic="true">
                {state.errors?.zip_code && state.errors.zip_code.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
              </div>
            </div>
          </div>
          {/* Country Field */}
          <div className="space-y-1">
            <div className="relative">
              <Globe className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input id="country" name="country" type="text" placeholder="Country" required className="block w-full rounded-md border border-ui-border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primary focus:ring-primary" aria-describedby="country-error" />
            </div>
            <div id="country-error" aria-live="polite" aria-atomic="true">
              {state.errors?.country && state.errors.country.map((error: string) => (<p className="mt-1 text-xs text-red-500" key={error}>{error}</p>))}
            </div>
          </div>
        </fieldset>

        <RegisterButton />
      </form>
    </>
  );
};

export default RegisterForm;