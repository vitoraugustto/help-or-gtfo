'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ICompletedExpeditions, IPrisoner } from '@/app/common/types';
import { fetchCompletedExpeditions } from '@/app/services/prisoners';

export function CompletedExpeditions({
  prisonerId,
}: {
  prisonerId: IPrisoner['id'];
}) {
  const [page, setPage] = useState(1);
  const [completedExpeditions, setCompletedExpeditions] = useState<{
    count: number;
    results: ICompletedExpeditions[];
  }>({ count: 0, results: [] });

  useEffect(() => {
    async function handleFetchCompletedExpeditions() {
      const { payload } = await fetchCompletedExpeditions(prisonerId, page);

      setCompletedExpeditions(payload);
    }

    handleFetchCompletedExpeditions();
  }, [page]);

  return (
    <>
      <p className="text-xl">
        Expedições concluídas: {completedExpeditions.count}
      </p>
      <div className="mt-4 flex h-96 w-[50%] flex-col gap-4 overflow-y-auto pr-4 max-sm:w-[90%]">
        {completedExpeditions.results.map((completedExpedition) => (
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
                  src="/images/main-sector.png"
                  alt="Main sector"
                  highlight={completedExpedition.cleared_main_sector}
                />
              )}
              {completedExpedition.expedition.secondary_sector && (
                <Sector
                  src="/images/secondary-sector.png"
                  alt="Secondary sector"
                  highlight={completedExpedition.cleared_secondary_sector}
                />
              )}
              {completedExpedition.expedition.overload_sector && (
                <Sector
                  src="/images/overload-sector.png"
                  alt="Overload sector"
                  highlight={completedExpedition.cleared_overload_sector}
                />
              )}
              {completedExpedition.expedition.overload_sector && (
                <Sector
                  src="/images/prisoner-efficiency.png"
                  alt="Prisoner efficiency"
                  highlight={completedExpedition.prisoner_efficiency}
                />
              )}
            </div>
          </div>
        ))}
      </div>{' '}
    </>
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
