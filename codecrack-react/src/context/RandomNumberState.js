import React, { createContext } from 'react';

let Difficulty = 5;

const CodeA = Math.floor(Math.random() * 10 + 1) * Difficulty;
const CodeB = Math.floor(Math.random() * 10 + 1) * Difficulty;
const CodeC = Math.floor(Math.random() * 10 + 1) * Difficulty;

CodeSum = CodeA + CodeB + CodeC;
CodeProduct = CodeA * CodeB * CodeC;

// Create context
RandomNumberContext = createContext({
  CodeSum,
  CodeProduct,
});

const RandomNumberProvider = ({ children }) => {
  return (
    <RandomNumberContext.Provider value={{ CodeSum, CodeProduct }}>
      {children}
    </RandomNumberContext.Provider>
  );
};
