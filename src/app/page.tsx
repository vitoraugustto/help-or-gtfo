'use client';

import { useEffect, useState } from 'react';

import DiscordLogo from '../../public/icons/discord-logo.svg';
import GithubLogo from '../../public/icons/github-logo.svg';
import SteamLogo from '../../public/icons/steam-logo.svg';
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
        <div className="flex max-w-sm flex-col gap-3 px-4 sm:max-w-lg">
          <p>
            Este é um site não oficial criado de fã para fãs. <br /> Por favor,
            sinta-se à vontade para enviar dicas ou feedbacks relacionados à
            premissa do site.
            <br />
            <br /> Todos os direitos de GTFO pertencem à desenvolvedora 10
            Chambers.
          </p>
          <div className="flex flex-row justify-between">
            {PLATFORMS.map(({ link, name, SVG }) => (
              <a href={link} target="_blank">
                <Button color="white">
                  <div className="flex flex-row gap-2">
                    <SVG
                      height="24px"
                      width="24px"
                      className="fill-slate-200"
                    />
                    {name}
                  </div>
                </Button>
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

const PLATFORMS: {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  name: string;
}[] = [
  {
    SVG: DiscordLogo,
    link: 'https://discordapp.com/users/259487137672462346',
    name: 'Discord',
  },
  {
    SVG: SteamLogo,
    link: 'https://steamcommunity.com/id/Vitor_Augustto',
    name: 'Steam',
  },
  {
    SVG: GithubLogo,
    link: 'https://github.com/vitoraugustto',
    name: 'Github',
  },
];
