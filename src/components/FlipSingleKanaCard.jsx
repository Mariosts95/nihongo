import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { UseHiragana } from '../store/hiraganaProvider';

const FlipSingleKanaCard = ({ kana, romaji }) => {
  const { hiraganaDisplayJap } = UseHiragana();
  const [displaySide, setDisplaySide] = useState(hiraganaDisplayJap);

  useEffect(() => {
    setDisplaySide(hiraganaDisplayJap);
  }, [hiraganaDisplayJap, kana]);

  const flipCard = () => {
    setDisplaySide(!displaySide);
  };

  return (
    <Box sx={{ maxWidth: 200, mx: 'auto', my: 2, p: 3 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h2' component='p' color='text.secondary' gutterBottom>
            {displaySide ? kana : romaji}
          </Typography>
          <Button onClick={flipCard} variant='outlined' size='small'>
            Show me the {displaySide ? 'romaji' : 'kana'}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FlipSingleKanaCard;
