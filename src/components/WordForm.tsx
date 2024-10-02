
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_WORD } from '../graphql/queries';
import { TextField, Button } from '@mui/material';
import './WordForm.css'; 

interface WordFormProps {
  onWordAdded: () => void; 
}

const WordForm: React.FC<WordFormProps> = ({ onWordAdded }) => {
  const [word, setWord] = useState<string>('');
  const [createWord] = useMutation(CREATE_WORD);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createWord({
        variables: {
          data: { word },
        },
      });
      setWord(''); // Clear the input after submission
      onWordAdded(); // Call the function to fetch words
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  return (
    <div className="word-form-container">
      <form onSubmit={handleSubmit} className="word-form">
        <TextField
          label="Enter Word"
          variant="outlined"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="word-input" 
        />
        <Button type="submit" variant="contained" color="primary" className="add-button">
          Add Word
        </Button>
      </form>
    </div>
  );
};

export default WordForm;
