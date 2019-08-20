import orderData from "./orderData";
export const fetchOrders = async () => {
  try {
    // const result = await fetch(
    //   process.env.REACT_APP_FAUNA_ORDERS_API_ENDPOINT
    // ).then(r => r.json());
    // return result;
    return orderData;
  } catch (err) {
    return console.error(err);
  }
};
