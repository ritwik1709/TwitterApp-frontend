import React, { useState } from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreIcon from '@mui/icons-material/More';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Avatar, Button, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import CustomLink from './CustomLink';
import useLoggedInUser from '../../hooks/useLoggedInUser';

const Sidebar = ({ handleLogout, user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loggedInUser] = useLoggedInUser();

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const result = user[0]?.email.split('@')[0];

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitterIcon' />

            <CustomLink to={'/home/feed'}><SidebarOption active Icon={HomeIcon} text='Home' /></CustomLink>
            <CustomLink to={'/home/explore'}><SidebarOption active Icon={SearchIcon} text='Explore' /></CustomLink>
            <CustomLink to={'/home/notifications'}><SidebarOption active Icon={NotificationsIcon} text='Notifications' /></CustomLink>
            <CustomLink to={'/home/messages'}><SidebarOption active Icon={MailOutlineIcon} text='Messages' /></CustomLink>
            <CustomLink to={'/home/bookmarks'}><SidebarOption active Icon={BookmarkBorderIcon} text='Bookmarks' /></CustomLink>
            <CustomLink to={'/home/lists'}><SidebarOption active Icon={ListAltIcon} text='Lists' /></CustomLink>
            <CustomLink to={'/home/profile'}><SidebarOption active Icon={PermIdentityIcon} text='Profile' /></CustomLink>
            <CustomLink to={'/home/more'}><SidebarOption active Icon={MoreIcon} text='More' /></CustomLink>
            <CustomLink to={'/home/premium'}><SidebarOption active Icon={WorkspacePremiumIcon} text='Premium' /></CustomLink>
            {/* <CustomLink to={'/home/upload-video'}><SidebarOption active Icon={UploadIcon} text='Upload_video'/></CustomLink> */}
            <CustomLink to={'/home/login-info'}><SidebarOption active Icon={PersonSearchIcon} text='Login Info'/></CustomLink>

            <Button variant='outlined' className='sidebar_tweet'>Tweet</Button>
            <div className="Profile_info">
                <Avatar src={userProfilePic} />
                <div className="user_info">
                    <h4>{loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName} </h4>

                    <h5>{result}</h5>
                </div>
                <IconButton
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className='Profile info1'>
                        <Avatar src={userProfilePic} />
                        <div className="user_info subUser_info">
                            <div>
                                <h4>{loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName} </h4>

                                <h5>{result}</h5>
                            </div>
                            <ListItemIcon className='done_icon'><DoneIcon /></ListItemIcon>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}> Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout}> Logout </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Sidebar