// import { combineReducers } from 'redux';
// import contactsActionTypes from './contacts-action-types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActionTypes.ADD:
//       return [...state, payload];

//     case contactsActionTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsActionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// ____________________________________________________________________________________________________________

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [contactsActions.filterContactsByName]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
