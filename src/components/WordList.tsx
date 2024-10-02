import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_WORDS } from '../graphql/queries';
import { Word } from '../types';
import './WordList.css'; 
import { Grid, Card, CardContent, Typography, Modal, Box } from '@mui/material';
import WordForm from './WordForm';

const WordList: React.FC = () => {
  const { data, loading, error, refetch } = useQuery<{ words: Word[] }>(FETCH_WORDS);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  // Fetch words when a new word is added
  const handleWordAdded = () => {
    refetch(); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <WordForm onWordAdded={handleWordAdded} /> 
      <Grid container spacing={2} className="word-grid">
        {data?.words.map((word) => (
          <Grid item key={word._id} xs={12} sm={6} md={4}>
            <Card className="word-card" onClick={() => setSelectedWord(word)}>
              <CardContent>
                <Typography variant="h5">{word.word}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <WordModal open={!!selectedWord} word={selectedWord} onClose={() => setSelectedWord(null)} />
    </>
  );
};

const WordModal: React.FC<{ open: boolean; word: Word | null; onClose: () => void }> = ({
  open,
  word,
  onClose,
}) => {
  if (!word) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', margin: '10% auto', width: '400px' }}>
        <Typography variant="h4">{word.word}</Typography>
        <Typography variant="h6" className="modal-heading">Meaning:</Typography>
        <Typography variant="body1">{word.meaning}</Typography>
        <Typography variant="h6" className="modal-heading">Etymology:</Typography>
        <Typography variant="body1">{word.etymology}</Typography>
        {word.phrases && (
          <>
            <Typography variant="h6" className="modal-heading">Phrases:</Typography>
            <Typography variant="body1">{word.phrases.join(', ')}</Typography>
          </>
        )}
        
      </Box>
    </Modal>
  );
};

export default WordList;

