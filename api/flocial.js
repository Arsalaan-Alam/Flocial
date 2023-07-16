import * as fcl from "@onflow/fcl"
import "./flow/config.js";

export default class flocial {

    constructor() {
        
    }
    
    getAllProfiles = async() => {
        try {
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
            console.log(transformedData)
            return ({ status: 'success', data: transformedData})
        } catch (e) { 
            console.log(e) 
            return ({ status: 'error', message: 'Something went wrong'})
        }
        

    }

    getProfileByAddress = async(address) => { 
        
        if (!address) {
            return ({ status: 'error', message: 'Invalid OR no argument was specified'})            
        }

        try {
            const profile = await fcl.query({            
                cadence: `
                    import Profile from 0xf41fd3cb80a5dce4
    
                    pub fun main(address: Address): Profile.ReadOnly? {
                    return Profile.read(address)
                    }
                `,
                args: (arg, t) => [arg(address, t.Address)]
            })            
            console.log(profile)
            return ({ status: 'success', data: profile})
        } catch (e) { 
            console.log(e) 
            return ({ status: 'error', message: 'Something went wrong'})
        }
    }

}