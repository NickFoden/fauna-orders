import React from "react";
import Order from "../components/Order";

const OrderPage = ({ match, currentState }) => {
  const { data, error, loaded } = currentState;

  return (
    <div>
      {!error && loaded ? (
        <Order currentOrders={data} match={match} />
      ) : (
        <h1> . . . loading</h1>
      )}
    </div>
  );
};

export default OrderPage;
