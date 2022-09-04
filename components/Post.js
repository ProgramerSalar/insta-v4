
import React from "react";
import { EllipsisHorizontalIcon  , HeartIcon  , ChatBubbleBottomCenterTextIcon , BookmarkIcon, SparklesIcon ,FaceSmileIcon}from '@heroicons/react/24/solid'
import {useSession} from "next-auth/react"









export default function Post({img , userImg , caption , username , id  }){
    const {data : session} = useSession();


    return(
        <div className="bg-white my-7 border rounded-md ">
           

            {/* Posts  */}

            <div className="flex items-center p-5 ">
                <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
                <p className="font-bold flex-1">{username}</p>
                <EllipsisHorizontalIcon className="h-5"/>

            </div>

            {/* posts image  */}
            <img className="object-cover w-full " src={img} alt="" />

            {/* post button  */}
            {session && (

                <div className=" flex justify-between px-4 pt-4 ">
                <div className="flex space-x-4">
                    <HeartIcon className="btn  text-green-700"/>
                    <ChatBubbleBottomCenterTextIcon className="btn text-green-700"/>
                </div>
                <BookmarkIcon className="btn  text-green-700 "/>


                </div>


            )}


            

            {/* post comments  */}
            
            <p className="p-5 truncate "><span className="font-bold mr-2">{username}</span>{caption}</p>


            {/* post input box  */}

            {session && (

                <form action="" className="flex items-center p-14">
                <FaceSmileIcon className="h-7 text-gray-500"/>
                <input className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your Comment........" />
                <button className="text-blue-400 font-bold ">Post</button>
                </form>


            )}
            
        

        </div>
    )
}