'use client';

import { useEffect, useState } from 'react';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const parallaxStyle = {
    transform: `translate(-${mousePosition.x / 20}px, -${
      mousePosition.y / 20
    }px)`,
  };

  function handleMouseMove(e: MouseEvent) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div style={parallaxStyle}>{children}</div>
    </main>
  );
}
