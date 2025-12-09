// context/StoreContext.js
// import axios from "axios";
import { food_list } from "../assets/frontend_assets/assets";

import { createContext,useEffect,useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  const url = "http://localhost:4000";
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

useEffect(() => {
  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    setToken(savedToken);
  }
}, []);


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
