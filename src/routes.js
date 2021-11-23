import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Card from './components/Card'

export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    );
  }