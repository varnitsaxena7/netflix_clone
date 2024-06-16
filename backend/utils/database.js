import mongoose from "mongoose";
import dotenv from "dotenv";
const express = require('express')
const app = express()
dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://saxenavarnitcode7:hello123@cluster0.4tu17jt.mongodb.net/netflixx?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
};

export default databaseConnection;
