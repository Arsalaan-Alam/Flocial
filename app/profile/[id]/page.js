"use client"

import * as fcl from "@onflow/fcl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function UserProfile({params}){

   {/*
     fcl.config()
    .put("accessNode.api", "https://access-testnet.onflow.org")
    .put('decoder.Type', val => val.staticType)
    .put('decoder.Enum', val => Number(val.fields[0].value.value))

    useEffect(() => {
        getUser();
      }, []);
    const getUser = async () => {
       
    const res = await fcl.send([
      fcl.script`
        import Core from 0xf386a98db99081f1

        pub fun main(): Core.User? {
        
      // Resolve the user
      return Core.resolveUser(_user: fcl.currentUser.address)
      }
      `
    ]).then(fcl.decode)
    console.log(res)
    
  }
   
*/}
    return(
        <div className="flex items-center justify-center mt-12">
            <div className="font-bold rounded-lg border shadow-xl bg-base-100 min-w-3/5 p-10 bg-grey-100 max-w-xl">
                <div className="grid grid-cols-10">
                    <div className="col-span-3 p-2 flex items-center justify-center">
                       <div className="flex flex-col items-center justify-center">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="profileimg" className=""/>
                       
                        <br></br>
                      <Link href="/update"> 
                       <button class=" col-span-1 bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold ">
                            Update Profile
                            </button>
                            </Link>
                         
                        </div>
                    </div>
                    
                    <div className="col-span-7">
                        <div className="mt-8 mb-8">
                        <div className="grid grid-cols-5 ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Full Name:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                Arsalaan Alam
                            </div>

                            </div>
                            <div className="grid grid-cols-5 ">
                            <div className="col-span-2 p-1 text-left ml-10">
                                Username:
                            </div>
                            <div className="col-span-3 p-1 text-right mr-8 font-semibold">
                                arsalaan@100
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
                                studyfreak1234@gmail.com
                            </div>

                            </div>

                        <div className="ml-11 mt-2">Description:</div>
                        <div className="ml-11 mt-2 font-normal text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}