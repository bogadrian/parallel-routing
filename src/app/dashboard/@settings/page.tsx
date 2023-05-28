const getData = async (): Promise<{ message: string }> => {
  const res = await fetch('http://localhost:3000/api/source', {
    cache: 'no-store'
  });
  const data = await res.json();

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

const SettingsPage = async () => {
  const data = await getData();

  console.log({ data });

  //throw new Error();

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

export default SettingsPage;
