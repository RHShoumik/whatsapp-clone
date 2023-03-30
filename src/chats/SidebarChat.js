import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";

import "./SidebarChat.scss"

const SidebarChat = () => {
  return (
    <Stack className="SidebarChat" direction="row" >
      <Avatar className="SidebarChat--avatar" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhhmRJo_profile-icon-png-image-free-download-searchpng-employee%2F&psig=AOvVaw1IJfUBv5D0kq_7YggotfdV&ust=1679943425502000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC44J2j-v0CFQAAAAAdAAAAABAE" />
      <Box className="SidebarChat--content">
        <Box className="SidebarChat--content--username-time" >
          <Typography>User Name</Typography>
          <Typography>time</Typography>
        </Box>
        <Typography className="SidebarChat--content--lastMsg">last massage</Typography>
      </Box>
    </Stack>
  )
}

export default SidebarChat