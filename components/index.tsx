import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Plane3D from '@/components/Plane3D';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Toy Plane Landing Page</title>
        <meta name="description" content="Interactive landing page for toy plane" />
      </Head>
      <Header />
      <main className="pt-20">
        <Hero />
        <Plane3D />
        <Features />
      </main>
      <Footer />
    </>
  );
}
