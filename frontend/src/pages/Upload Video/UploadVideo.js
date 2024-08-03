// import { Avatar, Button } from '@mui/material';
// import React, { useState } from 'react';
// import UploadIcon from '@mui/icons-material/Upload';
// import './UploadVideo.css'
// import axios from 'axios';
// import useLoggedInUser from '../../hooks/useLoggedInUser';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase.init';

// const TweetBox = () => {
//     const [post, setPost] = useState('');
//     const [videoURL, setVideoURL] = useState('');
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [loggedInUser] = useLoggedInUser();
//     const [isLoading, setIsLoading] = useState();

//     const [user] = useAuthState(auth)
//     const email = user?.email;

//     const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

//     const handleUploadVideo = (e) => {
//         setIsLoading(true);
//         const video = e.target.files[0];

//         const formData = new FormData();
//         formData.set('video', video)

//         axios.post('440419899552-p9rj0dovjq8lrrfh9tbt2hqp27q4f4r8.apps.googleusercontent.com/key?=AIzaSyBy9KyJEz6W-xKgBZ0HM61tsNvsnwoBLFQ', formData)
//             .then(res => {
//                 setVideoURL(res.data.data.display_url)
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error)
//                 setIsLoading(false)
//             })
//     }

//     const handleTweet = (e) => {
//         e.preventDefault();
//         if (user.providerData[0].providerId === 'password') {
//             fetch(`http://localhost:5000/loggedInUser?email=${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setName(data[0]?.name)
//                     setUsername(data[0]?.username)
//                 })
//         } else {
//             setName(user?.displayName)
//             setUsername(email?.split('@')[0])
//         }
//         if (name) {
//             const userPost = {
//                 profilePhoto: userProfilePic,
//                 post: post,
//                 video: videoURL,
//                 username: username,
//                 name: name,
//                 email: email
//             }

//             setPost('')
//             setVideoURL('')

//             fetch(`http://localhost:5000/video`, {
//                 method: "POST",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(userPost)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                 })
//         }
//     }

//     return (
//         <div className="tweetBox">
//             <form onSubmit={handleTweet}>
//                 <div className="tweetBox__input">
//                     <Avatar src={userProfilePic} />
//                     <input
//                         type="text"
//                         placeholder="What's happening?"
//                         className='tweetBox__imageInput'
//                         value={post}
//                         onChange={(e) => setPost(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="imageIcon_tweetButton">
//                     <label htmlFor="video" className='imageIcon'>
//                         {isLoading ? <p>Video is Uploading..</p> : <p>{videoURL ? 'Video Uploaded' : <UploadIcon />}</p>}
//                     </label>
//                     <input
//                         type="file"
//                         id='video'
//                         className='imageInput'
//                         accept="video/*"
//                         onChange={handleUploadVideo}
//                     />
//                     <Button className='tweetBox__tweetButton' type='submit'>Tweet</Button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default TweetBox;
