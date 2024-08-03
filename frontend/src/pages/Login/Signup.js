import React, { useState } from 'react'
import twitterImage from '../../assets/images/twitter.jpeg'
import TwitterIcon from '@mui/icons-material/Twitter';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase.init'
import GoogleButton from 'react-google-button';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [username,setusername]=useState("");
  //  const [name,setname]=useState("");
   
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if(user || googleUser){
    navigate('/')
    console.log(user);
    console.log(googleUser);
  }
  if(error)
    console.log(error.message);
  if(loading)
    console.log("Loading...");

  const handleSubmit =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(email,password)

    const user ={
      username:username,
      // name:name,
      email:email,
    }
    axios.post(`https://twitterapp-backend-n4d9.onrender.com/register`,user);

    setemail('')
    setpassword('')
    setusername('')
  }
const handleGoogleSignIn=()=>{
  signInWithGoogle();
}

  return (
    <div className='login-container'>
      <div className="image-container">
        <img className='image' src={twitterImage} alt="twitter image" srcset="" />
      </div>
      <div className="form-container">
        <div className="form-box">
        <TwitterIcon className='Twittericon' style={{color:'skyblue'}}/>
        <h2 className='heading'>Happening now</h2>
        <h3 className='heading1'>Join Twitter today</h3>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='username'
            className='username'
            onChange={e=>setusername(e.target.value)}
            />
            {/* <input 
           type='text'
            className='name'
             placeholder='Enter full Name'
            onChange={e=>setname(e.target.value)}
            />*/}
          <input 
           type='email' 
           placeholder='Email'
           className='email'
           onChange={(e)=>setemail(e.target.value)}
          />
          <input 
          type='password'
          className='password'
          placeholder='Password'
          onChange={(e)=>setpassword(e.target.value)}
          />
          <div className='btn-login'>
            <button type='submit' className='btn'>Signup</button>
          </div>
        </form>
        <hr/>
        <div className='google-button'>
          <GoogleButton
          className='g-btn'
          type='light'
          onClick={handleGoogleSignIn}
          />
        </div>
        <div>
          Already have an account?
          <Link 
          to={'/login'}
          style={{
            textDecoration: 'none',
            color: 'blue',
            fontWeight: '600',
            marginLeft:'5px'
          }}
          >
            Login
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup