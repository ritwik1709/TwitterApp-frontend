import React from 'react'
import '../Page.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init'
import MainPage from './MainPage/MainPage';

const Profile = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='profilePage'>
      <MainPage user={user} />
    </div>
  )
}

export default Profile