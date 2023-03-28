import { useEffect, useState } from 'react';

function useWindowSize() {
  // 초기값세팅
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    responsive: '',
  });

  const getResponsive = () => {
    if (window.innerWidth < 768) {
      return 'mobile';
    } else if (window.innerWidth < 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  useEffect(() => {
    // resize될때마다 윈도우값을 저장
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        responsive: getResponsive(),
      });
    }

    // 윈도우에 resize 이벤트추가
    window.addEventListener('resize', handleResize);

    // 초기값세팅 되어있는것을 업데이트 하기
    handleResize();

    // 다실행되면, 이벤트 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
