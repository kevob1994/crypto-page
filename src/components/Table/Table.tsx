import { FC } from 'react';
import { Spinner } from '../Spinner';
import { Body, Header, Pagination } from './components';
import { IPagination } from './components/Pagination/Pagination';

interface ITableProps {
  body: Array<string | number | null | JSX.Element>[];
  headers: Array<string | JSX.Element>;
  pagination?: IPagination;
  isLoading: boolean;
}

export const Table: FC<ITableProps> = ({
  body,
  headers,
  pagination,
  isLoading,
}) => {
  return (
    <>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-900 uppercase bg-orange-300 sticky top-0'>
            <Header headers={headers} />
          </thead>
          <tbody>{!isLoading && <Body body={body} />}</tbody>
        </table>
        {isLoading && (
          <div className='pb-5'>
            <Spinner />
          </div>
        )}
      </div>
      {pagination && <Pagination pagination={pagination} />}
    </>
  );
};
