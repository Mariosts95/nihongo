import { useEffect, useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);

    return () => {
      window.removeEventListener('scroll', handleVisibleButton);
    };
  }, [scrollPosition]);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition > 300) {
      setShowScroll(true);
    } else if (scrollPosition < 300) {
      setShowScroll(false);
    }
  };

  return (
    <Zoom
      in={showScroll}
      timeout={{
        enter: 250,
        exit: 250,
      }}
    >
      <Fab
        color='primary'
        size='medium'
        aria-label='scroll back to top'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
