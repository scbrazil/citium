import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async-hook';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   // const getUser = async () => {
//   //   console.log('this is the user in auth: ', user)
//   //   let userData = await axios.get('/checkauth');
//   //   if (!localStorage.getItem('userData')) {
//   //     localStorage.setItem('userId', JSON.stringify(userData.data._id))
//   //   }
//   //   return userData.data;
//   // }

//   let userData = localStorage.getItem('userData');

//   // const { result } = useAsync(getUser, []);
//   const { result } = useAsync(userData, []);

//   return (
//     <AuthContext.Provider value={result}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const AuthContext = createContext({
  auth: {},
  setAuthData: () => {}
})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null});

  const setAuthData = (data) => {
    setAuth({ data: data })
  };

  /* on component mount, set the authorization data to current localStorage data */
  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(localStorage.getItem('authData'))
    });
    return () => console.log('AuthProvider found localStorage auth data.');
  }, []);

  /* on authorization data change, update localStorage data */
  useEffect(() => {
    localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};