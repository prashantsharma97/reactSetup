import React from 'react'
import Sidebar from './Sidebar'
function Profile() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to your Profile!</h1>
        <p>This is your personal Profile where you can manage your account.</p>
      </div>
    </div>
  )
}

export default Profile
