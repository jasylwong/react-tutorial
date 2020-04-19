import React, { useState } from 'react';
import axios from 'axios';

function Reddit() {
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
        setPosts(newPosts);
      })
  }, []);
  const [posts, setPosts] = useState([])
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  );
}

export default Reddit;