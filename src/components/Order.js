import React from "react";
import { Link } from "react-router-dom";
import QR from "../assets/shipping_label.png";
import "./styles.scss";

const Order = ({ currentOrders, match }) => {
  const orderSelect = currentOrders.filter(
    item => item.orderId === match.params.id
  );
  const { customerName, shipAddress } = orderSelect[0];
  const { city, state, street, zipCode } = shipAddress;
  if (customerName) {
    return (
      <div>
        <div className="shipping_label">
          <div className="shipping_label_top">
            <h1>F</h1>
            <h4>US POSTAGE PAID</h4>
          </div>
          <div className="priority">
            <h4>Fauna Priorty Mail</h4>
          </div>
          <div className="from_label">
            <ul>
              <li>Nick Foden</li>
              <li>1 Broadway</li>
              <li>New York, NY 11111</li>
            </ul>
          </div>
          <div className="to_label">
            <h4>Ship To:</h4>
            <ul>
              <li>{customerName}</li>
              <li>{street}</li>
              <li>{`${city}, ${state} ${zipCode}`}</li>
            </ul>
          </div>
          <div className="shipping_label_bottom">
            <img src={QR} alt="qr code" />
            <p>{match.params.id}</p>
            <div>
              <h5>Electronic Rate Approved</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h1>
        Order not active <Link to="/">Go home</Link>
      </h1>
    );
  }
};

export default Order;
