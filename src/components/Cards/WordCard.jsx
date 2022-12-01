import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useGlobal } from '@/store/GlobalProvider';

const WordCard = ({ word, showRomaji }) => {
  const { kanaDisplayLanguage } = useGlobal();

  const [displaySide, setDisplaySide] = useState(kanaDisplayLanguage);
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setDisplaySide(kanaDisplayLanguage);
    setShowMeaning(false);
  }, [kanaDisplayLanguage, word]);

  const toggleShowMeaning = () => {
    setShowMeaning((prev) => !prev);
  };

  return (
    <Box sx={{ maxWidth: 350, width: '100%', mx: 'auto', my: 0, p: 1 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h2' gutterBottom>
            {displaySide ? word.hiragana : word.english}
          </Typography>

          <Typography variant='body2' gutterBottom>
            {showRomaji ? word.romaji : ''}
          </Typography>

          {showMeaning ? (
            <Typography variant='body1' gutterBottom>
              {kanaDisplayLanguage ? word.english : word.hiragana}
            </Typography>
          ) : (
            <Button
              onClick={toggleShowMeaning}
              variant='contained'
              sx={{ my: 2, mx: 'auto', display: 'block' }}
            >
              {kanaDisplayLanguage ? 'Show English' : 'Show Japanese'}
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WordCard;
