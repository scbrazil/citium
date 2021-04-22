import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { useAsync } from 'react-async-hook';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const getUser = (user) => {
    localStorage.setItem('userid', JSON.stringify(user.data._id))
  }

  const { result } = useAsync(getUser, []);
  console.log(result);

  return <AuthContext.Provider value={result}>
    {children}
  </AuthContext.Provider>
};
