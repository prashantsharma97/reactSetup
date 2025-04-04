import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to your Dashboard!</h1>
        <p>This is your personal dashboard where you can manage your account.</p>
      </div>
    </div>
  );
};

export default Dashboard;
