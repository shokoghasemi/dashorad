import { createStore } from 'redux';
import combineReducers from './reducer/index.tsx';

export const store = createStore(combineReducers);