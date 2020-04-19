import React, { useState } from 'react';
import Axios from 'axios';

function Reddit() {
  React.useEffect(() => {
    Axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPosts = res.data.data.children
        .map(obj => obj.data);
      setPosts(newPosts);
    })
   }, [])
  const [posts, setPosts] = useState([])
  return (
    <div>
      <h2>Reddit posts</h2>
      <ul>
        {posts.map(post => {
          return <li key={post.id}><a href={post.url}>{post.title}</a>, {post.score}, {post.author_fullname}</li>
        })}
      </ul>
    </div>
  )
}

export default Reddit;