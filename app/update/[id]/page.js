"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import "@/flow/config";

export default function SignupPage ({params}) {

  const router = useRouter();
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')
  const [submitmsg, setSubmitmsg] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState("Processing. Please approve the transaction!");
  const [user, setUser] = useState({ addr: ""})

 {/*  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);
  console.log(user.addr)
  console.log(params.id)
  console.log(user.addr == params.id)
*/}
 

  const getExistingProfileData = async () => { 
    
    const profile = await fcl.query({
        cadence: `
            import Profile from 0xf41fd3cb80a5dce4

            pub fun main(address: Address): Profile.ReadOnly? {
            return Profile.read(address)
            }
        `,
        args: (arg, t) => [arg(params.id, t.Address)]
    })            
    console.log('Response ', profile)
    setFullName(profile.fullname)
    setUsername(profile.username)
    setEmail(profile.email)
    setDesc(profile.desc)    
    setAvatar(profile.avatar)
}
  useEffect(() => {
    getExistingProfileData()
  }, []);

  const handleSubmit = async () => {    
    if (!fullName || !username || !email || !avatar || !desc) {
      setSubmitmsg(true)
      setSubmitMessage("Please fill in all the required fields.");
      return;
    }
    setSubmitmsg(true)
    setSubmitMessage("Processing. Please approve the transaction!")
    console.log(user)
    //console.log(fullName + ' ' + username + ' ' + email)

    const txnId = await fcl.mutate({     
      cadence: `
        import Profile from 0xf41fd3cb80a5dce4
        import Library from 0xf41fd3cb80a5dce4
        
        transaction (username: String, src: String, fullname: String, email: String, desc: String) {
          
          prepare(acct: AuthAccount) {
            if (!Profile.check(acct.address)){
              if acct.borrow<&Profile.Base>(from: Profile.privatePath) != nil {                
                let oldobject <- acct.load<@Profile.Base>(from: Profile.privatePath)   
                destroy oldobject          
              }              
              acct.save(<- Profile.new(), to: Profile.privatePath)
              acct.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)                           
            } 
              let profile = acct.borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!                
              profile.setUsername(username)                           
              profile.setAvatar(src)              
              profile.setFullname(fullname)              
              profile.setEmail(email)              
              profile.setDesc(desc)    
            
                let newProfile: {Address: Library.Profile} = {
                  acct.address: Library.Profile(
                    username: username, avatar: src, fullname: fullname, email: email, desc: desc
                    )}
                Library.addProfile(newProfile: newProfile)            
          }          
        }
      `,
      args: (arg, t) => [
        arg(username, t.String),
        arg(avatar, t.String),
        arg(fullName, t.String),        
        arg(email, t.String),   
        arg(desc, t.String),   
      ],
      proposer: fcl.currentUser,
      payer: fcl.currentUser,      
      authorization: [fcl.currentUser],
      limit: 1000
    })

    console.log('TxnID ',txnId)
    setSubmitMessage("Loading, Please wait!")
    
    const txn = await fcl.tx(txnId).onceSealed()
    //getTxn(txnId)
    console.log(txn)
    const encodedAddress = encodeURIComponent(params.id);
    const profileAddressHref = `/profile/${encodedAddress}`;
    router.push(profileAddressHref);
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
    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="avatar"    
    value={avatar}
    type="text"
    onChange={(e) => setAvatar(e.target.value)}
    placeholder="Paste your Avatar's URL."
  />

            </div>
          </div>
        </div>

<div class="md:flex md:items-center">
<div className="md:w-1/3"></div>
<div className="md:w-2/3">
 
  <button 
  onClick={handleSubmit}
  className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5 ml-8" type="button">
    Submit
  </button>
 
</div>

</div>  
{submitmsg && (
            <p className="text-gray-500 mt-5 text-center">{submitMessage}</p>
          )}
</form>


    </div>
)
}
