import Link from 'next/link';

import { Button } from '../components';

export default function Platform() {
  return (
    <Link href="/complex/notice">
      <Button color="red" className="w-56">
        Injetar
      </Button>
    </Link>
  );
}
