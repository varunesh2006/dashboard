import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>€86,802.60</h2>
          <p>Sales</p>
        </div>
        <div className="stat-card">
          <h2>383</h2>
          <p>Delivered</p>
        </div>
        <div className="stat-card">
          <h2>1067</h2>
          <p>No Orders</p>
        </div>
        <div className="stat-card">
          <h2>502</h2>
          <p>No Customers</p>
        </div>
        <div className="detailed-card">
          <h3>All Orders</h3>
          <h1>1067</h1>
          <p> New Orders</p>
          <h1>€86,802.60</h1>
          <p> Orders Price</p>
        </div>
        <div className="detailed-card">
          <h3>User Details</h3>
          <h1>502</h1>
          <p>Total Users</p>
          <h1>499</h1>
          <p>Active Users</p>
          <h1>3</h1>
          <p>Deactive Users</p>
        </div>
        <div className="detailed-card">
          <h3>Store Details</h3>
          <h1>169</h1>
          <p> Total Stores</p>
          <h1>58</h1>
          <p> Active Stores</p>
          <h1>111</h1>
          <p> Deactive Stores</p>
        </div>
        <div className="detailed-card">
          <h3>Driver Details</h3>
          <h1>293 </h1>
          <p>Total Drivers</p>
            <h1>164</h1>
          <p> Active Drivers</p>
          <h1>129</h1>
          <p>Deactive Drivers</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
