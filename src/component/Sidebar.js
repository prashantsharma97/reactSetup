import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="sidebar bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500">
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link hover:bg-white text-indigo-600 font-semibold bg-white"
                                : "sidebar-link hover:bg-white hover:text-indigo-600"
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/profile" 
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link hover:bg-white text-indigo-600 font-semibold bg-white"
                                : "sidebar-link hover:bg-white hover:text-indigo-600"
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/settings" 
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link hover:bg-white text-indigo-600 font-semibold bg-white"
                                : "sidebar-link hover:bg-white hover:text-indigo-600"
                        }
                    >
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/login" 
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link hover:bg-white text-indigo-600 font-semibold bg-white"
                                : "sidebar-link hover:bg-white hover:text-indigo-600"
                        } 
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
