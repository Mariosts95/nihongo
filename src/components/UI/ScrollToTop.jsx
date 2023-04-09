import useScrollHide from '@/hooks/useScrollHide';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const ScrollToTop = () => {
  const { showElement } = useScrollHide(200);

  return (
    <Zoom
      in={showElement}
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
