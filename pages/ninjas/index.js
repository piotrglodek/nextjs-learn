// components
import Head from '../../components/Head';
// next
import Link from 'next/link';
// styles
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users`)
  ).json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head title='Ninjas' />
      <div>
        <h1>All ninjas</h1>
        {ninjas.map(ninja => (
          <div key={ninja.id}>
            <Link href={`/ninjas/${ninja.id}`}>
              <a href='' className={styles.single}>
                <h3>{ninja.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
