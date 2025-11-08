import React from 'react';
import Image from 'next/image';
import {
  ShoppingCart,
  User,
  Star,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';

// Dados dos produtos (mesmos de antes)
const products = [
  {
    id: 1,
    name: 'Hand-Thrown Ceramic Mug',
    price: 45,
    img: 'https://placehold.co/400x400/F8F5F2/3E3E3E?text=Mug',
  },
  {
    id: 2,
    name: 'Woven Macrame Wall Hanging',
    price: 45,
    img: 'https://placehold.co/400x400/F8F5F2/3E3E3E?text=Macrame',
  },
  {
    id: 3,
    name: 'Woven Macrame Wall Hanging',
    price: 45,
    img: 'https://placehold.co/400x400/F8F5F2/3E3E3E?text=Mug+2',
  },
];

export default function Page() {
  return (
    // Aplicando a fonte 'sans' (Lato) e cores base
    <div className="min-h-screen bg-background font-sans text-text-main">
      <div className="container mx-auto max-w-6xl px-4">
        {/* === HEADER & NAVIGATION === */}
        <header className="py-6">
          <div className="flex items-center justify-between border-b border-ui-border pb-4">
            {/* Fonte 'serif' (Merriweather) para o título */}
            <h1 className="font-serif text-3xl font-bold text-text-main">
              Handcrafted Haven
            </h1>
            <div className="flex items-center gap-5">
              <button className="relative" aria-label="Cart">
                <ShoppingCart className="h-6 w-6 text-text-main" />
                {/* Cor 'primary' para o acento do carrinho */}
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  0
                </span>
              </button>
              <button aria-label="Account">
                <User className="h-6 w-6 text-text-main" />
              </button>
            </div>
          </div>
          <nav className="mt-4 flex justify-center gap-10">
            <a
              href="#"
              className="border-b-2 border-text-main pb-1 font-semibold text-text-main"
            >
              Explore
            </a>
            {/* Cor 'secondary' para links inativos */}
            <a href="#" className="text-secondary hover:text-text-main">
              Sell
            </a>
            <a href="#" className="text-secondary hover:text-text-main">
              Community
            </a>
          </nav>
        </header>

        <main className="pb-16">
          {/* === HERO SECTION === */}
          <section className="py-20 text-center">
            {/* Fonte 'serif' (Merriweather) para o título principal */}
            <h2 className="mx-auto max-w-2xl font-serif text-5xl font-bold text-text-main md:text-6xl">
              Discover Unique, Handcrafted Treasures
            </h2>
            {/* Cor 'secondary' para o subtítulo */}
            <p className="mt-4 text-xl text-secondary">
              Support Local Artisans & Sustainable Craftsmanship
            </p>
            {/* Cor 'primary' para o botão principal */}
            <button className="mt-8 rounded bg-primary px-10 py-3 text-lg font-semibold text-white transition-all hover:bg-opacity-90">
              Shop Now
            </button>
          </section>

          {/* === PRODUCT GRID === */}
          <section className="py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  // Usando 'bg-white' para os cards para dar contraste com o 'bg-background'
                  // e 'border-ui-border' para a borda
                  className="flex flex-col overflow-hidden rounded-lg border border-ui-border bg-white shadow-sm"
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-72 w-full object-cover"
                  />
                  <div className="flex flex-grow flex-col justify-between p-6">
                    <div>
                      {/* Fonte 'serif' (Merriweather) para títulos de produto */}
                      <h3 className="font-serif text-xl font-semibold text-text-main">
                        {product.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-text-main">
                        ${product.price} USD
                      </span>
                      {/* Cor 'primary' para o botão */}
                      <button className="rounded bg-primary px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-opacity-90">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* === FOOTER === */}
      {/* Cor 'ui-border' (Beige/Sand) para o fundo do rodapé */}
      <footer className="mt-16 bg-ui-border py-10">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div className="flex gap-6">
            <a href="#" className="font-medium text-text-main hover:underline">
              About Us
            </a>
            <a href="#" className="font-medium text-text-main hover:underline">
              Contact
            </a>
          </div>
          {/* Texto de copyright com opacidade */}
          <div className="text-sm text-text-main/70">
            <p>© 2024 Handcrafted Haven. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <a href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-text-main hover:text-primary" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-text-main hover:text-primary" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-text-main hover:text-primary" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}