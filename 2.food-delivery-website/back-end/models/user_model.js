import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{typeString,required:true},
    email:{typeString,required:true,unique:true},
    password:{typeString,required:true},
    cartData:{type:Object,default:{}},

},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;