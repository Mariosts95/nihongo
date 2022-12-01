import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { UseVocabulary } from '@/store/VocabularyProvider';

import WordCard from '@/components/Cards/WordCard';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { randomInt } from '@/utils/helpers';

const VocabularyRandom = () => {
  const [lesson, setLesson] = useState(0);
  const [randomWord, setRandomWord] = useState(null);
  const [showRomaji, setShowRomaji] = useState(false);

  const { vocabulary, lessons, updateVocabulary } = UseVocabulary();

  useEffect(() => {
    updateVocabulary(lesson);
  }, []);

  useEffect(() => {
    setRandomWord(vocabulary[randomInt(0, vocabulary.length - 1)]);
  }, [vocabulary]);

  const handleLessonChange = (event) => {
    setLesson(event.target.value);
    updateVocabulary(event.target.value);
  };

  const getRandomWord = () => {
    setRandomWord(vocabulary[randomInt(0, vocabulary.length - 1)]);
  };

  const toggleRomaji = () => {
    setShowRomaji((prev) => !prev);
  };

  if (vocabulary.length === 0 || !lessons || !randomWord) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Generate a random word from the selected lesson
      </Typography>

      <FormControl fullWidth>
        <InputLabel id='lesson-label'>Lesson</InputLabel>
        <Select
          labelId='lesson-label'
          id='lesson-select'
          value={lesson}
          label='Lesson'
          onChange={handleLessonChange}
        >
          {lessons.map((lesson) => (
            <MenuItem key={lesson} value={lesson}>
              {lesson === 0 ? 'Introduction' : `Lesson ${lesson}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='body1' sx={{ mr: 1 }}>
          Display language:
        </Typography>
        <LanguageSwitch />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='body1' sx={{ mr: 1 }}>
          Romaji:
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
          <Typography variant='body1'>Off</Typography>
          <Switch checked={showRomaji} onChange={toggleRomaji} />
          <Typography variant='body1'>On</Typography>
        </Box>
      </Box>

      <Button
        onClick={getRandomWord}
        variant='contained'
        sx={{ my: 2, mx: 'auto', display: 'block' }}
      >
        New word
      </Button>

      <WordCard word={randomWord} showRomaji={showRomaji} />
    </PageWrapper>
  );
};

export default VocabularyRandom;
