import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';


export const useGetCat = () => {
  const { 
    data, 
    refetch, 
    isLoading: isCatLoding,
    error,
  } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => (await Axios.get('https://catfact.ninja/fact')).data,
  });

  const refetchData = () => {
    alert('Data Refetching...');
    refetch();
  }

  return { data, refetchData, isCatLoding };
}