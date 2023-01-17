import { ChartCoin, Header, Spinner } from '@/components';
import { useClient } from '@/hooks';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { DescriptionCoin } from './components';
import { IDetailCoin } from '@/types/request';

export const CoinPage: FC = () => {
  const { id } = useParams();
  const { client } = useClient();

  const { data, isLoading } = useQuery(
    ['coin', id],
    async () => await client<IDetailCoin>(`coins/${id}`),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading)
    return (
      <div className='w-full mt-10'>
        <Spinner />
      </div>
    );

  return (
    <>
      <Header />
      <div className='flex flex-col lg:flex-row dark:text-gray-400'>
        <div className='w-full  lg:w-[30%] flex flex-col items-center md:items-start p-5 pt-10'>
          <DescriptionCoin coin={data} />
        </div>
        <div className='flex-1 mb-10 px-5'>
          <ChartCoin coin={data} />
        </div>
      </div>
    </>
  );
};
