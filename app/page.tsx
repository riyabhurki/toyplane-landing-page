'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Plane3D = dynamic(() => import('@/components/Plane3D'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Plane3D />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
