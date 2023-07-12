pub contract Library {    
    pub var profiles: [{Address: {String: String}}]

    init() {
        self.profiles = []
    }

    pub fun getProfileByAddress(address: Address): {String: String}? {
        for profile in self.profiles {
            if let data: {String: String} = profile[address] {
                return data
            }
        }
        return nil    
    }

    pub fun searchByAddressIndex(address: Address): Int? {     
        for i, profile in self.profiles {
            let currentProfile: {Address: {String: String}} = self.profiles[i]
            if currentProfile.keys.contains(address) {
                return i
            }
        }
        return nil
    }

    pub fun addProfile (newProfile: {Address: {String: String}}) {
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

    pub fun modifyProfiles(index: Int, newProfile: {Address: {String: String}}) {
        self.profiles[index] = newProfile
    }
}