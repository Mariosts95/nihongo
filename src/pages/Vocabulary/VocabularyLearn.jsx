import { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { UseVocabulary } from '@/store/VocabularyProvider';

import WordCard from '@/components/Cards/WordCard';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const VocabularyLearn = () => {
  const [lesson, setLesson] = useState(0);
  const [showRomaji, setShowRomaji] = useState(false);

  const { vocabulary, lessons, updateVocabulary } = UseVocabulary();

  const handleLessonChange = (event) => {
    setLesson(event.target.value);
    updateVocabulary(event.target.value);
  };

  const toggleRomaji = () => {
    setShowRomaji((prev) => !prev);
  };

  if (vocabulary.length === 0 || !lessons) {
    return <Loader />;
  }

  return (
    <PageWrapper>
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
          Romaji:
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
          <Typography variant='body1'>Off</Typography>
          <Switch checked={showRomaji} onChange={toggleRomaji} />
          <Typography variant='body1'>On</Typography>
        </Box>
      </Box>

      <CardListWrapper>
        {vocabulary.map((word) => (
          <Grid key={word.hiragana} item xs={12} sm={4} md={3} lg={2.4}>
            <WordCard word={word} showRomaji={showRomaji} />
          </Grid>
        ))}
      </CardListWrapper>
    </PageWrapper>
  );
};

export default VocabularyLearn;
