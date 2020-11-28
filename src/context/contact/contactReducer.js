import { GET_CONTATCS, ADD_CONTACT } from './../types';

const contactReducder = (state, action) => {
  console.log(action);
  switch (action.type) {
    case GET_CONTATCS:
      return {
        ...state,
        contacts: action.payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return { ...state };
  }
};

export default contactReducder;
