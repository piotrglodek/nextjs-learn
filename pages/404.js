// next
import Link from 'next/link';
import { useRouter } from 'next/router';
// react
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
      }
      if (seconds === 0) {
        // -1 go to prev history page
        // router.go(-1);
        router.push('/');
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className='not-found'>
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <Link href='/'>
        <a>Go back to home page</a>
      </Link>
      <p>redirecting to home in {seconds}s</p>
    </div>
  );
}
