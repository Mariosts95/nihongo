import { useRef, useState } from 'react';

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const TestCard = ({ kana, romaji }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = inputRef.current.value.trim().toLowerCase();
    setIsCorrect(answer === romaji);
  };

  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor:
          isCorrect === null ? 'primary.main' : isCorrect ? 'success.light' : 'error.main',
      }}
    >
      <CardContent sx={{ textAlign: 'center', opacity: isCorrect && 0.3 }}>
        <Typography variant='h1' color='text.primary' gutterBottom>
          {kana}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            name='answer'
            label='Answer'
            variant='filled'
            color={isCorrect === false ? 'error' : 'primary'}
            inputRef={inputRef}
            error={isCorrect === false}
            helperText={isCorrect === false ? 'Incorrect entry.' : ''}
            disabled={isCorrect === true}
            sx={{ width: '100%', mb: 1 }}
            autoComplete='off'
            inputProps={{ style: { textAlign: 'center' } }}
          />
          <Button type='submit' variant='outlined' disabled={isCorrect === true}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestCard;
