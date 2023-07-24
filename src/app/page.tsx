'use client';

import { Oxanium } from 'next/font/google';
import { useEffect, useState } from 'react';

const oxanium = Oxanium({ subsets: ['latin'], weight: '800' });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const parallaxStyle = {
    transform: `translate(-${mousePosition.x / 20}px, -${mousePosition.y / 20}px)`,
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
      <div
        style={parallaxStyle}
        className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ffffff] after:dark:opacity-40 before:lg:h-[360px]"
      >
        <p className="text-5xl">help or</p>
        <p className={`text-5xl ${oxanium.className}`}>&nbsp;&nbsp;GTFO</p>
      </div>
    </main>
  );
}
