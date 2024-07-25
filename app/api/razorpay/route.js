import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export const POST= async(req)=>{
    await connectDB();
    let body=await req.formData()
    body=Object.fromEntries(body)

    let p=await Payment.findOne({oid: body.razorpay_order_id})

    if(!p){
        return NextResponse.json({success: false, message: "order Id not found"})
    }

    let x= validatePaymentVerification({
        "order_id": body.razorpay_order_id,
        "payment_id": body.razorpay_payment_id
    }, body.razorpay_signature, `${process.env.KEY_SECRET}`)

    if(x){
        const updatedPayment = await Payment.findOneAndUpdate(
            {oid: body.razorpay_order_id},
            {done:"true"},
            {new:true}
        )
        console.log("paymentDone")
        return NextResponse.redirect(`http://localhost:3000/u/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        console.log("payment Failed")
        return NextResponse.json({success: false, message: "Payment Verification Failed"})
    }
}