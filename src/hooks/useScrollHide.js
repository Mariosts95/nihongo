import { useEffect, useState } from 'react';

const useScrollHide = (triggerHeight, initialValue = false) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showElement, setShowElement] = useState(initialValue);

  const handleVisibleButtonBot = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition > triggerHeight) {
      setShowElement(true);
    } else if (scrollPosition < triggerHeight) {
      setShowElement(false);
    }
  };

  const handleVisibleButtonTop = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition < triggerHeight) {
      setShowElement(true);
    } else if (scrollPosition > triggerHeight) {
      setShowElement(false);
    }
  };

  useEffect(() => {
    initialValue
      ? window.addEventListener('scroll', handleVisibleButtonTop)
      : window.addEventListener('scroll', handleVisibleButtonBot);

    return () => {
      initialValue
        ? window.addEventListener('scroll', handleVisibleButtonTop)
        : window.addEventListener('scroll', handleVisibleButtonBot);
    };
  }, [scrollPosition]);

  return { showElement };
};

export default useScrollHide;
