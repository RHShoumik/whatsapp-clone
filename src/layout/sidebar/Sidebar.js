import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import "./Sidebar.scss"
import { IconButton, Input, InputAdornment, TextField } from "@mui/material";
import SidebarChat from "../../chats/SidebarChat";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar--header">
        <div className="Sidebar--header--left">
          <AccountCircleIcon className="icon" />
        </div>
        <div className="Sidebar--header--right">
          <IconButton>
            <GroupsIcon className="Sidebar--header--right--items icon" />
          </IconButton>
          <IconButton>
            <DonutLargeIcon className="Sidebar--header--right--items icon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="Sidebar--header--right--items icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="Sidebar--header--right--items icon" />
          </IconButton>
        </div>
      </div>
      <div className="Sidebar--search">
        <div className="Sidebar--search--search-box">
          <SearchIcon alignItems="center" />
          <TextField
            fullWidth
            placeholder="Search or start new chat"
            sx={{"& fieldset": { border: 'none' } }}
          />
        </div>
        <div className="Sidebar--search--icon"></div>
      </div>
      <div className="Sidebar--chats">
        <SidebarChat />
      </div>
    </div>
  )
}
export default Sidebar;