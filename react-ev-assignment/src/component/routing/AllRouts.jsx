import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ProductPage from '../../pages/ProductPage';
import PrivetRouts from './PrivetRouts';

function AllRouts() {
  return (
    <Routes>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/" element={<PrivetRouts><HomePage /></PrivetRouts>} />
         <Route path="/product/view/:id" element={<PrivetRouts><ProductPage /></PrivetRouts>} />
    </Routes>
  )
}

export default AllRouts
