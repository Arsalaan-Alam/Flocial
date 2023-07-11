"use client"

import * as fcl from "@onflow/fcl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useParams } from "react";
import { Router } from "next/router";
import "@/flow/config";

export default function UserProfile({params}){

    const [user, setUser] = useState({ loggedIn: null });
    useEffect(() => fcl.currentUser.subscribe(setUser), []);


    const [profile, setProfile] = useState({
        username: "username",
        fullname: "Full Name",
        avatar: "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg",
        email: "full@name.com",
        desc: "Brief description"
    })
   
    useEffect(() => {        
        getProfileData()
    }, [])

    const getProfileData = async () => { 
               
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
        setProfile({
            username: profile.username,
            fullname: profile.fullname,
            avatar: profile.avatar,
            email: profile.email,
            desc: profile.desc
        })
    }    
    const encodedAddress = encodeURIComponent(params.id);
    const updateAddressHref = `/update/${encodedAddress}`;

   
    return(
        <div className="flex items-center justify-center mt-12">
            <div className="font-bold rounded-lg border shadow-xl bg-base-100 min-w-3/5 p-10 bg-grey-100 max-w-xl">
                <div className="grid grid-cols-10">
                    <div className="col-span-3 p-2 flex items-center justify-center">
                       <div className="flex flex-col items-center justify-center">
                        <img src={profile.avatar} alt="profileimg" className=""/>
                       
                        <br></br>
                        {user?.addr === params.id && (
                      <Link href={updateAddressHref}> 
                            <button class=" col-span-1 bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold ">
                                Update Profile
                            </button>
                        </Link>
                          )}
                        </div>
                    </div>
                    
                    <div className="col-span-7">
                        <div className="mt-8 mb-8">
                        <div className="grid grid-cols-5 ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Full Name:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                {profile.fullname}
                            </div>

                            </div>
                            <div className="grid grid-cols-5 ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Username:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                {profile.username}
                            </div>
                            

                            </div>
                            <div className="grid grid-cols-5  ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Wallet Address:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                {params.id}
                            </div>

                            </div>
                            <div className="grid grid-cols-5  ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Email:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                {profile.email}
                            </div>

                            </div>

                        <div className="ml-11 mt-2">Description:</div>
                        <div className="ml-11 mt-2 font-normal text-l">
                        {profile.desc}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}