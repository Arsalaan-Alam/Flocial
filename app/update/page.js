"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

export default function SignupPage () {

  const [user, setUser] = useState({ addr: "" });
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fcl.currentUser().subscribe((user) => setUser(user));
  }, []);

  const handleSubmit = async () => {
    // Perform form submission logic here, something like this ig
    /*  const [user, setUser] = React.useState({
    first-name: "",
    username: "",
    email: "",
    description: "",
  })
  */
    const encodedAddress = encodeURIComponent(user?.addr);
    const profileAddressHref = `/profile/${encodedAddress}`;
    router.push(profileAddressHref);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex items-center justify-center mt-12">
        <form className="w-full max-w-lg" method="POST">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"> Full Name</label>
              <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white"
    id="full-name"
    type="text"
    // value={user.full-name}
    placeholder="Jane Doe"
  />  
</div>
<div className="w-full md:w-1/2 px-3">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-last-name"
  >
    Username
  </label>
  <input
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="username"
    // value={user.username}
    type="text"
    placeholder="abc@123"
  />
</div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
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
<div className="flex flex-wrap -mx-3 mb-2">
<div className="w-full px-3">
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  
  >
    Description
  </label>
  <textarea
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="description"
    type="name"
    // value={user.description}
    placeholder="Describe yourself in a tweet!"
  />
  
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Avatar
            </label>
            <div className="flex items-center">
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="avatar"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFile && (
               <></>
              )}
            </div>
          </div>
        </div>

<div class="md:flex md:items-center">
<div className="md:w-1/3"></div>
<div className="md:w-2/3">
 
  <button 
  onClick={handleSubmit}
  className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
    Submit
  </button>

</div>
</div>  

</form>

    </div>
)
}
