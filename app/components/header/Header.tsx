import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { auth } from '@/auth';

const Header = async () => {
  const session = await auth();

  return (
    <header className="py-6">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between border-b border-ui-border pb-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/HandcraftedHaven.png"
              alt="Bestrong Logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
          </Link>
          <h1 className="font-serif text-3xl font-bold text-text-main">
            <Link href="/">Handcrafted Haven</Link>
          </h1>
          <div className="flex items-center gap-5">
            <button className="relative" aria-label="Cart">
              <ShoppingCart className="h-6 w-6 text-text-main" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                0
              </span>
            </button>
            {session?.user ? (
              <button aria-label="My Account">
                <User className="h-6 w-6 text-text-main" />
              </button>
            ) : (
              <Link href="/login" aria-label="Login">
                <User className="h-6 w-6 text-text-main" />
              </Link>
            )}
          </div>
        </div>
        <nav className="mt-4 flex justify-center gap-10">
          {/* <a href="#" className="border-b-2 border-text-main pb-1 font-semibold text-text-main">Explore</a>
          <a href="#" className="text-secondary hover:text-text-main">Sell</a>
          <a href="#" className="text-secondary hover:text-text-main">Community</a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;