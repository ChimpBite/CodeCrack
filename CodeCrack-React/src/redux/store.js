import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import GameEngine from './gameengine/GameEngine';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  GameEngine,
  form: formReducer,
});

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
