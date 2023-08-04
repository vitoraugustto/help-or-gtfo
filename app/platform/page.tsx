import Link from 'next/link';

import { Button } from '../components';

export default function Platform() {
  return (
    <Link href="/platform/notice">
      <Button color="red" className="w-56">
        Injetar
      </Button>
    </Link>
  );
}
