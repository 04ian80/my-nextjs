import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router); // [Object] query: {id: [id]}
  return 'Detail';
}
