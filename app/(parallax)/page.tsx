import Link from 'next/link';

import { Button } from '@/app/components';

export default function IndexScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <p className="text-xl">WORK TOGETHER OR DIE TOGETHER</p>
        <Link href="/notice">
          <Button fullWidth color="yellow">
            Entrar no complexo
          </Button>
        </Link>
      </div>
    </div>
  );
}
