import { IPrisoner } from '@/app/common/types';

export default async function PrisonerScreen({
  params,
}: {
  params: { prisonerId: IPrisoner['id'] };
}) {
  const { prisonerId } = params;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-xl">Prisioneiro de ID #{prisonerId}</p>
    </div>
  );
}
