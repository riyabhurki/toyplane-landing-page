'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center py-6 bg-blue-600 text-white">
      <p>&copy; {year ?? '----'} Toy Plane. All rights reserved.</p>
    </footer>
  );
}
