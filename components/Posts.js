
import  { useEffect, useState } from "react";
import Post from "./Post";
// import { useSession } from "next-auth/react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore"
import { db } from "../firebase"





export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const unsubscribe = onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      );
      return unsubscribe;
    });


   
    return(
        <div className="">
            {posts.map(post=>(
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                    

                />
            ))}

        </div>
    )
}