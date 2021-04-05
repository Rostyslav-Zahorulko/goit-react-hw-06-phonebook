// import { v4 as uuidv4 } from 'uuid';
// import contactsActionTypes from './contacts-action-types';

// const addContact = (name, number) => ({
//   type: contactsActionTypes.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// const deleteContact = id => ({
//   type: contactsActionTypes.DELETE,
//   payload: id,
// });

// const filterContactsByName = value => ({
//   type: contactsActionTypes.FILTER,
//   payload: value,
// });

// const contactsActions = {
//   addContact,
//   deleteContact,
//   filterContactsByName,
// };

// export default contactsActions;

// ____________________________________________________________________________________________________________

import { createAction, nanoid } from '@reduxjs/toolkit';
import contactsActionTypes from './contacts-action-types';

const addContact = createAction(contactsActionTypes.ADD, (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
const deleteContact = createAction(contactsActionTypes.DELETE);
const filterContactsByName = createAction(contactsActionTypes.FILTER);

const contactsActions = {
  addContact,
  deleteContact,
  filterContactsByName,
};

export default contactsActions;
