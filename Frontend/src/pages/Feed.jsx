import axios from 'axios'
import { useState,useEffect } from "react";

export function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
     .then((res) => {
       setPosts(res.data.post);
     })
  },[])

  return (
     
    <section className="feed-section">
        {
          posts.length>0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No Posts Available</h1>
        )
        }
    </section>
  );
}