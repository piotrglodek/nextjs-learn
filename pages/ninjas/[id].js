export const getStaticPaths = async () => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users`)
  ).json();

  const paths = data.map(ninja => ({ params: { id: ninja.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default function Details() {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
}
