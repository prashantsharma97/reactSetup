import React from 'react'
import Sidebar from './Sidebar';

function Settings() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to your Setting!</h1>
        <p>This is your personal Setting where you can manage your account.</p>
      </div>
    </div>
  )
}

export default Settings
