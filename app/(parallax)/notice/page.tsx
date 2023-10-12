import Link from 'next/link';

import { DISCORD_LINK, GITHUB_LINK, STEAM_LINK } from '@/app/common/constants';
import { Button } from '@/app/components';
import DiscordLogo from '@/public/icons/discord-logo.svg';
import GithubLogo from '@/public/icons/github-logo.svg';
import SteamLogo from '@/public/icons/steam-logo.svg';

export default function NoticeScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex max-w-sm flex-col gap-3 px-0 sm:max-w-lg sm:px-4">
        <p>
          Esta é uma plataforma não oficial criada de fã para fãs. <br /> Por
          favor, sinta-se à vontade para enviar dicas ou feedbacks relacionados
          à premissa da plataforma.
          <br />
          <br /> Todos os direitos de GTFO pertencem à desenvolvedora 10
          Chambers.
        </p>
        <div className="flex flex-row justify-between">
          {PLATFORMS.map(({ link, name, SVG }) => (
            <a href={link} key={name} target="_blank">
              <Button color="white">
                <div className="flex flex-row gap-2">
                  <SVG height="24px" width="24px" className="fill-slate-200" />
                  {name}
                </div>
              </Button>
            </a>
          ))}
        </div>
        <Link href="/complex">
          <Button color="red" fullWidth>
            Ok
          </Button>
        </Link>
      </div>
    </div>
  );
}

const PLATFORMS: {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  name: string;
}[] = [
  {
    SVG: DiscordLogo,
    link: DISCORD_LINK,
    name: 'Discord',
  },
  {
    SVG: SteamLogo,
    link: STEAM_LINK,
    name: 'Steam',
  },
  {
    SVG: GithubLogo,
    link: GITHUB_LINK,
    name: 'Github',
  },
];
