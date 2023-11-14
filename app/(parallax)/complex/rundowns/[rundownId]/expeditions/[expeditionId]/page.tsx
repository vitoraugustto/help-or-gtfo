import Image from 'next/image';
import Link from 'next/link';

import { IExpedition, IRundown } from '@/app/common/types';
import {
  fetchExpedition,
  fetchExpeditionFinishers,
} from '@/app/services/rundowns';

async function getExpedition(
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
) {
  const { payload } = await fetchExpedition(rundownId, expeditionId);

  return payload;
}

async function getExpeditionFinishers(
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
) {
  const { payload } = await fetchExpeditionFinishers(rundownId, expeditionId);

  return payload;
}

export default async function Expedition({
  params,
}: {
  params: { rundownId: IRundown['id']; expeditionId: IExpedition['id'] };
}) {
  const { rundownId, expeditionId } = params;
  const expedition = await getExpedition(rundownId, expeditionId);
  const finishers = await getExpeditionFinishers(rundownId, expeditionId);

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <div className="flex max-w-[750px] flex-1 flex-col gap-4 border-2 border-slate-800 p-6">
        <p className="text-4xl">
          {expedition.display_name} - {expedition.title}
        </p>
        <div className="flex flex-row gap-4">
          {expedition.main_sector && (
            <div className="flex h-16 w-16 items-center">
              <Image
                src="/images/main-sector.png"
                alt="Main sector"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          )}
          {expedition.secondary_sector && (
            <div className="flex h-16 w-16 items-center">
              <Image
                src="/images/secondary-sector.png"
                alt="Secondary sector"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          )}
          {expedition.overload_sector && (
            <div className="flex h-16 w-16 items-center">
              <Image
                src="/images/overload-sector.png"
                alt="Overload sector"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          )}
          {expedition.overload_sector && (
            <div className="flex h-16 w-16 items-center">
              <Image
                src="/images/prisoner-efficiency.png"
                alt="Prisoner efficiency"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
        <p>Quantidade base de XP por concluir: {expedition.xp}</p>
        <p>Prisioneiros que finalizaram a expedição:</p>
        {finishers.map((prisoner) => (
          <Link key={prisoner.id} href={`/complex/prisoners/${prisoner.id}`}>
            <div className="flex flex-row border-2 border-yellow-500 p-2 text-yellow-500">
              <p>Level {prisoner.level} -&nbsp;</p>
              <p>{prisoner.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
