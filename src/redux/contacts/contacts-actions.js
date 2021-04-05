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

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
const deleteContact = createAction('contacts/delete');
const filterContactsByName = createAction('contacts/filter');

const contactsActions = {
  addContact,
  deleteContact,
  filterContactsByName,
};

export default contactsActions;
