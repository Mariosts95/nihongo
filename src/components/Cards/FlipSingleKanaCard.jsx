import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useGlobal } from '@/store/GlobalProvider';

const FlipSingleKanaCard = ({ kana, romaji }) => {
  const { kanaDisplayLanguage } = useGlobal();

  const [displaySide, setDisplaySide] = useState(kanaDisplayLanguage);

  useEffect(() => {
    setDisplaySide(kanaDisplayLanguage);
  }, [kanaDisplayLanguage, kana]);

  const flipCard = () => {
    setDisplaySide(!displaySide);
  };

  return (
    <Box sx={{ maxWidth: 350, width: 'fit-content', mx: 'auto', my: 2, p: 3 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h1' gutterBottom>
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
