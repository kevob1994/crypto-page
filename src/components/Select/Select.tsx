import { FC } from 'react';

export interface IOption {
  label: string | number | null | JSX.Element;
  value: string;
}

interface ISelectProps {
  options: IOption[];
  handleChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
}

export const Select: FC<ISelectProps> = ({
  options,
  handleChange,
  value: valueSelected,
	defaultValue
}) => {
  return (
    <>
      <select
        id='large'
        value={valueSelected}
        onChange={(e) => handleChange(e.target.value)}
        className='block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
