import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://saxenavarnitcode7:hello123@cluster0.4tu17jt.mongodb.net/netflixx?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;
