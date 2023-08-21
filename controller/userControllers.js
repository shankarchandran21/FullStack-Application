import User from '../models/userModel.js'

export const createUsers=(req,res)=>{
    const {username} = req.body;
    const newUser = new User({username}).save()
    .then(()=>res.status(200).json({success: true, message:"User saved successfully"}))
    .catch((err)=>console.log(`Error : ${err}`))
}
export const getAllUsers=(req,res)=>{
    User.find()
    .then((user)=>res.status(200).json({success:true,response:user}))
    .catch((err)=>console.log(`Error : ${err}`))
}
