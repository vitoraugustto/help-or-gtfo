'use client';

import { useEffect, useState } from 'react';

export default function App() {
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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div style={parallaxStyle}>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="text-xl">:// RUNDOWNS</p>
          </li>
          <li>
            <p className="text-xl">:// MONSTROS</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
