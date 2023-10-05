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
      <p className="text-2xl">{expedition.display_name}</p>
      <p>Quantidade de XP por concluir: {expedition.xp}</p>
      <p>Prisioneiros que finalizaram a expedição:</p>
      {expedition.finishers?.map((prisoner) => (
        <div className="flex flex-row">
          <p>Level {prisoner.level} -&nbsp;</p>
          <p>{prisoner.username}</p>
        </div>
      ))}
    </div>
  );
}
