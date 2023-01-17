import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sticky top-0 z-10'>
      <div className='py-6 px-10 shadow-lg bg-red backdrop-blur-sm bg-white/30'>
        <p
          className='text-[30px] font-bold text-black cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(253,186,116,1)]'
          onClick={() => navigate('/')}
        >
          Home
        </p>
      </div>
    </div>
  );
};
