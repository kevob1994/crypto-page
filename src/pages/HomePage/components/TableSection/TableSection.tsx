import { Table } from '@/components';
import { useClient } from '@/hooks';
import { ICoins } from '@/types/request';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const TableSection: FC = () => {
  const { client } = useClient();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const headers = [
    'Coin',
    'Price (USD)',
    'Change price',
    '24h Change',
    'Options',
  ];

  const { data, isLoading } = useQuery(
    ['coins', page],
    async () =>
      await client<ICoins[]>(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      ),
    {
      retry: false,
      refetchOnWindowFocus: true,
    }
  );

  const selectPage = (page: number) => {
    setPage(page);
  };

  const body = data?.map((coin) => {
    return [
      <div className='flex items-center'>
        <img
          src={coin.image}
          alt=''
          className='mr-[15px]'
          style={{ width: '20px' }}
        />
        <span>{coin.name}</span>
      </div>,
      coin.current_price.toLocaleString(),
      <div
        className={classNames('flex items-center', {
          'text-green-500': coin.price_change_percentage_24h > 0,
          'text-red-500': coin.price_change_percentage_24h <= 0,
        })}
      >
        {coin.price_change_percentage_24h > 0 ? (
          <FontAwesomeIcon icon={faArrowTrendUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowTrendDown} />
        )}
        <p className='ml-[15px]'>{coin.price_change_percentage_24h}</p>
      </div>,
      coin.total_volume.toLocaleString(),
      <div
        onClick={() => navigate(`/coin/${coin.id}`)}
        className='text-blue-600 cursor-pointer'
      >
        More info
      </div>,
    ];
  });

  return (
    <div className='max-w-5xl m-auto mt-14 mb-14 p-[10px]'>
      <Table
        headers={headers}
        body={body || []}
        pagination={{ page, pagesLimit: 5, selectPage }}
        isLoading={isLoading && !data}
      />
    </div>
  );
};
