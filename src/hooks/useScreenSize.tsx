import { useMediaQuery } from 'react-responsive';

export const  useScreenSize = () => {
  const is2Xl = useMediaQuery({ query: '(min-width: 1536px)' });
  const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  const isSm = useMediaQuery({ query: '(min-width: 640px)' });

  return {
    isSm: isSm,
    isMd: isMd,
    isLg: isLg,
    isXl: isXl,
    is2Xl: is2Xl,

    isDesktop: isLg,
    isMobile: !isSm,
    isTablet: isMd,

    isLessThanDesktop: !isLg && (isMd || isSm || !isSm)
  };
}

export default useScreenSize;
