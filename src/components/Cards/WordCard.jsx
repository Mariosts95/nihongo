import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { textToSpeech } from '@/utils/helpers';

const WordCard = ({ word, showRomaji }) => {
  const kanaDisplayLanguage = useSelector((state) => state.global.kanaDisplayLanguage);
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
    <Box sx={{ maxWidth: 380, width: '100%', height: '100%', mx: 'auto', my: 0, p: 1 }}>
      <Card
        sx={{
          position: 'relative',
          pt: 2,
          height: '100%',
        }}
      >
        <IconButton
          onClick={() => {
            const text = displaySide ? word.hiragana : word.english;
            const lang = displaySide ? 'ja-JP' : 'en-US';
            textToSpeech(text, lang);
          }}
          color='primary'
          size='small'
          sx={{ position: 'absolute', top: 0, right: 0, m: 1 }}
        >
          <VolumeUpIcon />
        </IconButton>
        <CardContent
          sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant='h4' gutterBottom>
            {displaySide ? word.hiragana : word.english}
          </Typography>

          {showRomaji ? (
            <Typography variant='body2' gutterBottom>
              {word.romaji}
            </Typography>
          ) : null}

          {showMeaning ? (
            <Typography variant='body1' gutterBottom>
              {kanaDisplayLanguage ? word.english : word.hiragana}
            </Typography>
          ) : (
            <Button
              onClick={toggleShowMeaning}
              variant='contained'
              sx={{ mx: 'auto', mt: 'auto', display: 'block' }}
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
