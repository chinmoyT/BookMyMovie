import Admin from '../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const addAdmin = async(req,res,next)=> {
    const {email, password} = req.body
    if(!email && email.trim()==="" && !password && password.trim()===""){
        return res.status(442).json({message:"Invalid inputs"});
    }
    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email})
    }catch(error){
        console.log(error);
    }

    if(existingAdmin){
        res.status(400).json({message: "Admin already existed"})
    }

    let admin
    const newPassword = bcrypt.hashSync(password);
    try{
        admin = new Admin({email, password: newPassword});
        admin = await admin.save();
    }catch(error){
        console.log(error)
    }

    if(!admin){
        res.status(500).json({message: "unable to store admin"})
    }

    res.status(201).json({admin})
}

export const adminLogin = async(req,res,next)=> {
    const {email,password} = req.body;
    if(!email && email.trim()==="" && !password && password.trim()===""){
        return res.status(442).json({message:"Invalid inputs"});
    }
    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email})


    }catch(error){
        console.log(error)
    }

    if(!existingAdmin){
        res.status(400).json({message: "Admin not found"})
    }
    const isCorrectPassword = bcrypt.compareSync(password, existingAdmin.password)

    if(!isCorrectPassword){
        res.status(400).json({message: "Incorrect password"})
    }

    const token = jwt.sign({id: existingAdmin._id}, process.env.SECRET_KEY,{
        expiresIn: "7d",

    })
    return res.status(200).json({message: "Admin logged in successfully", token, id: existingAdmin._id})
}

export const getAllAdmin = async(req,res, next)=> {
    let admins;
    try{
        admins = Admin.find()
    }catch(error){
        console.log(error);
    }

    if(!admins){
        return res.status(500).json({message: "Internal Server Error"});
    }

    return res.status(200).json({admins});
}