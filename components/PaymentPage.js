"use client";
import React, {useState, useEffect} from "react";
import Script from "next/script";
import { initiate, fetchuser, fetchPayment } from "@/actions/useractions";

const PaymentPage = ({username}) => {
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [Payments, setPayments] = useState([])

    const handleChange = (e) =>{
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }
    
    const pay=async(amount)=>{

        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key_id": `${process.env.KEY_ID}`, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1= new Razorpay(options);       
        rzp1.open()
    } 

    const getData = async()=>{
      let u=await fetchuser(username)
      setCurrentUser(u)
      // console.log(u)
      let dbPayments= await fetchPayment(username)
      setPayments(dbPayments)
      console.log(u,dbPayments)
    }

    useEffect(() => {
      getData()
    }, [])
    
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='cover w-full bg-red-50 relative'>
      <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1722729600&token-hash=uD8NWNHY4QogM8Eap1XAdek8mQQjgAm5opRSjBgVcA4%3D"
       alt=""/>
      <div className='absolute -bottom-20 right-[46.5%] border-white border rounded-2xl'>
        <img src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" 
        className='rounded-2xl' width={100} height={100} alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-24 flex-col gap-2">
      <div className="font-bold text-lg">
        @{username}
      </div>
      <div className='text-slate-400'>
        Lorem ipsum dolor sit.
      </div>
      <div className='text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="paymen flex gap-3 w-[80%] mt-11">
        <div className="supporters bg-slate-900 w-1/2 rounded-lg p-10">
          {/* Leaderboard */}
          <h2 className='text-2xl font-bold my-5'>Supporters</h2>
          <ul className='mx-5 lext-lg'>
            {Payments.length==0 && <li>No payments yet</li>}
            {Payments?.map((p,i)=>{
              return <li key={i} className='my-2'>{p.name} donated <span className='font-bold'>₹{p.amount/100}</span> with a message "{p.message}"</li>
            })}
          </ul>
        </div>
        <div className="makepayment bg-slate-900 w-1/2 rounded-lg p-5">
        <h2 className='text-2xl font-bold my-5'>Make a Paymenr</h2>
        <div className="flex gap-2 flex-col">
          <input onChange={handleChange} name="message" value={paymentform.message} type="text" className='p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
          <input onChange={handleChange} name="name" value={paymentform.name} type="text" className='p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
          <input onChange={handleChange} name="amount" value={paymentform.amount} type="number" className='p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'/>
          <button onClick={()=>{pay(paymentform.amount * 100)}} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Pay</button>
        </div>
        {/* or choose Amount */}
        <div className="flex gap-2 mt-5">
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>{pay(1000)}}>Pay ₹10</button>
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>{pay(2000)}}>Pay ₹20</button>
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>{pay(3000)}}>Pay ₹30</button>
        </div>

        </div>
      </div>
      
    </div>
    </>
  );
};

export default PaymentPage;
