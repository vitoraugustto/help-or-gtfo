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
    <div>
      <p className="text-2xl">
        {expedition.title} - {expedition.tier}
        {expedition.difficulty}
      </p>
      <p>Quantidade de XP por concluir: {expedition.xp}</p>
    </div>
  );
}
