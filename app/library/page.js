"use client"
import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import "@/flow/config";
import { PacmanLoader } from "react-spinners";



const LibraryPage = () => {
  //const walletAddresses = ["0x0fb74b342aea7798", "0xf29693609c4d4494", "0xb5bd1bfcd1f36235", "0xfac4f77afa0cd121", "0xbb929b5de40a563c", "0xeead9ebbca30dc2c"];
  //const walletAddresses = ["0x0fb74b342aea7798"];
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState("");

{/*
  useEffect(() => {
    const fetchProfiles = async () => {
      const profilePromises = walletAddresses.map(async (address) => {
        const profile = await fcl.query({
          cadence: `
            import Library from 0xf41fd3cb80a5dce4

            pub fun main(address: Address): Library.Profile {
              return Library.getProfileByAddress(address)
            }
          `,
          args: (arg, t) => [arg(address, t.Address)],
        });
        return profile;
      });

      const profileData = await Promise.all(profilePromises);
      setProfiles(profileData);
      setIsLoading(false);
    };

    fetchProfiles();
  }, [walletAddresses]);

*/}  

  const getProfileData = async () => {
    
    const profileData = await fcl.query({
      cadence: `
        import Library from 0xf41fd3cb80a5dce4

        pub fun main(): [{Address: Library.Profile}] {
          return Library.getAllProfiles()
        }
      `,      
    });
    console.log(profileData)
    const transformedData = profileData.map((obj) => {
      const [address, value] = Object.entries(obj)[0];
      return { address, ...value };
    });
    console.log('Profiles : ', transformedData.length)
    console.log(transformedData)
    return transformedData
  }

  useEffect(async() => {     
    const profileData = await getProfileData()
    setProfiles(profileData)  
    setFilteredProfiles(profileData)
    setIsLoading(false);
  },[])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const searchedProfiles = profiles.filter(
      (profile) =>
        profile?.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile?.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile?.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );    
    setFilteredProfiles(searchedProfiles)
  };

  
  
    
  return (
    <div className="">
      <div className="flex items-center justify-center my-5">
        <input
          type="text"
          placeholder="Search people by their names or description"
          className="px-4 py-3 bg-gray-100 text-gray-700 border rounded min-w-3/5 outline-none leading-tight focus:outline-none focus:border-gray-500 focus:bg-white text-base"
          value={searchQuery}
          onChange={handleSearch}
        />
        
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-10 mb-10">
{isLoading ? (
       <div className="flex col-span-3 items-center justify-center mt-20">
       <PacmanLoader color="#4F46E5" />
     </div>
      ) : (
        filteredProfiles.map((profile, index) => (
        <div
          key={index}
          className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between mt-5"
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
            <p className="text-gray-600 text-center">{profile?.username}</p>
           
          </div>
          <div className="flex items-center justify-center">
            
            <a  href={`/profile/${profile?.address}`} className="mt-3 text-blue-500 font-semibold">View Profile</a>
            
          </div>
        </div>
      ))
      )}
    </div>
    </div>
  );
};

export default LibraryPage;
