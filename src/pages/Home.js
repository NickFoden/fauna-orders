import React from "react";
import { Link } from "react-router-dom";
import "./pageStyles.scss";

const Home = ({ currentOrders }) => {
  const renderOrders = orderArray => {
    return orderArray.map(item => {
      const {
        customerName,
        orderId,
        orderItems,
        shipAddress,
        status,
        total
      } = item;
      return (
        <ul className="item_row" key={orderId}>
          <li>
            <Link to={`order/${orderId}`}>
              {orderId.toString().substring(8, 15)}
            </Link>
          </li>
          <li>{customerName}</li>
          <li>{status}</li>
          <li>{shipAddress.state}</li>
          <li>{orderItems.length}</li>
          <li>{total}</li>
        </ul>
      );
    });
  };

  return (
    <div className="home_container">
      <ul className="item_columns">
        <li>Id#</li>
        <li>Customer</li>
        <li>Status</li>
        <li>State</li>
        <li># of Items</li>
        <li>Order Total</li>
      </ul>
      <div className="items_container">
        {currentOrders.length > 0 ? renderOrders(currentOrders) : null}
      </div>
    </div>
  );
};

export default Home;
