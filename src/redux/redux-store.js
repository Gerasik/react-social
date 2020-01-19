import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers, /* preloadedState, */
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
