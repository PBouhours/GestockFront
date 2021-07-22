/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();
function LoginUserContext({ children }) {
  const [userId, updateUserId] = useState();
  const [loginStatus, updateLoginStatus] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        loginStatus,
        updateLoginStatus,
        userId,
        updateUserId,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginUserContext;
