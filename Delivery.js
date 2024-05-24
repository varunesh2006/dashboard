import React from 'react';
import './Delivery.css';

const deliveryDetails = [
  {
    id: 1,
    personName: 'John Doe',
    foodName: 'Pizza',
    fromTime: '10:00 AM',
    toTime: '10:30 AM',
    rating: 4.5
  },
  {
    id: 2,
    personName: 'Jane Smith',
    foodName: 'Burger',
    fromTime: '11:00 AM',
    toTime: '11:45 AM',
    rating: 4.0
  },
  {
    id: 3,
    personName: 'Alice Johnson',
    foodName: 'Pasta',
    fromTime: '12:00 PM',
    toTime: '12:30 PM',
    rating: 5.0
  },
  {
    id: 4,
    personName: 'Bob Brown',
    foodName: 'Salad',
    fromTime: '01:00 PM',
    toTime: '01:15 PM',
    rating: 3.8
  },
];

const DeliveryDetails = () => {
  return (
    <div className="delivery-details">
      <h1>Delivery Details</h1>
      <table className="details-table">
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Food Name</th>
            <th>From Time</th>
            <th>To Time</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {deliveryDetails.map(detail => (
            <tr key={detail.id}>
              <td>{detail.personName}</td>
              <td>{detail.foodName}</td>
              <td>{detail.fromTime}</td>
              <td>{detail.toTime}</td>
              <td>{detail.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryDetails;
