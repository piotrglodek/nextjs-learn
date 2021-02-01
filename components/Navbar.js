// next
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Ninjas List</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
