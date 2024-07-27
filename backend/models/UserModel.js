import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        require:true,
        trim:true
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
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
        unique:true
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    emergencyPhone:{
        type:String,
        unique:true
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