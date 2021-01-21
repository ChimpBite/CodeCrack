import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import GameEngine from './gameengine/GameEngine';

const middlewares = [logger];

const store = createStore(GameEngine, applyMiddleware(...middlewares));

export default store;
