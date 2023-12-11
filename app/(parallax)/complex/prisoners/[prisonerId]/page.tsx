import Image from 'next/image';

import { IPrisoner } from '@/app/common/types';
import { fetchPrisoner } from '@/app/services/prisoners';

import { CompletedExpeditions } from './components';

async function handleFetchPrisoner(id: IPrisoner['id']) {
  const { payload } = await fetchPrisoner(id);

  return payload;
}

export default async function PrisonerScreen({
  params,
}: {
  params: { prisonerId: IPrisoner['id'] };
}) {
  const { prisonerId } = params;
  const prisoner = await handleFetchPrisoner(prisonerId);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-[50%] max-sm:w-[90%]">
        <div className="flex flex-row justify-between ">
          <p className="text-3xl">{prisoner.username}</p>
          <div>
            <p className="text-xl">
              Level:&nbsp;
              <span className="text-3xl font-bold text-red-500">
                {prisoner.level}
              </span>
            </p>
            <p className="text-xl">
              EXP:&nbsp;
              <span className="text-xl font-bold text-red-500">
                {prisoner.xp}
              </span>
            </p>
          </div>
        </div>
      </div>
      <CompletedExpeditions prisonerId={prisonerId} />
    </div>
  );
}
