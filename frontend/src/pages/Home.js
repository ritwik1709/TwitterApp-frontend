import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import Widgets from './Widgets/Widgets'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase.init'
import { signOut } from 'firebase/auth';

const Home = () => {
  const user = useAuthState(auth);
  const handleLogout =()=>{
    signOut(auth);
  }
  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user}/>
      <Outlet/>
      <Widgets/>
    </div>
  )
}

export default Home