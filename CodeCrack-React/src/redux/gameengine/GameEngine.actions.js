import { GameEngineActionTypes } from './GameEngine.types';

export const setLevel = () => ({
  type: GameEngineActionTypes.SET_NEW_LEVEL,
});

export const setEngine = () => ({
  type: GameEngineActionTypes.SET_RANDOM_ENGINE,
});

export const setHackCode = () => ({
  type: GameEngineActionTypes.SET_CODE_SUM_PRODUCT,
});

export const setPlayerGuess = guess => ({
  type: GameEngineActionTypes.SET_PLAYER_GUESS,
  payload: guess,
});
