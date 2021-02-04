// next
import NextHead from 'next/head';

const Head = ({ title, children }) => (
  <NextHead>
    <title>Ninja list | {title}</title>
    {children}
  </NextHead>
);
export default Head;
