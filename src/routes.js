import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'

export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          {/* <Route path="/users/:id" element={<UserDetails />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }