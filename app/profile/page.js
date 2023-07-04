export default function ProfilePage(){
    return(
        <div className="flex items-center justify-center mt-20">
            <div className="font-bold rounded-lg border shadow-xl bg-base-100 min-w-3/4 p-10 bg-grey-100 max-w-2xl">
                <div className="grid grid-cols-10 gap-4">
                    <div className="bg-blue-100 col-span-3 p-2 flex items-center justify-center">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="profileimg" className=""/>
                        
                    </div>
                    <div className="bg-red-100 col-span-7">
                        2nd col
                    </div>
                </div>
            </div>
        </div>
 
    
    )
}