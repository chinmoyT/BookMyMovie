import Bookings from '../models/Bookings';
import User from '../models/User'
import bcrypt from 'bcryptjs'



export const getAllUsers = async(req,res)=>{
    let users;
    try{
        users =await  User.find()
    }catch(error){
        return console.error(error)
    }

    if(!users){
        return res.status(500).json({message: "Unexpected error occured"});
    }

    return res.status(200).json(users);
}

export const signup = async (req,res)=>{
    const {name, email, password} = req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
        return res.status(442).json({message:"Invalid inputs"});
    }
    const newPassword = bcrypt.hashSync(password)

    let user;
    try{
        user = new User({name, email, password: newPassword })
        user = await user.save()
    }catch(error){
        console.log(error);
    }
    if(!user){
        return res.status(500).json({message:"User not found"})
    }
    return res.status(201).json({id: user._id});
}


export const updateUser = async(req,res)=> {
    const id = req.params.id;
    const {name, email, password} = req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
        return res.status(442).json({message:"Invalid inputs"});
    }
    const newPassword = bcrypt.hashSync(password)

    let user;
    try{
        user = await User.findByIdAndUpdate(id,{name, email, password: newPassword})
    }catch(error){
        return console.log(error);
    }

    if(!user){
        return res.status(500).json({message: "Something is wrong"});
    }
    return res.status(200).json({message: "Updated Successfully"})

}


export const deleteUser= async(req,res)=>{
    const id = req.params.id;
    let user;
    try{
        user = User.findByIdAndRemove
    }catch(error){
        console.log(error)
    }

    if(!user){
        return res.status(500).json({message:"Something went wrong"})
    }

    return res.status(200).json({message: "Deleted Successfully"})
}


export const login = async(req,res)=> {
    const {email, password} = req.body;
    if(!email && email.trim()==="" && !password && password.trim()===""){
        return res.status(442).json({message:"Invalid inputs"});
    }

    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(error){
        return console.log(error)
    }
    if(!existingUser){
        return res.status(404).json({message: "Unable to find user ID"})
    }

    const isCorrectPassword = bcrypt.compareSync(password, existingUser.password)

    if(!isCorrectPassword){
        return res.status(400).json({message: "Incorrect Password"})
    }

    return res.status(200).json({message: "Login Successfull"})
}

export const getBookingsOfUser = async(req,res)=> {
    const id = req.params.id;
    let bookings;
    try{
        bookings = await Bookings.findById({user : id})
    }catch(error){
        return console.log(error)
    }

    if(!bookings){
        return res.status(500).json({message: "Unable to find bookings"})
    }

    return res.status(200).json({bookings})
}