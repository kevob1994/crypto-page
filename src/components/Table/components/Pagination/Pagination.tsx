import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

export interface IPagination {
  page: number;
  pagesLimit: number;
  selectPage: (page: number) => void;
}

interface IPaginationProps {
  pagination: IPagination;
}

export const Pagination: FC<IPaginationProps> = ({ pagination }) => {
  const { page, pagesLimit, selectPage } = pagination;

  const handlerArrow = (value: number) => {
    if (page + value < 1 || page + value > pagesLimit) return;
    selectPage(page + value);
  };

  return (
    <nav className='mt-5 cursor-pointer'>
      <ul className='inline-flex items-center -space-x-px'>
        <li onClick={() => handlerArrow(-1)}>
          <a
            className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
        </li>
        <>
          {[...Array(pagesLimit).keys()].map((item) => (
            <li onClick={() => selectPage(item + 1)} key={item}>
              <a
                className={classNames('px-3 py-2 leading-tight ', {
                  'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
                    item + 1 === page,

                  'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
                    item + 1 !== page,
                })}
              >
                {item + 1}
              </a>
            </li>
          ))}
        </>
        <li onClick={() => handlerArrow(1)}>
          <a
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
