import { IExpedition } from '@/app/common/types';

export default function Expedition({
  params,
}: {
  params: { title: string; expedition: IExpedition };
}) {
  return (
    <div>
      <p>{params.title}</p>

      <p>Expedição:</p>
      <p>
        {params.expedition.tier}
        {params.expedition.difficulty}
      </p>
    </div>
  );
}
