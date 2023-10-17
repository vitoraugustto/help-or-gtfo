import Image from 'next/image';

import { IPrisoner } from '@/app/common/types';
import {
  fetchPrisoner,
  fetchPrisonerCompletedExpeditions,
} from '@/app/services/prisoners';

async function getPrisoner(id: IPrisoner['id']) {
  const { payload } = await fetchPrisoner(id);

  return payload;
}

async function getPrisonerCompletedExpeditions(id: IPrisoner['id']) {
  const { payload } = await fetchPrisonerCompletedExpeditions(id);

  return payload;
}

export default async function PrisonerScreen({
  params,
}: {
  params: { prisonerId: IPrisoner['id'] };
}) {
  const { prisonerId } = params;
  const prisoner = await getPrisoner(prisonerId);
  const completedExpeditions = await getPrisonerCompletedExpeditions(
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
              {completedExpedition.expedition.secondary_sector && (
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
              {completedExpedition.expedition.overload_sector && (
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
          </div>
        ))}
      </div>
    </div>
  );
}
