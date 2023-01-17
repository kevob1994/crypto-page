import { HomePage } from '@/pages';
import { CoinPage } from '@/pages/CoinPage';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

export const RoutesPath: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/coin/:id' element={<CoinPage />} />
    </Routes>
  );
};
