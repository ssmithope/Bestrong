import React from 'react';
import Image from 'next/image';

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
    <div className="container mx-auto max-w-6xl px-4">
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
  );
}