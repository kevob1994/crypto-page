import { FC } from 'react';
import { Header } from '@/components';
import { Banner, TableSection } from './components';

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <TableSection />
    </>
  );
};
