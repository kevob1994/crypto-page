import { useClient } from '@/hooks';
import { IHistoryCoin } from '@/types/request';
import { days } from '@/utils/constants';
import { FC, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Select } from '../Select';
import { Spinner } from '../Spinner';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
	Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface IChartCoinProps {
  coin: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
	Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

export const ChartCoin: FC<IChartCoinProps> = () => {
  const { id } = useParams();
  const { client } = useClient();
  const [daysSelect, setDaysSelect] = useState('1');

  const { data: history, isLoading } = useQuery(
    ['history-coin', id, daysSelect],
    async () =>
      await client<IHistoryCoin>(
        `coins/${id}/market_chart?vs_currency=USD&days=${daysSelect}`
      ),
    {
      retry: false,
      refetchOnWindowFocus: true,
    }
  );

  const selectDays = (value: string) => {
    setDaysSelect(value);
  };

  if (isLoading && !history) return <Spinner />;

  return (
    <div className='w-[95%] flex items-center flex-col justify-center m-auto mt-10'>
      <div className='flex items-center w-full'>
        <p className='mr-5'>Select Days:</p>
        <div className='flex-1'>
          <Select
            options={days}
            value={daysSelect}
						defaultValue={days[0].value}
            handleChange={selectDays}
          />
        </div>
      </div>

        <Line
          options={options}
          data={{
            labels: history?.prices.map((coin: number[]) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return daysSelect === '1' ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: history?.prices.map((coin: number[]) => coin[1]),
                label: `Price ( Past ${daysSelect} Days ) in USD`,
                borderColor: '#ff8e15',
                fill: 'start',
                backgroundColor: '#fdbb746a',
              },
            ],
          }}
        />
    </div>
  );
};
