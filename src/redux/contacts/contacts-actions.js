import { v4 as uuidv4 } from 'uuid';
import contactsActionTypes from './contacts-action-types';

const addContact = (name, number) => ({
  type: contactsActionTypes.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = id => ({
  type: contactsActionTypes.DELETE,
  payload: id,
});

const filterContactsByName = value => ({
  type: contactsActionTypes.FILTER,
  payload: value,
});

const contactsActions = {
  addContact,
  deleteContact,
  filterContactsByName,
};

export default contactsActions;
