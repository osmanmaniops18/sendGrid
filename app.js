import express from 'express';
import bodyParser from 'body-parser';
import { config } from "dotenv";
import { sendEmail } from './utils/sendDynmicEmail.js';
// import { sendEmail } from "./utils/sendGridApiKey.js";

config({
    path:"./config/config.env"
})

const app=express();


//Using Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

//API Functions
app.post("/sendEmail",async(req,res)=>{
 try {
    const {to,subject}=req.body;
    const text="Hello from crownboth bussiness to you!";
    // await sendEmail(to,subject,text);
    await sendEmail(to);
    res.status(200).json({
        success:true,
        message:"Email sent"
    })
 } catch (error) {
    res.status(500).json({
        success:false,
        message:`Error sending email ${error.message}`
    })
 }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})