import Usermodel from "../model/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const createUser=async(req,res)=>{
    const {name,email,password}=req.body

    const isUserExists=await Usermodel.findOne({
        $or:[
            {email}
        ]
    })

    if (isUserExists) {
        return res.status(409).json({message:"User already Exist"})
    }

    const hash=await bcrypt.hash(password,10)

    const user=await Usermodel.create({
        name,
        email,
        password:hash
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)


    res.status(200).json({
        message:"User Created Successfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email,      
        }
    })
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    
    const user=await Usermodel.findOne({
        $or:[
            {email}
        ]
    })

    if (!user) {
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    const isPasswordValid=await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
        return res.status(404).json({
            message:"Invalid credentials"
        })
    }

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User LoggedIn successfully",
        user:{
            id:user._id,
            email:user.email,      
        }
    })
}

const logoutUser = (req, res) => {
    res.clearCookie("token");

    res.status(200).json({
        message: "Logged out successfully"
    });
};

export default {createUser,loginUser,logoutUser}