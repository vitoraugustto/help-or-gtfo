import Image from 'next/image';

import { IPrisoner } from '@/app/common/types';
import {
  fetchPrisoner,
  fetchCompletedExpeditions,
} from '@/app/services/prisoners';

async function getPrisoner(id: IPrisoner['id']) {
  const { payload } = await fetchPrisoner(id);

  return payload;
}

async function handleFetchCompletedExpeditions(id: IPrisoner['id']) {
  const { payload } = await fetchCompletedExpeditions(id);

  return payload.results;
}

export default async function PrisonerScreen({
  params,
}: {
  params: { prisonerId: IPrisoner['id'] };
}) {
  const { prisonerId } = params;
  const prisoner = await getPrisoner(prisonerId);
  const completedExpeditions = await handleFetchCompletedExpeditions(
    prisonerId,
  );

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-xl">{prisoner.username}</p>
      <p className="text-xl">Level: {prisoner.level}</p>
      <p className="text-xl">Experiência obtida: {prisoner.xp}</p>
      <p className="text-xl">
        Expedições concluídas: {completedExpeditions.length}
      </p>
      <div className="mt-4 flex h-96 w-[50%] flex-col gap-4 overflow-y-auto pr-4 max-sm:w-[90%]">
        {completedExpeditions.map((completedExpedition) => (
          <div
            key={completedExpedition.id}
            className="flex flex-row items-center justify-between border-2 border-slate-800 p-2"
          >
            <p className="text-xl text-slate-200">
              {completedExpedition.expedition.display_name}&nbsp;-&nbsp;
              {completedExpedition.expedition.title}
            </p>
            <div className="flex flex-row gap-4">
              {completedExpedition.expedition.main_sector && (
                <Sector
                  src="/images/main-sector.webp"
                  alt="Main sector"
                  highlight={completedExpedition.cleared_main_sector}
                />
              )}
              {completedExpedition.expedition.secondary_sector && (
                <Sector
                  src="/images/secondary-sector.webp"
                  alt="Secondary sector"
                  highlight={completedExpedition.cleared_secondary_sector}
                />
              )}
              {completedExpedition.expedition.overload_sector && (
                <Sector
                  src="/images/overload-sector.webp"
                  alt="Overload sector"
                  highlight={completedExpedition.cleared_overload_sector}
                />
              )}
              {completedExpedition.expedition.overload_sector && (
                <Sector
                  src="/images/prisoner-efficiency.webp"
                  alt="Prisoner efficiency"
                  highlight={completedExpedition.prisoner_efficiency}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sector({
  src,
  alt,
  highlight,
}: {
  src: string;
  alt: string;
  highlight: boolean;
}) {
  return (
    <div className="flex h-16 w-16 items-center">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`h-auto w-full ${!highlight && 'opacity-20'}`}
      />
    </div>
  );
}
