import Link from 'next/link';

import { Button } from '@/app/components';

export default function Complex() {
  return (
    <div className="h- flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link href="/complex/rundowns">
          <Button fullWidth>Rundowns</Button>
        </Link>
        <Button fullWidth>Prisioneiros</Button>
      </div>
    </div>
  );
}
