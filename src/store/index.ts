import {combineReducers} from 'redux';
import {createStore} from 'redux';
import apiReducers from './apiState/reducers';
import formOnlyReducers from './formOnlyState/reducers';
import {ApplicationState} from './Application';

const reducers = combineReducers<ApplicationState>({
  apiState: apiReducers,
  formOnlyState: formOnlyReducers
});

const store = createStore(reducers);

export default store;
