
import React from "react";
import {getProviders , signIn} from "next-auth/react"
import { async } from "@firebase/util";
import Header from "../../components/Header"
import { useRouter } from "next/router";



export default function signin({providers}){
    const router = useRouter();
    return(
        <>
        <Header>
             
        </Header>
        <div className="flex justify-center space-x-7 mt-20">
            <img onClick={()=> router.push("/")}className="hidden object-cover rotate-6 md:inline-flex "  src="https://jetdigital.in/wp-content/uploads/2021/08/instagram-6560837_640.png" alt="" />
            <div className="">
                {
                    Object.values(providers).map((provider)=>(
                        <div className="flex flex-col items-center" key={provider.name}>
                            <img onClick={()=> router.push("/")} className="w-32 object-cover " src="https://support.pingidentity.com/servlet/servlet.FileDownload?file=00P1W00001JyxeKUAR" alt="" />
                            <p className="text-sm italic my-10 text-center">This app is created for learning purpases</p>
                            <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-blue-600" onClick={()=>signIn(provider.id , {callbackUrl:"/"})}>Sign in with {provider.name}</button>
                        </div>
                    ))
                }

            </div>
        </div>
        
        </>
        
    )
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props:{providers}
    }
    return(
        <div className="">
            
        </div>
    )
}