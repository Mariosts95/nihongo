import { useEffect, useState } from 'react';

const useElementHeight = (query) => {
  const element = document.querySelector(query);

  const [height, setHeight] = useState(element?.offsetHeight);
  const [windowWidth, setWindowWidth] = useState(window.pageYOffset);

  const handleHeightCalc = () => {
    const width = window.pageYOffset;
    setWindowWidth(width);
    setHeight(element?.offsetHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleHeightCalc);

    return () => {
      window.addEventListener('resize', handleHeightCalc);
    };
  }, [windowWidth, element]);

  return height;
};

export default useElementHeight;
