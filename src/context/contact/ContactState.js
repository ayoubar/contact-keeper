import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducder from './contactReducer';

import { GET_CONTATCS, ADD_CONTACT } from './../types';
const data = [
  {
    name: 'ayoub',
    email: 'ayoub@gmail.com',
    phone: '+212 643412815',
  },
  {
    name: 'Hassan',
    email: 'hassan@gmail.com',
    phone: '+212 643412815',
  },
  {
    name: 'Med',
    email: 'med@gmail.com',
    phone: '+212 643412815',
  },
];

const ContactState = ({ children }) => {
  const initialState = {
    contacts: null,
  };

  const [state, dispatch] = useReducer(contactReducder, initialState);

  const getAllContacts = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.get(`/api/contacts`, config);
      const data = await res.data;
      dispatch({ type: GET_CONTATCS, payload: data });
    } catch (error) {}
  };

  const addContact = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'),
        },
      };

      const response = await axios.post('/api/contacts', data, config);
      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {}
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        getAllContacts,
        addContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
