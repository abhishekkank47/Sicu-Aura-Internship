import UserModel from "../models/UserModel.js"
import { comparePassword, hashPassword } from "../helpers/passwordHash.js"
import JWT from 'jsonwebtoken'

//REGISTER CONTROLLER
const registerController = async (req,res)=>{
    try {
        const{hospitalName,email,phone,password,address,city,state,pinCode,ambulance,registratonCertificate,emergencyPhone}=req.body
        console.log(`Register Request Recived${JSON.stringify(req.body)}`)
        if(!hospitalName || !email || !password || !address || !phone || !city || !state || !pinCode || !ambulance || !emergencyPhone || !registratonCertificate){
            return res.status(400).send({message: 'All feild are required'})
        }
        

        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            res.status(200).send({
                success:false,
                message:'User already regiter, Please Login'
            })
        }

        const passwordHashed = await hashPassword(password)
        const user = new UserModel({hospitalName,email,phone,address,city,state,pinCode,ambulance,emergencyPhone,registratonCertificate,password:passwordHashed}).save()

        res.status(201).send({
            success:true,
            message:'USER REGISTER SUCCESSFULLY',
            user,
        })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'ERROR IN REGISTRATION',
            error,
        })
    }
} 

//LOGIN CONTROLLER
const loginController = async (req,res)=>{
    try {
        const {hospitalName,email,password} = req.body
        console.log(`Login Request Recived${JSON.stringify(req.body)}`)
        if (!hospitalName || !email || !password){
            return res.status(404).send({
                success:false,
                message:"INVALID EMAIL/PASSWORD/HOSPITAL NAME"
            })
        }
    
    const user = await UserModel.findOne({email})
    if(!user){
        return res.status(404).send({
            sucess:false,
            message:'EMAIL IS NOT REGISTRED',
        })
    }
    
    const matchPassword = await comparePassword(password,user.password)
    if(!matchPassword){
        return res.status(200).send({
            success:false,
            message:'INVALID PASSWORD'
        })
    }

//JWT TOKEN
const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn :'90d'})
res.status(200).send({
    success:true,
    message:'LOGIN SUCESSFULLY',
    user:{
        hospitalName:user.hospitalName,
        email:user.email,
        phone:user.phone,
        address:user.address,
        password:user.password,
        role:user.role
    },token
})
} catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'ERROR IN LOGIN',
        error
    })

    
}
}



export {registerController,loginController}