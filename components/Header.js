
import React from "react";
import Image from "next/image"
import { MagnifyingGlassIcon} from '@heroicons/react/24/solid'

export default function Header(){
    return(
        
            
            <div className="flex items-center justify-between max-w-6xl">
                {/* left  */}
                <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                    <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                    layout="fill"
                    className="object-contain"
                    />
                </div>
                
                <div className="h-24 w-10 relative  lg:hidden cursor-pointer">
                    <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                    layout="fill"
                    className="object-contain "
                    />
                </div>
                    {/* middle  */}
                    <div className="relative mt-1">
                        <div className="absolute top-2 left-2">
                            <MagnifyingGlassIcon className="h-5 text-gray-500  "/>
                        </div>
                        <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm foucs:ring-black focus:border-black rounded-md" />

                    </div>
                    
                    

                    {/* right  */}
                <h1> Right side </h1>
            </div>

            
            

            
        
    )
}