import Asynchandler from "express-async-handler"
import User from "../modals/userModal.js";
import generateToken from "../utils/generateToken.js";
const authUser = Asynchandler ( async (req,res) => {

})

const registerUser = Asynchandler ( async (req,res) => {

    console.log("kannale",req.body);

    const { email ,name,password } = req.body;
  
    const user = await User.findOne({ email: email });
  
    if (user) {
      res.status(400);
      
    throw new Error("User exists");
    }
  
    const newUser = await User.create({
      name,
      email,
      password,
    });
  
    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid userData");
    }

})

const updateProfilePicture = Asynchandler ( async (req,res) => {

})

const updateUserDetails = Asynchandler ( async (req,res) => {

})

export {authUser,registerUser,updateProfilePicture,updateUserDetails}

