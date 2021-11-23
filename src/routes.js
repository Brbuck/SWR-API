import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Card from './components/Card'

export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/users/:id" element={<Card />} />
    </Routes>
    
  );
}