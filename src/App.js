import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyMenu from './Components/MyMenu';
import MyLayout from './Components/MyLayout';
import Dashboard from './Components/Dashboard';
 // Import any additional components
import VehicleList from './Components/VehicleList';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <MyMenu />
        
        <div className="main-content flex-grow-1">
          <MyLayout />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Default route */}
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/vehiclelist" element={<VehicleList />} />
            {/* <Route path="/another" element={<AnotherComponent />} /> Additional route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
