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
      <div className="flex flex-col gap-4">
        {completedExpeditions.map((completedExpedition) => (
          <div
            key={completedExpedition.id}
            className="flex max-w-[750px] flex-row border-2 border-yellow-500 p-2 text-yellow-500"
          >
            <p>
              {completedExpedition.expedition.display_name} -{' '}
              {completedExpedition.expedition.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
