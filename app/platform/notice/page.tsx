import Link from 'next/link';

import DiscordLogo from '../../../public/icons/discord-logo.svg';
import GithubLogo from '../../../public/icons/github-logo.svg';
import SteamLogo from '../../../public/icons/steam-logo.svg';
import { DISCORD_LINK, GITHUB_LINK, STEAM_LINK } from '../../common/constants';
import { Button } from '../../components';

export default function Notice() {
  return (
    <div className="flex max-w-sm flex-col gap-3 px-4 sm:max-w-lg">
      <p>
        Esta é uma plataforma não oficial criada de fã para fãs. <br /> Por
        favor, sinta-se à vontade para enviar dicas ou feedbacks relacionados à
        premissa da plataforma.
        <br />
        <br /> Todos os direitos de GTFO pertencem à desenvolvedora 10 Chambers.
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
      <Link href="/platform/home">
        <Button color="red" fullWidth>
          Ok
        </Button>
      </Link>
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
