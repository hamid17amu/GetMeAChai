import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="font-bold text-5xl">But Me a Chai</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio repudiandae quam cum. Eos, sit?
      </p>
      <div>
      <Link href={"/login"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      </Link>
      <Link href={"/about"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto py-32">
      <h2 className="text-2xl font-bold text-center mb-14">Your fans can buy you a chai</h2>
      <div className="flex gap-5 justify-around">
      <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto py-32">
      <h2 className="text-2xl font-bold text-center mb-14">Learn more about us</h2>
      <div className="flex gap-5 justify-around">
      <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="items space-y-3 flex flex-col items-center flex-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="" alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
      </div>
    </div>
    </>
  );
}

export const metadata = {
  title: 'Home | GetMeAChai',
}
