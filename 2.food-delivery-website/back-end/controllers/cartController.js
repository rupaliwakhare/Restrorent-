import userModel from "../models/user_model.js"

// add items to usercart

const addToCart = async (req,res)=>{
    try {
        let userData = await userModel.findOne({_id:req.body.userID})
    } catch (error) {
        
    }
}

// remove items from user cart

const removeFromCart = async(req,res)=>{

}

// fetch user cart data
const getCart = async(req,res)=>{

}

export {addToCart,removeFromCart,getCart}
