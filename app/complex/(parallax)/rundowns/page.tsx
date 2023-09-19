import Link from 'next/link';

import { IRundown } from '@/app/common/types';
import { Button } from '@/app/components';
import { fetchRundowns } from '@/app/services/rundowns';

async function handleFetchRundowns() {
  const { payload } = await fetchRundowns();

  return payload;
}

export default async function Home() {
  const rundowns: IRundown[] = await handleFetchRundowns();

  return (
    <div className="flex w-full flex-col items-center">
      <p className="text-3xl">Rundowns</p>
      <div className="flex max-w-[600px] flex-col gap-4">
        {rundowns.map((rundown) => (
          <div className="flex flex-col p-4" key={rundown.id}>
            <p className="font-bold">
              <span className="text-yellow-400">ALT://</span>RUNDOWN&nbsp;
              {rundown.number}.0
            </p>
            <p>{rundown.title}</p>

            <div className="flex flex-wrap gap-4">
              {rundown.expeditions.map((expedition) => (
                <Link
                  key={expedition.id}
                  href={{
                    pathname: `/complex/rundowns/${rundown.id}/expeditions/${expedition.id}`,
                  }}
                >
                  <Button>
                    R{String(rundown.number)}
                    {expedition.tier}
                    {expedition.difficulty}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
