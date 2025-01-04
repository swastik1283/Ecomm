import UserModel from "../models/Usermodel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';



const  createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//route for user login 
const loginUser= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user doesnt exist"})
        }
        const isMatch= await bcrypt.compare(password,user.password)

        if (isMatch){
            const token =createToken(user._id)
            res.json({success:true,token })

       }
       else{
        res.json({success:false,message:"invalid credentials"})
       }
    }catch(error){
        console.log(error);
    res.json({success:false,message:error.message})

    }

}
//route for user registration

const registerUser=async(req,res)=>{
try{
    const {name,email,password}=req.body;
    //checking if user exists

    const exist=await UserModel.findOne({email})
    if (exist){
        return res.json({success:false,message:'User already exists'})
    }
    //validsting email and strong pasword
    if (!validator.isEmail(email)){
        return res.json({success:false,message:"enter a valid email"})
    }
    if (password.length<8){
        return res.json({success:false,message:"enter a strong  password"})
    }

    //hashing user password 

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    const newUser=new UserModel({
        name,
        email,
        password:hashedPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})
}

catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
}

}
//route for admin login
const adminlogin=async(req,res)=>{

}
export {loginUser,registerUser,adminlogin}