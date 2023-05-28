import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/source', {
    cache: 'no-store'
  });
  const data = await res.json();

  return data;
};

const LandingPage = async () => {
  const data = await getData();

  throw new Error();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>{data.message}</h1>
    </div>
  );
};

export default LandingPage;
