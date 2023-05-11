import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Nav from '../../components/Nav/Nav';
import Auth from '../Auth/Auth';
import HomePage from '../HomePage/HomePage';
import LawList from '../LawList/LawList';
import AddLaw from '../AddLaw/AddLaw';
import LawUpdate from '../../components/LawUpdate/LawUpdate'

export default function App() {
  
  
  const [user, setUser] = useState(getUser());

  return (
    <main className="text-center bg-charcoal h-screen text-white">
          <Nav user={user} setUser={setUser}/>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage user={user}/>} />
            <Route path="/auth" element={<Auth setUser={setUser} user={user} />} />
            <Route path="/laws" element={<LawList user={user} />} />
            <Route path="/laws/add" element={<AddLaw user={user} />} />
            <Route path="/laws/:id" element={<LawUpdate user={user} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/laws" />} />
          </Routes>
    </main>
  );
}
