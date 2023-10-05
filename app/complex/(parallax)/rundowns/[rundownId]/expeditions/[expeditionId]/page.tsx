import Image from 'next/image';

import { IExpedition, IRundown } from '@/app/common/types';
import { fetchExpedition } from '@/app/services/rundowns';

async function getExpedition(
  rundownId: IRundown['id'],
  expeditionId: IExpedition['id'],
) {
  const { payload } = await fetchExpedition(rundownId, expeditionId);

  return payload;
}

export default async function Expedition({
  params,
}: {
  params: { rundownId: IRundown['id']; expeditionId: IExpedition['id'] };
}) {
  const { rundownId, expeditionId } = params;
  const expedition = await getExpedition(rundownId, expeditionId);

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-4">
        <p className="text-4xl">
          {expedition.display_name} - {expedition.title}
        </p>
        <div className="flex flex-row gap-4">
          {expedition.main_sector && (
            <div className="flex h-16 w-16 items-center">
              <Image
                src="/images/main-sector.webp"
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
                src="/images/secondary-sector.webp"
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
                src="/images/overload-sector.webp"
                alt="Overload sector"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
        <p>Quantidade de XP por concluir: {expedition.xp}</p>
        <p>Prisioneiros que finalizaram a expedição:</p>
        {expedition.finishers?.map((prisoner) => (
          <div className="flex flex-row border-2 border-yellow-500 p-2 text-yellow-500">
            <p>Level {prisoner.level} -&nbsp;</p>
            <p>{prisoner.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
