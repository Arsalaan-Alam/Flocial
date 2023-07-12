"use client"
import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import "@/flow/config";

const LibraryPage = () => {
  const walletAddresses = ["0xf29693609c4d4494", "0xb5bd1bfcd1f36235", "0xfac4f77afa0cd121"];
  const [profiles, setProfiles] = useState([]);


  useEffect(() => {
    const fetchProfiles = async () => {
      const profilePromises = walletAddresses.map(async (address) => {
        const profile = await fcl.query({
          cadence: `
            import Profile from 0xf41fd3cb80a5dce4

            pub fun main(address: Address): Profile.ReadOnly? {
              return Profile.read(address)
            }
          `,
          args: (arg, t) => [arg(address, t.Address)],
        });
        return profile;
      });

      const profileData = await Promise.all(profilePromises);
      setProfiles(profileData);
    };

    fetchProfiles();
  }, [walletAddresses]);
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
        >
          <div>
            <img
              src={profile?.avatar}
              alt="profileimg"
              className="w-40 h-40 rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">
              {profile?.fullname}
            </h2>
            <p className="text-gray-500 text-center">{profile?.username}</p>
          </div>
          <div className="flex items-center justify-center">
            
            <a href="" className="mt-3 text-blue-500 font-semibold">{profile?.address}</a>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default LibraryPage;
