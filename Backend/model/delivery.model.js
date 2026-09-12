import {mongoose,Schema} from "mongoose";

const deliveryScheema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','in-progress','completed','cancelled'],
        default:'pending'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }

},{
    timestamps:true
})

const deliveryModel=mongoose.model('delivery',deliveryScheema)

export default deliveryModel