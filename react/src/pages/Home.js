import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => (await Axios.get('https://catfact.ninja/fact')).data
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>This is home page</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
};
