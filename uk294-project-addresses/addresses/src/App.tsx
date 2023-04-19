import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddressList from './Components/Organisms/AddressList';
import OverviewPage from './Components/Pages/OverviewPage';
import { Routes, Route } from 'react-router-dom';
import DetailsPage from './Components/Pages/DetailsPage';
import LoginPage from './Components/Pages/LoginPage';
import NewAddressPage from './Components/Pages/NewAddressPage';

function App() {
  return (
   <Routes>
    <Route path="/address" element={<OverviewPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/address/:id" element={<DetailsPage />} />
    <Route path="/new" element={<NewAddressPage />} />
   </Routes>
  );
}

export default App;
