import { GameEngineActionTypes } from './GameEngine.types';

const initialState = {
  LvL: 1,
  CodeA: 0,
  CodeB: 0,
  CodeC: 0,
  GuessA: 0,
  GuessB: 0,
  GuessC: 0,
  CodeSum: 0,
  CodeProduct: 0,
  GuessSum: 0,
  GuessProduct: 0,
};

const gameEngine = (state = initialState, action) => {
  switch (action.type) {
    case GameEngineActionTypes.SET_NEW_LEVEL:
      return { ...state, LvL: state.LvL++ };
    case GameEngineActionTypes.SET_RANDOM_ENGINE:
      return {
        ...state,
        CodeA:
          Math.floor(Math.random() * 5) + 1 + state.LvL + state.lvl + state.lvl,
        CodeB:
          Math.floor(Math.random() * 5) + 1 + state.LvL + state.lvl + state.lvl,
        CodeC:
          Math.floor(Math.random() * 5) + 1 + state.LvL + state.lvl + state.lvl,
      };
    case GameEngineActionTypes.SET_CODE_SUM_PRODUCT:
      return {
        ...state,
        CodeSum: state.CodeA + state.CodeB + state.CodeC,
        CodeProduct: state.CodeA * state.CodeB * state.CodeC,
      };
    case GameEngineActionTypes.SET_PLAYER_GUESS:
      return {
        ...state,
        GuessA: action.payload,
        GuessB: action.payload,
        GuessC: action.payload,
      };
    case GameEngineActionTypes.SET_GUESS_SUM_PRODUCT:
      return {
        ...state,
        GuessSum: state.GuessA + state.GuessB + state.GuessC,
        GuessProduct: state.GuessA * state.GuessB * state.GuessC,
      };
    default:
      return state;
  }
};

export default gameEngine;
