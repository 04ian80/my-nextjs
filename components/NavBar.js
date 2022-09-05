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
        nav {
          background-color: #ff9c80;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
        .inactive {
          color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </nav>
  );
}
