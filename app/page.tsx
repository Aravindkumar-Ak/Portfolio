"use client"

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   <main className="w-screen h-screen relative">
<div className="flex items-center w-full h-full bg-cover bg-center " style={{ backgroundImage:"url(/bg.jpg)" }} >
 <div className="pl-40 md:pl-60 pb-56 md:pb-20 z-[10] max-w-[750px] flex-col gap-5  justify-center text-center">
<h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-red-500">Aravind Kumar </h1>
<h4 className="mt-4 text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Software Developer</h4>
<p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
           <div className="flex-col md:flex-row hidden md:flex gap-10 pt-4">
            <Link
              href="/my-skills"
              className=" group relative  border-b-2 border-green-400  hover:bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="group relative bg-trasparent px-5  border-b-2 border-green-400 border-white py-3 text-lg text-white max-w-[200px] hover:bg-blue-400"
            >
              <div className="absolute border-b-2 border-green-400 z-[1] bg-blue-500 inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="group relative border-green-400  border-b-2 border-blue-400 bg-trasparent  px-5 py-3 text-lg text-white max-w-[200px]  hover:bg-blue-400"
            >
              <div className="absolute  z-[1] border-green-400 bg-blue-500 inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
            </div>
 </div>
   <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-40 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
        <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
</div>
 
   </main>
  );
}
