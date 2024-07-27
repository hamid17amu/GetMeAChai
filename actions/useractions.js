"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"

export const initiate= async(amount, to_username, paymentform) =>{
    await connectDB()
    let u=await User.findOne({username:to_username})
    var instance = new Razorpay({
      key_id: u.razorpayid,
      key_secret: u.razorpaysecret,
    })

    let options={
        amount: Number.parseInt(amount),
        currency:"INR"
    }

    let x=await instance.orders.create(options)

    await Payment.create({
        oid:x.id,
        amount:amount/100,
        to_user:to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return x
}
 
export const fetchuser = async(username)=>{
    await connectDB()
    let u=await User.findOne({username: username})
    let user= u.toObject({flattenObjectIds: true})
    return user
}

export const fetchPayment= async(username)=>{
    await connectDB()
    let p=await Payment.find({to_user: username, done:true}).sort({amount:-1}).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data)
    if(oldusername!=ndata.username){
        let nu= await User.findOne({username: ndata.username})
        if(nu){
            return {success: false, message:"Username already exists!"}
        }
        
        await Payment.updateMany({to_user:oldusername}, {to_user:ndata.username})
    }

    await User.updateOne({email: ndata.email}, ndata)
    return {success: true, message: "Profile updated successfully!"}
}