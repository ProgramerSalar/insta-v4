
export default function MiniProfile(){
    return( 
       <div className="flex-col items-center justify-between mt-14 ml-10">
            <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"
             alt="user-image" 
             className="h-16 rounded-full border p-[2px]"/>

            <div className="flex-1 ">
                <h2 className="font-bold">Codewithmanish</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="  font-semibold text-blue-900 text-sm">Sign out</button>
        
       </div> 

    
    );
        
    
}