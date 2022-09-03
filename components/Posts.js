
import React from "react";
import Post from "./Post";
// import { useSession } from "next-auth/react";

export default function Posts(){
    // const {data:session} = useSession();
    const posts = [
        {
            id:"1",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
            // userImg:{session.user.image},

            img:"https://images.unsplash.com/photo-1662045412424-f7907eeebaa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            caption:" nice picture"

        },
        {
            id:"2",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
            img:"https://images.unsplash.com/photo-1661985191208-d668453ac79c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80",
            caption:" nice picture"

        }
    ]
    return(
        <div className="">
            {posts.map(post=>(
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                    

                />
            ))}

        </div>
    )
}