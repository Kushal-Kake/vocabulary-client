import React from 'react';
import { Container, Typography } from '@mui/material';
import WordList from './components/WordList';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Vocabulary App
      </Typography>
      <WordList />
    </Container>
  );
};

export default App;

