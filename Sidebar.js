import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/delivery">Delivery</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
