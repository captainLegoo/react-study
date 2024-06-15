import { useGetCat } from "./useGetCat";

export const Cat = () => {
  const { data, refetchData, isCatLoding } = useGetCat();

  if (isCatLoding) return (<h1> loading...</h1>);

  return (
    <div>
      <button onClick={refetchData}> refetch </button>
      <h1> {data?.fact} </h1>
    </div>
  );
};