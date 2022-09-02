
import React from "react";
import Image from "next/image"

export default function Header(){
    return(
        <div>
            {/* left  */}
            <div className="flex items-center justify-between max-w-6xl">
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
                <h1> Right side </h1>
            </div>

            {/* middle  */}

            {/* right  */}
        </div>
    )
}