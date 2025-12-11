import Hotel from "../models/Hotel.js";
import User from "../models/User.js";


export const resisterHotel = async(req,res)=>{
    try {
        const {name, address, contact,city} = req.body
        const owner = req.user._id

        // Checked user already resistered

        const hotel = await Hotel.findOne({owner})
        if(hotel){
            return res.json({
              success: false,
              Message: "Hotel Already resistered",
            });
        }
        
        await Hotel.create({name,address,contact,city,owner});
        await User.findByIdAndUpdate(owner, {role: "hotelOwner"});

        res.json({success: true, Message: "Hotel Registered Successfully"})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}