import './globals.css'

export const metadata = {
  title: 'Toy Plane Landing Page',
  description: '3D product showcase using Next.js, Tailwind CSS, and Spline',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
