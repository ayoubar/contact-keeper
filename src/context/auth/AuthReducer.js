import { REGISERT_USER, REGISTER_ERROR } from './../types';
const authReducer = (state, action) => {
  switch (action.type) {
    case REGISERT_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return true;
  }
};

export default authReducer;
