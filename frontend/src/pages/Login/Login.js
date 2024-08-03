// import React, { useState } from 'react'
// import twitterImage from '../../assets/images/twitter.jpeg'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import {useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth'
// import {auth} from '../../firebase.init'
// import GoogleButton from 'react-google-button';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css'

// const Login = () => {
//   const [email,setemail]=useState("");
//   const [password,setpassword]=useState("");
//   const navigate = useNavigate();
//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useSignInWithEmailAndPassword(auth);
//   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

//   if(user ||googleUser){
//     navigate('/')
//     console.log(user);
//     console.log(googleUser);
//   }
//   if(error)
//     console.log(error.message);
//   if(loading)
//     console.log("Loading...");

//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     signInWithEmailAndPassword(email,password)
//   }
//   const handleGoogleSignIn=()=>{
//     signInWithGoogle();
//   }
//   return (
//     <div className='login-container'>
//       <div className="image-container">
//         <img className='image' src={twitterImage} alt="twitter image" srcset="" />
//       </div>
//       <div className="form-container">
//         <div className="form-box">
//         <TwitterIcon style={{color:'skyblue'}}/>
//         <h2 className='heading'>Happening now</h2>
//         <h3 className='heading1'>Join Twitter today</h3>
//         <form onSubmit={handleSubmit}>
//           <input 
//            type='email' 
//            placeholder='Email'
//            className='email'
//            onChange={(e)=>setemail(e.target.value)}
//           />
//           <input 
//           type='password'
//           className='password'
//           placeholder='Password'
//           onChange={(e)=>setpassword(e.target.value)}
//           />
//           <div className='btn-login'>
//             <button type='submit' className='btn'>Login</button>
//           </div>
//         </form>
//         </div>
//         <hr/>
//         <div className='google-button'>
//           <GoogleButton
//           className='g-btn'
//           type='light'
//           onClick={handleGoogleSignIn}
//           />
//         </div>
//         <div>
//           Don't have an account?
//           <Link 
//           to={'/signup'}
//           style={{
//             textDecoration: 'none',
//             color: 'blue',
//             fontWeight: '600',
//             marginLeft:'5px'
//           }}
//           >
//             Signup
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useState, useEffect } from 'react';
import twitterImage from '../../assets/images/twitter.jpeg';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const logLoginInfo = async (userInfo) => {
    try {
      await axios.post('https://twitterapp-backend-n4d9.onrender.com/log-login', userInfo);
    } catch (err) {
      console.error('Failed to log user info:', err);
    }
  };

  useEffect(() => {
    if (user || googleUser) {
      const userInfo = user || googleUser;
      const userLoginInfo = {
        email: userInfo.user.email,
        uid: userInfo.user.uid
      };
      logLoginInfo(userLoginInfo);
      navigate('/');
    }
  }, [user, googleUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img className="image" src={twitterImage} alt="twitter" />
      </div>
      <div className="form-container">
        <div className="form-box">
          <TwitterIcon style={{ color: 'skyblue' }} />
          <h2 className="heading">Happening now</h2>
          <h3 className="heading1">Join Twitter today</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="btn">Login</button>
            </div>
          </form>
        </div>
        <hr />
        <div className="google-button">
          <GoogleButton className="g-btn" type="light" onClick={handleGoogleSignIn} />
        </div>
        <div>
          Don't have an account?
          <Link
            to="/signup"
            style={{
              textDecoration: 'none',
              color: 'blue',
              fontWeight: '600',
              marginLeft: '5px'
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
