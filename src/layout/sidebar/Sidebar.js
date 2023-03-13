import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar--header">
        <div className="Sidebar--header--left">
          <AccountCircleIcon />
        </div>
        <div className="Sidebar--header--right">
          <GroupsIcon />
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="Sidebar--search">

      </div> 
      <div className="Sidebar--chats">

      </div>
    </div>
  )
}

export default Sidebar;