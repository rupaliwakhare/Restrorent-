// context/StoreContext.js

// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [foodList,setFoodList] = useState([])

  
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
        let itemInfo = foodList.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Fecth foodlist
  const fetchFoodList = async ()=>{
   try {
     const response = await axios.get(url + "/api/food/list");
     setFoodList(response.data.data || response.data);
     console.log(response.data.data || response.data);
     
   } catch (error) {
    console.log("Error fetching food list:", error);
    
   }
  }

useEffect(() => {
 

  async function loadData(){
    await fetchFoodList();
     const savedToken = localStorage.getItem("token");
     if (savedToken) {
       setToken(savedToken);
     }
  }
  loadData()
}, []);


  const contextValue = {
    food_list:foodList,
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
