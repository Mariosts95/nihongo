import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { UseVocabulary } from '@/store/VocabularyProvider';

import WordCard from '@/components/Cards/WordCard';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const Vocabulary = () => {
  const [lesson, setLesson] = useState(0);

  const { vocabulary, lessons, updateVocabulary } = UseVocabulary();

  if (vocabulary.length === 0 || !lessons) {
    return <div>Loading...</div>;
  }

  const handleLessonChange = (event) => {
    setLesson(event.target.value);
    updateVocabulary(event.target.value);
  };

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

      <CardListWrapper>
        {vocabulary.map((word) => (
          <Grid key={word.hiragana} item xs={12} sm={4} md={3} lg={2.4}>
            <WordCard word={word} />
          </Grid>
        ))}
      </CardListWrapper>
    </PageWrapper>
  );
};

export default Vocabulary;
