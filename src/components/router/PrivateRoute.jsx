import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from '../../context/LoginUserContext';

function PrivateRoute() {
  const { loginStatus } = useContext(LoginContext);

  if (loginStatus === false) {
    return <Redirect to="/" />;
  }
}

export default PrivateRoute;
