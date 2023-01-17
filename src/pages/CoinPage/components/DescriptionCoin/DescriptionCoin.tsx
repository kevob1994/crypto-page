import { IDetailCoin } from '@/types/request';
import parse from 'html-react-parser';
import { FC } from 'react';

interface IDescriptionCoinProps {
  coin?: IDetailCoin;
}

export const DescriptionCoin: FC<IDescriptionCoinProps> = ({ coin }) => {
  return (
    <div className='w-full rounded-3xl px-5 pb-6 md:px-10 md:pb-10 backdrop-blur-sm bg-orange-100/30 text-black'>
      <div className='relative h-62 w-full mb-3'>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          className='mx-auto my-5 lg:my-10 h-[70px] lg:h-[200px]'
        />
      </div>
      <div className='flex items-end'>
        <p className='text-3xl md:text-4xl'>{coin?.name}</p>{' '}
        <div className=' bg-orange-400 text-white text-xs px-2 py-1 ml-3 rounded-lg mb-[7px]'>
          {coin?.symbol}
        </div>
      </div>
      <div className='flex flex-wrap mb-5'>
        <div className='w-full flex-none text-sm flex items-center text-gray-600'>
          <span className='text-gray-400 whitespace-nowrap mr-3 mb-5'>
            Rank: {coin?.market_cap_rank}
          </span>
        </div>
        <div className='flex items-center w-full justify-between min-w-0 '>
          <h2 className='text-base md:text-lg mr-auto cursor-pointer'>
            {parse(coin?.description.en.split('. ')[0])}.
          </h2>
        </div>
      </div>
      <div className='text-base md:text-lg text-white mt-1'>
        <span className='font-bold'>Current price</span>: $
        {coin?.market_data.current_price['usd'].toLocaleString()}
      </div>
      <div className='text-base md:text-lg text-white mt-1'>
        <span className='font-bold'>Market Cap:</span>{' '}
        {coin?.market_data.market_cap['usd'].toLocaleString()}
      </div>
    </div>
  );
};
