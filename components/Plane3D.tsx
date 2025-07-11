'use client';

import dynamic from 'next/dynamic';

// Dynamically import Spline so it only runs on the client
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Plane3D() {
  return (
    <section className="h-[600px] w-full bg-gray-100">
      <Spline scene="https://prod.spline.design/VJECpuG7YCMG3QRA/scene.splinecode" />
    </section>
  );
}
