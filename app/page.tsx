'use client';

import ProductCard from '@/components/ProductCard';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { useEffect } from 'react';

const products = [
  {
    id: '1',
    title: 'Neural Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    price: 280,
    category: 'Outerwear',
  },
  {
    id: '2',
    title: 'Synth Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    price: 195,
    category: 'Tops',
  },
  {
    id: '3',
    title: 'Data Cargo Pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
    price: 245,
    category: 'Bottoms',
  },
];

const posts = [
  {
    slug: 'body-as-interface',
    title: 'The Body as Interface',
    excerpt:
      'Fashion has always been a form of expression. But what happens when the body becomes a literal interface between the digital and physical worlds? We explore the convergence of biomechanics, data visualization, and wearable technology.',
    date: 'March 15, 2025',
    category: 'Theory',
  },
  {
    slug: 'wearing-algorithm',
    title: 'Wearing the Algorithm',
    excerpt:
      'Your clothes are data. Responsive fabrics, embedded sensors, and networked garments that adapt to your environment. How fashion brands are building the future of wearable intelligence.',
    date: 'March 8, 2025',
    category: 'Technology',
  },
];

export default function Home(): JSX.Element {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-void overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 border border-matrix/10 rounded-full" />
          <div className="absolute bottom-32 right-20 w-72 h-72 border border-signal/5 rounded-full" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className="glitch fade-up text-7xl md:text-8xl font-mono font-bold text-matrix tracking-widest mb-8 leading-tight"
            data-text="FLESH & CODE"
          >
            FLESH & CODE
          </h1>

          <p className="fade-up fade-up-delay-1 text-chrome text-xl md:text-2xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
            Engineered for the Body. Built for the Network.
          </p>

          <button className="fade-up fade-up-delay-2 btn-matrix text-base md:text-lg px-12 py-4 uppercase tracking-widest font-bold shadow-lg">
            Access Collection
          </button>

          <div className="fade-up fade-up-delay-3 mt-20 text-static text-sm font-mono tracking-wider">
            <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            <p className="mt-2">FASHION.SYS v2.4 | INITIATED</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-void">
        <div className="max-w-7xl mx-auto px-6">
          <div className="scroll-reveal mb-16">
            <p className="text-matrix font-mono text-sm tracking-widest uppercase mb-2">
              Collection
            </p>
            <h2 className="text-5xl font-mono font-bold text-chrome tracking-wider">
              Core Pieces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="scroll-reveal">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/shop">
              <button className="btn-matrix text-base px-10 py-3 uppercase tracking-widest">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Signal Section */}
      <section className="py-20 bg-void">
        <div className="max-w-7xl mx-auto px-6">
          <div className="scroll-reveal mb-16">
            <p className="text-signal font-mono text-sm tracking-widest uppercase mb-2">
              Signal
            </p>
            <h2 className="text-5xl font-mono font-bold text-chrome tracking-wider">
              Editorial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="scroll-reveal">
                <PostCard {...post} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog">
              <button className="btn-matrix text-base px-10 py-3 uppercase tracking-widest">
                Browse All Articles
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-terminal border-y border-matrix/30">
        <div className="max-w-4xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-matrix mb-6 tracking-wider">
            Join the Network
          </h2>
          <p className="text-static mb-8 text-lg">
            Subscribe for exclusive drops, manifestos, and system updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter transmission address"
              className="flex-1 px-4 py-3 bg-void border border-matrix/50 text-chrome placeholder-static/50 font-mono focus:outline-none focus:border-matrix focus:shadow-matrix-sm"
              required
            />
            <button
              type="submit"
              className="btn-matrix px-8 py-3 uppercase text-sm font-bold tracking-widest whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
