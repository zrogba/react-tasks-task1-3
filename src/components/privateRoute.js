import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';

import {AuthContext  } from '../context/authContext';

const PrivateRoute = ({ children }) => {

  const { currentUser } = useContext(AuthContext);

  if (!!currentUser) {
    return children
  }
  return <Navigate to='/' />

};

export default PrivateRoute;