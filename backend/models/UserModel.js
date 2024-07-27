import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        require:true,
        trim:true,
        minLength: [3, "NAME MUST CONTAIN AT LEAST 3 CHARECTERS"]
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
        minLength: [3, "CITY NAME MUST CONTAIN AT LEAST 3 CHARECTERS"]
    },
    state:{
        type:String,
        require:true,
        minLength: [3, "STATE NAME MUST CONTAIN AT LEAST 3 CHARECTERS"]
    },
    pinCode:{
        type:Number,
        require:true,
        trim:true
    },
    registrationDate:{
        type:Date,
        require:true,
    },
    ambulance:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        validate:[validator.isEmail, "PLEASE PROVIDE A VALID EMAIL ID"] 
    },
    phone:{
        type:String,
        require:true,
        unique:true,
        minLength: [10, "PHONE NUMBER MUST CONTAIN EXACT 10 DIGITS"],
        maxLength: [10, "PHONE NUMBER MUST CONTAIN EXACT 10 DIGITS"]
    },
    emergencyPhone:{
        type:String,
        unique:true,
        minLength: [10, "PHONE NUMBER MUST CONTAIN EXACT 10 DIGITS"],
        maxLength: [10, "PHONE NUMBER MUST CONTAIN EXACT 10 DIGITS"]
    },
    registratonCertificate:{
        type:File,
        require:true,
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    role:{
        type:Number,
        default:0
    }
    
},{timestamps:true})


const UserModel = mongoose.model('user',userSchema)

export default UserModel