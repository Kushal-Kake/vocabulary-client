import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { WordCardProps } from '../types';

const WordCard: React.FC<WordCardProps> = ({ word, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <Typography variant="h5">{word.word}</Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
