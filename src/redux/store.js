// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ____________________________________________________________________________________________________________

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

const reducer = {
  contacts: contactsReducer,
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(logger);

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
