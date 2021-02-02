// next
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <Link href='/'>
        <a>Go back to home page</a>
      </Link>
    </div>
  );
}
