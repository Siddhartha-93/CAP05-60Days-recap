import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function PrivetRoute({children}) {
    const { userData } = useContext(AuthContext);

    if (!userData?.isAuth) {
      return <Navigate to="/login" />;
    }
  
    return children;
}

export default PrivetRoute
