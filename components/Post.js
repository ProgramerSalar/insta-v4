
import React from "react";
import { EllipsisHorizontalIcon  , HeartIcon  , ChatBubbleBottomCenterTextIcon , BookmarkIcon}from '@heroicons/react/24/solid'
export default function Post({img , userImg , caption , username , id }){

    return(
        <div className="bg-white my-7 border rounded-md ">
           

            {/* Posts  */}

            <div className="flex items-center p-5 ">
                <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
                <p className="font-bold flex-1">{username}</p>
                <EllipsisHorizontalIcon className="h-5"/>

            </div>

            {/* posts imge  */}
            <img className="object-cover w-full " src={img} alt="" />

            {/* post button  */}


            <div className=" flex justify-between px-4 pt-4 ">
                <div className="flex space-x-4">
                    <HeartIcon className="btn  text-green-700"/>
                    <ChatBubbleBottomCenterTextIcon className="btn text-green-700"/>
                </div>
                <BookmarkIcon className="btn  text-green-700 "/>


            </div>
            
        
        </div>
    )
}