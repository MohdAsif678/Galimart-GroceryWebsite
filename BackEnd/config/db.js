import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://asif_galimart:9368298776@cluster0.uvymghc.mongodb.net/galimart")
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}
