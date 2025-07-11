'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import Spline — with loading fallback
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="text-center p-4">Loading 3D Scene...</div>,
})

export default function Plane3D() {
  return (
    <section className="w-full h-[600px] bg-gray-100">
      <Suspense fallback={<div>Loading Spline...</div>}>
        <Spline scene="https://prod.spline.design/VJECpuG7YCMG3QRA/scene.splinecode" />
      </Suspense>
    </section>
  )
}
