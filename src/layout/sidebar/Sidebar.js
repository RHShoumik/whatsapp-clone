import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import "./Sidebar.scss"
import { Input, InputAdornment, TextField } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar--header">
        <div className="Sidebar--header--left">
          <AccountCircleIcon className="icon" />
        </div>
        <div className="Sidebar--header--right">
          <GroupsIcon className="Sidebar--header--right--items icon"/>
          <DonutLargeIcon className="Sidebar--header--right--items icon" />
          <ChatIcon className="Sidebar--header--right--items icon" />
          <MoreVertIcon className="Sidebar--header--right--items icon" />  
        </div>
      </div>
      <div className="Sidebar--search">
        <div className="Sidebar--search--search-box">
          <TextField
            sx={{width:"18vw", height:"48px" }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
        </div>
        <div className="Sidebar--search--icon"></div>

      </div> 
      <div className="Sidebar--chats">

      </div>
    </div>
  )
}
export default Sidebar;