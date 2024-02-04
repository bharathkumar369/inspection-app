const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const User = require("./model/users")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Inspection = require("./model/inspectionForm")
require("dotenv").config();

const app = express();
const port = 5000;

const dbURI = `mongodb+srv://inspector:${process.env.VITE_PASSWORD}@inspector-app.aprciho.mongodb.net/`
console.log(process.env.VITE_PASSWORD)
mongoose.connect(dbURI)


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.post("/signup", async (req,res)=>{
    try {
        const { username,email,password,confirmPassword } =  req.body;

        if(!username || !email || !password || !confirmPassword){
            return res.status(400).json({error:"all fields are requires"})
        }

        if(password !== confirmPassword){
            return res.status(400).json({error:"password does not match"})
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({error:"user already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password:hashPassword,
            confirmPassword:hashPassword
        })

        const saveUser = newUser.save();

        return res.json({
            message:"user created successfully",
            success:true,
            saveUser
        })
        
    } catch (error) {
        return res.status(500).json({error:"server internal error"})
    }
})

app.post("/login", async(req,res) => {

    try {
        const { username,password } = req.body;

        const user = await User.findOne({username})

        if(!user){
            return res.status(400).json({error:"user does not exist"})
        }
        const validPassword = await bcrypt.compare(password,user.password);

        if(!validPassword){
            return res.status(400).json({error:"invlaid password"})
        }

        return  res.json({
            message:"login successful",
            success:true
        })

    } catch (error) {
        console.error("login error:", error)
        return res.status(500).json({error:"server internal error"})
    }
})

app.post("/", async (req, res) => {
    try {
        const {
            vehicleName,
            price,
            registerNumber,
            manufacturingDate,
            registrationDate,
            noOfOwner,
            odometerReading,
            transmission,
            fuelType,
            colour,
            vehicleType,
            engineNumber,
            chasisNumber,
            loanNumber,
            rcAvailable,
            insurance,
            hypothecation,
            financerName,
            roadTax,
            customerName,
            clientName
        } = req.body;

        // Create an instance of the Inspection model with the received details
        const inspection = new Inspection({
            vehicleName,
            price,
            registerNumber,
            manufacturingDate,
            registrationDate,
            noOfOwner,
            odometerReading,
            transmission,
            fuelType,
            colour,
            vehicleType,
            engineNumber,
            chasisNumber,
            loanNumber,
            rcAvailable,
            insurance,
            hypothecation,
            financerName,
            roadTax,
            customerName,
            clientName
        });

        // Save the inspection details to the database
        const savedInspection = await inspection.save();

        // Respond with a success message or saved details if needed
        const response = res.json({
            message: "Inspection details saved successfully",
            success: true,
            savedInspection
        });

        return response;

    } catch (error) {
        console.error("Error saving inspection details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/inspection-details",async(req,res)=>{
    try {
        const recent = await Inspection.findOne().sort({ createdAt:-1 });
        
        const response = res.json({
            success:true,
            inspection:recent
        });

        return response
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"internal server error"})
    }
})

app.listen(port, () => {
   
    setTimeout(() => {
        console.log("server connected")
    },1500)

    setTimeout(()=>{
        console.log("http://localhost:5000")
    },2500)
})