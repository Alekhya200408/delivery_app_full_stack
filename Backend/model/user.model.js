import {mongoose,Schema} from "mongoose";

const userScheema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },

},{
    timestamps:true
})

const Usermodel=mongoose.model('user',userScheema)

export default Usermodel;