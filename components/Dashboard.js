"use client"
import React, {useState, useEffect} from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
        router.push("/login");
      }
  }, [router, session])
  
  const handleChange=(e)=>{
    setform({...form,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto py-5">
        <h1 className="text-center my-5 text-3xl font-bold">
            Welcome to your Dashboard
        </h1>
      <form className="max-w-2xl mx-auto" action={handleSubmit}>
        <div className="my-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            value={form.name?form.name:""}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            value={form.email?form.email:""}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            value={form.username?form.username:""}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        {/* profile pic */}
        <div className="my-2">
          <label
            htmlFor="Profile"
            className="block mb-2 text-sm font-medium text-white"
          >
            Profile Picture
          </label>
          <input
            value={form.profile?form.pofile:""}
            onChange={handleChange}
            name="profile"
            type="text"
            id="profile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        {/* coverPic */}
        <div className="my-2">
          <label
            htmlFor="cover"
            className="block mb-2 text-sm font-medium text-white"
          >
            Conver Picture
          </label>
          <input
            value={form.cover?form.cover:""}
            onChange={handleChange}
            name="cover"
            type="text"
            id="cover"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>

        {/* razorpayid */}
        <div className="my-2">
          <label
            htmlFor="razorpayid"
            className="block mb-2 text-sm font-medium text-white"
          >
            Razorpay ID
          </label>
          <input
            value={form.razorpayid?form.razorpayid:""}
            onChange={handleChange}
            name="razorpayid"
            type="text"
            id="razorpayid"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>

        {/* razorpaysecret */}
        <div className="my-2">
          <label
            htmlFor="razorpaysecret"
            className="block mb-2 text-sm font-medium text-white"
          >
            Razorpay Secret
          </label>
          <input
            value={form.razorpaysecret?form.razorpaysecret:""}
            onChange={handleChange}
            name="razorpaysecret"
            type="text"
            id="razorpaysecret"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        
        <div className="my-6">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
