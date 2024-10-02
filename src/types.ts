export interface Word {
    _id: string;
    word: string;
    meaning: string;
    phrases?: string[];
    synonyms?: string[];
    examples?: string[];
    etymology?: string;
  }
  