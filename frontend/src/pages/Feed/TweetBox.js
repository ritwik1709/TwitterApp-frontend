import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './TweetBox.css'
import axios from 'axios';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const TweetBox = () => {
    const [post, setPost] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [name,setName] =useState('');
    const [username, setUsername] =useState('');
    const [loggedInUser] = useLoggedInUser();
    const [isLoading,setisLoading] = useState();

    const [user] = useAuthState(auth)
    const email =user?.email;

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    const handleUploadImage =(e)=>{
        setisLoading(true);
        const image  =e.target.files[0];

        const formData = new FormData();
        formData.set('image',image)

        axios.post('https://api.imgbb.com/1/upload?key=ad3f181e19593ca55595943a22c59a7f',formData)
        .then(res=>{
            setImageURL(res.data.data.display_url)
            setisLoading(false);
        })
        .catch((error)=>{
            console.log(error)
            setisLoading(false)
        })  
    }
    const handleTweet = (e) => {
        e.preventDefault();
        if(user.providerData[0].providerId==='password'){
            fetch(`https://twitterapp-backend-n4d9.onrender.com/loggedInUser?email=${email}`)
            .then(res => res.json())
            .then(data=>{
                setName(data[0]?.name)
                setUsername(data[0]?.username)
            })
        }
        else{
            setName(user?.displayName)
            setUsername(email?.split('@')[0])
        }
        if(name){
            const userPost ={
                profilePhoto:userProfilePic,
                post:post,
                photo:imageURL,
                username:username,
                name:name,
                email:email
            }

            setPost('')
            setImageURL('')
            
            fetch(`https://twitterapp-backend-n4d9.onrender.com/post`,{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userPost)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div className="tweetBox">
            <form onSubmit={handleTweet}>
                <div className="tweetBox__input">

                <Avatar src={userProfilePic} />
                    <input
                        type="text"
                        placeholder="What's happening?"
                        className='tweetBox__imageInput'
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        required
                    />
                </div>
                <div className="imageIcon_tweetButton">
                    <label htmlFor="image" className='imageIcon'>
                        
                        {
                            isLoading ? <p>{'Image is Uploading..'} </p> : <p>{imageURL ? 'Image Uploaded':<AddPhotoAlternateIcon />}</p>
                        }
                    </label>
                    <input
                        type="file"
                        id='image'
                        className='imageInput'
                        onChange={handleUploadImage}
                    />
                    <Button className='tweetBox__tweetButton' type='submit'> Tweet </Button>
                </div>
            </form>
        </div>
    )
}
export default TweetBox