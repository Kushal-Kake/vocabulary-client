import { gql } from '@apollo/client';

export const CREATE_WORD = gql`
  mutation CreateWord($data: WordInput!) {
    createWord(data: $data) {
      _id
      word
      meaning
      phrases
      synonyms
      examples
      etymology
    }
  }
`;

export const FETCH_WORDS = gql`
  query GetWords {
    words {
      _id
      word
      meaning
      phrases
      synonyms
      examples
      etymology
    }
  }
`;
