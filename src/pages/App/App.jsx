import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Nav from '../../components/Nav/Nav';
import Auth from '../Auth/Auth';
import HomePage from '../../components/HomePage/HomePage';
import LawList from '../LawList/LawList';
import AddLaw from '../AddLaw/AddLaw';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
          <Nav />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Auth setUser={setUser} />} />
            <Route path="/laws" element={<LawList user={user} />} />
            <Route path="/laws/add" element={<AddLaw user={user} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/laws" />} />
          </Routes>
    </main>
  );
}
