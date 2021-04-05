import { combineReducers } from 'redux';
import contactsActionTypes from './contacts-action-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case contactsActionTypes.ADD:
      return [...state, payload];

    case contactsActionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case contactsActionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
