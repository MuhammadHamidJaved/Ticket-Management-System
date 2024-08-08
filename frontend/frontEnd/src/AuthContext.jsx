import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  user: null,
  setUser: (user) => {},
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to update user info and login status
  useEffect(() => {
  setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true' ? true : false);  
  setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
 

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    
  };

  const value = { user, isLoggedIn, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export {AuthContext};