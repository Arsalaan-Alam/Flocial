"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage () {
/*  const [user, setUser] = React.useState({
    first-name: "",
    last-name: "",
    username: "",
    email: "",
  })
  const onSignup = async () => {

  } */

  return (
    <div className="flex items-center justify-center mt-20">
        <form className="w-full max-w-lg" method="POST">
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-first-name"
  >
    First Name
  </label>
  <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white"
    id="first-name"
    type="text"
    // value={user.first-name}
    placeholder="Jane"
  />  
</div>
<div className="w-full md:w-1/2 px-3">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-last-name"
  >
    Last Name
  </label>
  <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="last-name"
    // value={user.last-name}
    type="text"
    placeholder="Doe"
  />
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full px-3">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  
  >
    Username
  </label>
  <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="username"
    type="name"
    // value={user.username}
    placeholder="xyz@123"
  />
  
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full px-3">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="email"
  >
    Email
  </label>
  <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="email"
     // value={user.email}
    type="email"
    placeholder="janedoe@abc.com"
  />
 
</div>
</div>
<div class="md:flex md:items-center">
<div className="md:w-1/3"></div>
<div className="md:w-2/3">
  <Link href="/profile">
  <button 
 // onClick={onSignup}
  className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
    Sign Up
  </button>
  </Link>
</div>
</div>  
</form>

    </div>
)
}
