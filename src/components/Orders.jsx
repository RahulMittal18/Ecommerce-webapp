import React from "react";
import { useSelector } from "react-redux";
import OrderShow from "./OrderShow";

function Orders() {
  const { myOrders } = useSelector((state) => state.cartReducer);
  return (
    <div className="Orders">
      <div className="Head">
        <h1>My Orders</h1>
        <h4>View all Your pending orders and delivered Orders.</h4>
      </div>
      <hr className="line1" />
      <div className="items">
        <div className="item-row">
          {myOrders.length > 0 ? (
            <>
              {myOrders.slice(0).reverse().map((order) => (
                <div className="orderone">
                  <div
                    className="ORDER order__header"
                    style={{
                      width: "55vw",
                      boxShadow: " rgb(0 0 0 / 20%) 0px 1px 2px 0px",
                      padding: "15px 20px",
                      backgroundColor: "#DDDDDD",
                      fontSize:"1.1rem",
                      fontWeight: "500",
                      display:"flex",
                      justifyContent:"space-between"
                    }}
                  >
                    <span className="order__no">Order Number: {order.order_number} </span>
                    <span>Order Date: {order.order_date} </span>
                    <span>Order Total: ₹ {order.order_total}</span>
                  </div>
                  {order.cart_products.map((item) => (
                    <OrderShow
                      key={item.id}
                      item={item}
                      className="orderItem"
                    />
                  ))}
                  <hr />
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
