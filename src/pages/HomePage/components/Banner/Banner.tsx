import { Spinner } from '@/components';
import { useClient, useScreenSize } from '@/hooks';
import { backgroundBanner } from '@/static/imgs';
import { ICoins } from '@/types/request';
import classNames from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';

export const Banner: FC = () => {
  const { client } = useClient();
  const { isMd } = useScreenSize();

  const { data } = useQuery(
    ['coins-realtime'],
    async () =>
      await client<ICoins[]>(
        `coins/markets?vs_currency=usd&ids=bitcoin,flixxo,ethereum&order=market_cap_desc&sparkline=false`
      ),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  );

  if (!data) return <Spinner />;

  return (
    <div
      className=' bg-black w-full p-5 lg:p-10'
      style={{ background: `url(${backgroundBanner})` }}
    >
      <h1 className='text-orange-300 text-4xl md:text-6xl text-center'>
        Cryptocurrency
      </h1>
      <div className='grid grid-cols-3 gap-4 py-10 lg:p-10'>
        {data.map((coin) => (
          <div className='bg-gray-900 p-2 py-4 lg:p-7 rounded-lg' key={coin.id}>
            <div className='flex items-center flex-col lg:flex-row'>
              <img src={coin.image} alt='' style={{ width: '50px' }} />
              <p className='mt-3 lg:mt-0 lg:ml-5 font-bold text-gray-400 text-xl'>
                {coin.name}
              </p>
            </div>
            <div className='flex items-center justify-between mt-3 lg:mt-6 flex-col lg:flex-row'>
              <p className='text-center text-[12px] lg:text-base uppercase text-gray-400'>
                {coin?.symbol}: {!isMd && <br />}{' '}
                {coin?.current_price.toLocaleString()} USD
              </p>
              <p
                className={classNames('flex items-center', {
                  'text-green-500': coin.price_change_percentage_24h > 0,
                  'text-red-500': coin.price_change_percentage_24h <= 0,
                })}
              >
                {coin?.price_change_percentage_24h?.toFixed(2)
                  ? `${coin?.price_change_percentage_24h?.toFixed(2)}%`
                  : '-'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
