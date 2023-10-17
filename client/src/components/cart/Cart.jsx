import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import {
changeCountGameInCart,
  deleteGameFromCart,
  cleanCart,
  createOrder,
} from "../../store/cart/cartActions";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="cart">
      {cart && (
        <>
          {cart.games.length ? (
            <>
              <section>
                      <h1>Your Cart</h1>
                    <div className="cartList">
                        {cart.games.map((games) => (
                          <div className="cartItem">
                            <img
                              src={games.gameItem.img}
                              alt={games.name}/>
                              <div className="cartInfo">
                              <h5>{games.gameItem.name}</h5>
                                <div>
                                    Total-Price: ${games.totalPrice}
                                </div>
                                <div>
                                    Price: ${games.gameItem.price}
                                </div>
                                </div>
                            <div>
                                <label className="sr-only">
                                  Quantity
                                </label>
                                <input
                                  onChange={(e) => {
                                    changeCountGameInCart(
                                      games.gameItem.id,
                                      +e.target.value
                                    );
                                    dispatch(getCart());
                                  }}
                                  type="number"
                                  min="1"
                                  value={games.count}
                                  className="itsinp"
                                />
                              

                              <button
                                onClick={() => {
                                  deleteGameFromCart(games.gameItem.id);
                                  dispatch(getCart());
                                }}
                              >
                                <span>Remove item</span>
                              </button>
                            </div>
                            </div>
                        ))}
                    

                      <div className="totalCont">

                            <div>

                               <h2 className="totalCost">
                                 Total :${cart.totalCost}
                                </h2>
                            </div>

                          <div className="flex justify-end">
                            <button className="orderBtn"
                              onClick={() => {
                                dispatch(createOrder());
                                navigate("/pay")
                              }}
                            >
                              Order
                            </button>
                            <button
                            className="cleanBtn"
                              onClick={() => {
                                cleanCart();
                                dispatch(getCart());
                              }}
                            >
                              Clean
                            </button>
                          </div>
                        </div>
                      </div>
                     
              </section>
            </>
          ) : (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <h2 className="text"> 
                Cart is empty!
              </h2>
              <p>
                You should add products to the cart
              </p>
              <button
              className="lastBtn"
                onClick={() => navigate("/games")}

              >
                Go To Products
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
