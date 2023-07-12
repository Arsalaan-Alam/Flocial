pub contract Library {    

   pub struct Profile {
        pub var username: String
        pub var fullname: String
        pub var email: String
        pub var avatar: String
        pub var desc: String

        init(username: String, fullname: String, email: String, avatar: String, desc: String) {
            self.username = username
            self.fullname = fullname
            self.email = email
            self.avatar = avatar
            self.desc = desc
        }
    }

    pub var profiles: [{Address: Profile}]

    
    init() {
        self.profiles = []
    }

    pub fun getProfileByAddress(address: Address): Profile? {
        for profile in self.profiles {
            if let data: Library.Profile = profile[address] {
                return data
            }
        }
        return nil    
    }

    pub fun searchByAddressIndex(address: Address): Int? {     
        for i, profile in self.profiles {
            let currentProfile: {Address: Library.Profile} = self.profiles[i]
            if currentProfile.keys.contains(address) {
                return i
            }
        }
        return nil
    }

    pub fun addProfile (newProfile: {Address: Library.Profile}) {
        let address: Address = newProfile.keys[0]
        let existingProfileIndex: Int? = self.searchByAddressIndex(address: address)        
        if existingProfileIndex != nil {            
            self.modifyProfiles(index: existingProfileIndex!, newProfile: newProfile)
        } else {
            self.profiles.append(newProfile)
        }
    }
    
    pub fun deleteProfile(index: Int) {
        self.profiles.remove(at: index)
    }

    pub fun modifyProfiles(index: Int, newProfile: {Address: Library.Profile}) {
        self.profiles[index] = newProfile
    }
}