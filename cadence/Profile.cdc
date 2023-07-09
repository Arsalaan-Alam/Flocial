pub contract Profile {
  pub let publicPath: PublicPath
  pub let privatePath: StoragePath

  pub resource interface Public {
    pub fun getUsername(): String
    pub fun getAvatar(): String
    pub fun getFullname(): String
    pub fun getEmail(): String
    pub fun getDesc(): String
    pub fun asReadOnly(): Profile.ReadOnly
  }
  
  pub resource interface Owner {
    pub fun getUsername(): String
    pub fun getAvatar(): String
    pub fun getFullname(): String
    pub fun getEmail(): String
    
    pub fun setUsername(_ username: String)
    pub fun setAvatar(_ src: String)
    pub fun setFullname(_ fullname: String)
    pub fun setEmail(_ email: String) 
    pub fun setDesc(_ desc: String) {
      pre {
        desc.length <= 280: "Profile desc can at max be 280 characters long."
      }
    }
  }

    pub resource Base: Owner, Public {
        access(self) var username: String
        access(self) var avatar: String
        access(self) var fullname: String
        access(self) var email: String
        access(self) var desc: String
    
    init() {
      self.username = ""
      self.avatar = ""
      self.fullname = ""
      self.email = ""
      self.desc = ""
    }
    
    pub fun getUsername(): String { return self.username }
    pub fun getAvatar(): String { return self.avatar }
    pub fun getFullname(): String {return self.fullname }
    pub fun getEmail(): String { return self.email }
    pub fun getDesc(): String { return self.desc }
    
    pub fun setUsername(_ username: String) { self.username = username }
    pub fun setAvatar(_ src: String) { self.avatar = src }
    pub fun setFullname(_ fullname: String) { self.fullname = fullname }
    pub fun setEmail(_ email: String) { self.email = email }
    pub fun setDesc(_ desc: String) { self.desc = desc }
    
    pub fun asReadOnly(): Profile.ReadOnly {
      return Profile.ReadOnly(
        address: self.owner?.address,
        username: self.getUsername(),
        avatar: self.getAvatar(),
        fullname: self.getFullname(),
        email: self.getEmail(),
        desc: self.getDesc()
      )
    }
  }

    pub struct ReadOnly {
        pub let address: Address?
        pub let username: String
        pub let avatar: String
        pub let fullname: String
        pub let email: String
        pub let desc: String
    
        init(address: Address?, username: String, avatar: String, fullname: String, email: String, desc: String) {
            self.address = address
            self.username = username
            self.avatar = avatar
            self.fullname = fullname
            self.email = email
            self.desc = desc
        } 
    }

    pub fun new(): @Profile.Base {
        return <- create Base()
    }

    pub fun check(_ address: Address): Bool {
        return getAccount(address)
            .getCapability<&{Profile.Public}>(Profile.publicPath)
            .check()
    }

    pub fun fetch(_ address: Address): &{Profile.Public} {
        return getAccount(address)
            .getCapability<&{Profile.Public}>(Profile.publicPath)
            .borrow()!
    }

    pub fun read(_ address: Address): Profile.ReadOnly? {
        if let profile = getAccount(address).getCapability<&{Profile.Public}>(Profile.publicPath).borrow() {
            return profile.asReadOnly()
        } else {
            return nil
        }
    }

    init() {
        self.publicPath = /public/profile
        self.privatePath = /storage/profile
    
        self.account.save(<- self.new(), to: self.privatePath)
        self.account.link<&Base{Public}>(self.publicPath, target: self.privatePath)
    
        //self.account
        //    .borrow<&Base{Owner}>(from: self.privatePath)!
        //    .setUsername("qvvg")
    }

}