'use client';

import { Oxanium } from 'next/font/google';
import { useEffect, useState } from 'react';

import { Button } from './components';

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
      <div style={parallaxStyle}>
        <div className="flex max-w-sm flex-col gap-3">
          <p>
            Este é um site não oficial criado de fã para fãs. <br /> Por favor,
            sinta-se à vontade para enviar dicas ou feedbacks relacionados à
            premissa do site.
            <br />
            <br /> Todos os direitos de GTFO pertencem à desenvolvedora 10
            Chambers.
          </p>
          <div className="flex flex-row justify-between">
            {PLATFORMS.map((platform) => (
              <a href={platform.link} target="_blank">
                <Button color="white">{platform.name}</Button>
              </a>
            ))}
          </div>
          <Button color="red" fullWidth>
            Injetar
          </Button>
        </div>
      </div>
    </main>
  );
}

const PLATFORMS: { link: string; name: string }[] = [
  {
    link: 'https://discordapp.com/users/259487137672462346',
    name: 'Discord',
  },
  {
    link: 'https://steamcommunity.com/id/Vitor_Augustto',
    name: 'Steam',
  },
  {
    link: 'https://github.com/vitoraugustto',
    name: 'Github',
  },
];
