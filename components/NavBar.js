import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === '/' ? 'active' : 'inactive'}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname === '/about' ? 'active' : 'inactive'}>
          About
        </a>
      </Link>
      <style jsx>{`
        .active {
          color: gold;
        }
        /* .inactive {
          color: blue;
        } */
      `}</style>
    </nav>
  );
}
