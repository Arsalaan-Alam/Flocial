"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import "@/flow/config";

export default function SignupPage () {

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')
  
  const [user, setUser] = useState({ addr: ""})
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fcl.currentUser().subscribe((user) => setUser(user));
  }, []);

  const handleSubmit = async () => {    
    if (!fullName && !username && !email) {
      throw new Error('Input empty...');
    }
    
    console.log(user)
    console.log(fullName)
    
    
    const txnId = await fcl.mutate({
      cadence: `
        import Core from 0xf386a98db99081f1
        
        transaction (_username: String, _fullName: String, _email: String, _visibility: Bool) {          
          prepare(acct1: AuthAccount) {}
          execute {            
            Core.addUser(_username: _username, _fullName: _fullName, _email: _email)
            Core.mutateUserVisibility(_visibility: _visibility)            
          }
        }
      `,
      args: (arg, t) => [
        arg(username, t.String),
        arg(fullName, t.String),
        arg(email, t.String),
        arg(true, t.Bool),
      ],
      proposer: fcl.currentUser,
      payer: fcl.currentUser,      
      authorization: [fcl.currentUser],
      limit: 50
    })

    console.log('TxnID ',txnId)
    
    const txn = await fcl.tx(txnId).onceSealed()
    //getTxn(txnId)
    console.log(txn)
    
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
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
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
    value={username}
    onChange={(e) => setUsername(e.target.value)}
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
    onChange={(e) => setEmail(e.target.value)}
    value={email}
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
    onChange={(e) => setDesc(e.target.value)}
    value={desc}
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
