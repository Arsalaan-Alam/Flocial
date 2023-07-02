export default function UserProfile({params}){
    return(
        <div className= "flex justify-center mt-5"> 
        <p className="text-4xl">Hi
        <span className="p-2 rounded ml-2 bg-orange-500">
        {params.id}!
        </span>       
         
        </p>    
        </div>
    )
}