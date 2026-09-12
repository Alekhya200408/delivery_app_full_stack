import mongoose from "mongoose";


const ConnDB=async()=> {
    try {
        console.log(`${process.env.DB_Connection}/${process.env.MONGO_NAME}`);
        await mongoose.connect(`${process.env.DB_Connection}/${process.env.MONGO_NAME}`)
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default ConnDB 