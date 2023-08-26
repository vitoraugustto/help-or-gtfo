import Link from 'next/link';

import { Button } from '../components';

export default function Home() {
  return (
    <Link href="/complex/rundowns">
      <Button>Rundowns</Button>
    </Link>
  );
}
