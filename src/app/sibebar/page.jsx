"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for type checking

const Sidebar = ({ setView }) => {
  const [activeButton, setActiveButton] = useState('side-1');

  const handleClick = (buttonId, view) => {
    setActiveButton(buttonId);
    if (typeof setView === 'function') {
      setView(view);  // Ensure setView is a function before calling it
    } else {
      console.error('setView is not a valid function');
    }
  };

  return (
    <div className="d-flex flex-column p-3 sidebar-panel">
      <h4 style={{ color: "#fff" }}>Admin Dashboard</h4>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            id="side-1"
            className={`sidebar-btn ${activeButton === 'side-1' ? 'active' : ''}`}
            onClick={() => handleClick('side-1', 'contact')}
          >
            Contact Admin
          </button>
        </li>
        <br />
        <li className="nav-item">
          <button
            id="side-2"
            className={`sidebar-btn ${activeButton === 'side-2' ? 'active' : ''}`}
            onClick={() => handleClick('side-2', 'newsletter')}
          >
            Newsletter Admin
          </button>
        </li>
        <br />
      </ul>
    </div>
  );
};

// Add PropTypes to validate the props
Sidebar.propTypes = {
  setView: PropTypes.func.isRequired,  // Ensure setView is passed as a function
};

export default Sidebar;
