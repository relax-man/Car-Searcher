import { createStore, combineReducers } from 'redux';
import carsReducer from './cars-reducer';

let reducers = combineReducers({
  carsData: carsReducer
});

let store = createStore(reducers);

export default store;
