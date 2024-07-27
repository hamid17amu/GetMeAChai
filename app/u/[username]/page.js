import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import connectDB from '@/db/connectDB'
import User from '@/models/User'
import { notFound } from 'next/navigation'

const Username = async ({params}) => {
  await connectDB()
  let u=await User.findOne({username: params.username})
  if (!u) {
    return notFound()
  }

  return (
    <PaymentPage username={params.username}/>
  )
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: `${params.username} | GetMeAChai`,
  }
}