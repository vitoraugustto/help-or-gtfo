import Link from 'next/link';

import { Button } from '@/app/components';

export default function ComplexScreen() {
  return (
    <div className="h- flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link href="/complex/rundowns">
          <Button fullWidth>Rundowns</Button>
        </Link>
        <Link href="/complex/prisoners">
          <Button fullWidth>Prisioneiros</Button>
        </Link>
      </div>
    </div>
  );
}
