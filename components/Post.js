
import React, { useEffect, useState } from "react";
import { EllipsisHorizontalIcon  , HeartIcon  , ChatBubbleBottomCenterTextIcon , BookmarkIcon, SparklesIcon ,FaceSmileIcon }from '@heroicons/react/24/solid'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/solid'
import {useSession} from "next-auth/react"
import { async } from "@firebase/util";
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp , query, setDoc, doc, deleteDoc } from "firebase/firestore";
import Moment from 'react-moment';

import { db } from "../firebase";
import { Snapshot } from "recoil";










export default function Post({img , userImg , caption , username , id  }){
    const {data : session} = useSession();
    const [comment , setComment] = useState("")
    const [comments, setComments] = useState([]);
    const [likes  , setLikes] = useState([]);
    const [hasLiked , setHasLiked] = useState(false);
    

    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), (snapshot) => {setComments(snapshot.docs)}
      )
  
    }, [db, id]);

  

    

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);
  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }
        
    

    
    async function sendComment(event){
        event.preventDefault();
        const commentToSend = comment;
        setComment("")
        await addDoc(collection(db , "posts" , id , "comments") , {
            comment : commentToSend , 
            username : session.user.username,
            userImage:session.user.image,
            timestamp : serverTimestamp()
        })
    }


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
                    {hasLiked ? (<HeartIconFilled  onClick={likePost}className="btn text-red-900" />) : (
                        <HeartIcon onClick={likePost}className="btn " />

                    )}
                    
                    
                    <ChatBubbleBottomCenterTextIcon className="btn "/>
                </div>
                <BookmarkIcon className="btn  "/>


                </div>


            )}


            

            {/* post comments  */}
            
            <p className="p-5 truncate "><span className="font-bold mr-2">{username}</span>{caption}

            
            </p>
            {comments.length > 0 && (
                <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                    {comments.map(comment =>(
                        <div className="flex items-center space-x-2 mb-2">
                            <img  className="h-7 rounded-full object-cover" src={comment.data().userImage} alt="user-image" />
                            <p className="font-semibold ">{comment.data().username}</p>
                            <p className="flex-1 truncate">{comment.data().comment}</p>
                            <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>

                        </div>
                    ))}
                </div>
            )}


            {/* post input box  */}

            {session && (

                <form action="" className="flex items-center p-14">
                <FaceSmileIcon className="h-7 text-gray-500"/>
                <input value={comment}
                onChange={(event)=>setComment(event.target.value)}
                
                className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your Comment........" />
                <button
                type="submit"
                onClick={sendComment}
                disabled={!comment}
                className="text-blue-400 font-bold disabled:text-blue-200 "
            >
                Post
            </button>
                </form>


            )}
            
        

        </div>
    )
}

