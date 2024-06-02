import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider"
import { Navigate } from "react-router-dom";

function PrivetRouts({children}) {
    const { userData } = useContext(AuthContext);

    if (!userData?.isAuth) {
      return <Navigate to="/login" />;
    }
  
    return children;
}

export default PrivetRouts
