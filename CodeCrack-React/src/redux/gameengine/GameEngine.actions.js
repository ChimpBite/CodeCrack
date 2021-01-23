import { GameEngineActionTypes } from './GameEngine.types';

export const setLevel = () => ({
  type: GameEngineActionTypes.SET_NEW_LEVEL,
});

// Declare 3 number code
export const setGeneratedCode = () => ({
  type: GameEngineActionTypes.SET_GENERATED_CODE,
  codeA: randomRoll(),
  codeB: randomRoll(),
  codeC: randomRoll(),
});

export const setCodeBase = () => ({
  type: GameEngineActionTypes.SET_CODEBASE,
});

// Store player guess
export const setGuess = newGuess => ({
  type: GameEngineActionTypes.SET_PLAYER_GUESS,
  guessA: parseInt(newGuess.GuessA),
  guessB: parseInt(newGuess.GuessB),
  guessC: parseInt(newGuess.GuessC),
});

export const setPlayerCodes = () => ({
  type: GameEngineActionTypes.SET_PLAYER_CODES,
});

const randomRoll = () => {
  return Math.floor(Math.random() * 5) + 1;
};
