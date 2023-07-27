'use client';

import { Oxanium } from 'next/font/google';
import { useEffect, useState } from 'react';

import { Button } from './components';

const oxanium = Oxanium({ subsets: ['latin'], weight: '800' });

export default function Home() {
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
      <div style={parallaxStyle} className="flex flex-col gap-6">
        <div className="flex flex-row">
          <p className="text-5xl">help or</p>
          <p className={`text-5xl ${oxanium.className}`}>&nbsp;&nbsp;GTFO</p>
        </div>
        <Button color="red">Em desenvolvimento</Button>
      </div>
    </main>
  );
}
