import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Home from './pages/Home';
import Feed from './pages/Feed/Feed';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Explore from './pages/Explore/Explore';
import Lists from './pages/Lists/Lists';
import Messages from './pages/Messages/Messages';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';
// import UploadVideo from './pages/Upload Video/UploadVideo';
import PremiumPage from './pages/Premium/Premium';
import LoginInfo from './pages/UserInfo/UserInfo';


function App() {
  return (

      <Routes>
        <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
          <Route index element={<Feed />} />
        </Route>
        <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
          <Route path='feed' element={<Feed />} />
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='explore' element={<Explore />} />
          <Route path='lists' element={<Lists />} />
          <Route path='messages' element={<Messages />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='profile' element={<Profile />} />
          <Route path='more' element={<More />} />
          <Route path='premium' element={<PremiumPage />} />
          {/* <Route path='upload-video' element={<UploadVideo />} /> */}
          <Route path='login-info' element={<LoginInfo />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/page-loading' element={<PageLoading />} />
        <Route />
      </Routes>
  );
}

export default App;
