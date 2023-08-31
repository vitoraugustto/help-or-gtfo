'use client';

import { useEffect, useState } from 'react';

import { IRundown } from '@/app/common/types';
import { Button } from '@/app/components';
import { fetchRundowns } from '@/app/services/rundowns';

export default function Home() {
  const [rundowns, setRundowns] = useState<IRundown[]>([]);

  useEffect(() => {
    fetchRundowns().then((res) => setRundowns(res.data.payload));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl">Rundowns</p>
      <div className="flex max-w-[600px] flex-col gap-4">
        {rundowns?.map((rundown) => (
          <div className="flex flex-col p-4" key={rundown.id}>
            <p className="font-bold">
              <span className="text-yellow-400">ALT://</span>RUNDOWN&nbsp;
              {rundown.number}.0
            </p>
            <p>{rundown.title}</p>

            <div className="flex flex-wrap gap-4">
              {rundown.expeditions.map((expedition) => (
                <Button key={expedition.id}>
                  R{String(rundown.number)}
                  {expedition.tier}
                  {expedition.difficulty}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
