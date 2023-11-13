import Link from 'next/link';

import { Button } from '@/app/components';
import { fetchPrisoners } from '@/app/services/prisoners';

async function handleFetchPrisoners() {
  const { payload } = await fetchPrisoners();

  return payload;
}

export default async function PrisonersScreen() {
  const prisoners = await handleFetchPrisoners();

  return (
    <div className="flex w-full flex-col items-center pt-8">
      <p className="text-3xl">Prisioneiros</p>
      <p>Ranqueados por nível</p>
      <div className="flex w-[350px] flex-col gap-4 p-4">
        {prisoners.map((prisoner) => (
          <Link key={prisoner.id} href={`/complex/prisoners/${prisoner.id}`}>
            <Button fullWidth color="yellow">
              Level {prisoner.level.toString()}&nbsp;-&nbsp;{prisoner.username}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
