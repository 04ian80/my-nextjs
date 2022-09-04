import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href='/'>
        <a
          style={{
            color: router.pathname === '/' ? 'black' : 'rgba(0,0,0,0.6)',
          }}
        >
          Home
        </a>
      </Link>
      <Link href='/about'>
        <a
          style={{
            color: router.pathname === '/about' ? 'black' : 'rgba(0,0,0,0.6)',
          }}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
