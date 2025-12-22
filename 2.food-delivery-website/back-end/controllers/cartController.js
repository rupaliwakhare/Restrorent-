import userModel from "../models/user_model.js";

// add items to usercart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userID)
    let cartData = await userData.cartData || {};
    
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    }else{
        cartData[req.body.itemId] += 1
    }

    await userModel.findByIdAndUpdate(req.body.userID,{cartData});
    res.json({success:true,message:"Added To Cart"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
};

// remove items from user cart

const removeFromCart = async (req, res) => {
   try {
    let userData = await userModel.findById(req.body.userID);
    let cartData = await userData.cartData;

    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -=1;
    }

    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Remove From Cart"})

   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
   }
};

const getCart = async (req, res) => {
  // fetch user cart data
};

export { addToCart, removeFromCart, getCart };
