import React, { useReducer } from 'react';
import axios from 'axios';

import authReducer from './AuthReducer';
import AuthContext from './AuthContext';

// types

import { REGISERT_USER, REGISTER_ERROR } from './../types';

const AuthState = ({ children }) => {
  // creation state
  const initialState = {
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
    token: localStorage.getItem('token'),
  };

  // creation reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`/api/users`, data, config);
      dispatch({
        type: REGISERT_USER,
        payload: res.data.token,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        token: state.token,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
