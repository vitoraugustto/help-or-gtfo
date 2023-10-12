'use client';

import { useEffect, useState } from 'react';

export default function ParallaxLayout({
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
    <div style={parallaxStyle} className="flex h-screen w-full">
      {children}
    </div>
  );
}
