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
      <p className="text-xl">{prisoner.username}</p>
      <p className="text-xl">Level: {prisoner.level}</p>
      <p className="text-xl">Experiência obtida: {prisoner.xp}</p>
      <CompletedExpeditions prisonerId={prisonerId} />
    </div>
  );
}
