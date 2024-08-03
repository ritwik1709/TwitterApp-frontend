import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import axios from 'axios';
import Post from './Post/Post';

const Feed = () => {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch(`https://twitterapp-backend-n4d9.onrender.com/post`)
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })    
  },[posts])  //dependency is post -everytime when new post came ,page refreshes

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {
        posts.map((p)=>{
          return (
            <Post key={p._id} p={p}/>
          )
        })
      }
    </div>

  )
}

export default Feed