import { useSession , signOut } from "next-auth/react";

export default function MiniProfile(){
    const {data:session} = useSession();

    return( 
       <div className=" ">
            <img src={session?.user.image}
             alt="user-image" 
             className="h-16 rounded-full border p-[2px] items-start justify-start mt-14 ml-10"/>

            <div className=" ">
                <h2 className="font-bold ml-28 -mt-14">{session?.user.username}</h2>
                <h3 className="text-sm text-gray-400 ml-28 -mt-1">Welcome to instagram</h3>
            </div>
            <button onClick={signOut} className="  font-semibold text-blue-900 text-sm -mt-16 ml-80 ">Sign out</button>
        
       </div> 

    
    );
        
    
}`

// flex-col items-center justify-between`