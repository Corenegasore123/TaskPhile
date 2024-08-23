import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <span>|</span>
          <NavLink 
            to="/completed" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Completed Tasks
          </NavLink>
        </div>
      </nav>
      <h1>TaskPhile</h1>
      <p>Effortlessly Organize Your Tasks and Boost Your Productivity!</p>
    </div>
  );
};

export default Header;
