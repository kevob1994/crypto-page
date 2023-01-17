import { FC } from 'react';

interface IBodyProps {
  body: Array<string | number | null | JSX.Element>[];
}

export const Body: FC<IBodyProps> = ({ body }) => {
  return (
    <>
      {body.map((items, index) => (
        <tr
          key={index}
          className='border-b dark:border-gray-700 hover:bg-gray-800'
        >
          {items.map((item, index) => (
            <td key={index} className='px-6 py-6 first:sticky first:left-0 bg-gray-900'>
              {item}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
