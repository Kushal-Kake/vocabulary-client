import React from 'react';
import { Modal, Typography, Box } from '@mui/material';
import { Word } from '../types';

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
          <Typography variant="h6" className="modal-subheading">Meaning:</Typography>
          <Typography variant="body1">{word.meaning}</Typography>
          {word.phrases && (
            <>
              <Typography variant="h6" className="modal-subheading">Phrases:</Typography>
              <Typography variant="body1">{word.phrases.join(', ')}</Typography>
            </>
          )}
          {word.examples && (
            <>
              <Typography variant="h6" className="modal-subheading">Examples:</Typography>
              <Typography variant="body1">{word.examples.join(', ')}</Typography>
            </>
          )}
          {word.etymology && (
            <>
              <Typography variant="h6" className="modal-subheading">Etymology:</Typography>
              <Typography variant="body1">{word.etymology}</Typography>
            </>
          )}
        </Box>
      </Modal>
    );  
};

export default WordModal;
