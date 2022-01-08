import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
//import { Snapshot } from "recoil";

// const posts = [
//     {
//         id: '123',
//         username: 'emin',
//         userImg: 'https://links.papareact.com/3ke',
//         img: "https://links.papareact.com/3ke",
//         caption: "this is dope!",
//     },

//     {
//         id: '123',
//         username: 'emin',
//         userImg: 'https://links.papareact.com/3ke',
//         img: "https://links.papareact.com/3ke",
//         caption: "this is dope!",
//     },
// ];

function Posts() {
   const [posts,setPosts] = useState([]);
    
   useEffect(
       () => 
        onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot)  => {
              setPosts(snapshot.docs);
          }
        ),
    [db]
);

//console.log(posts);
    return (
        <div>
             {posts.map((post) => (
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

export default Posts;
