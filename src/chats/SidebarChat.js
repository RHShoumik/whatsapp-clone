import { Avatar, Stack } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const SidebarChat = () => {
  return (
    <Stack className="SidebarChat" direction="row" >
        <Avatar  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhhmRJo_profile-icon-png-image-free-download-searchpng-employee%2F&psig=AOvVaw1IJfUBv5D0kq_7YggotfdV&ust=1679943425502000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC44J2j-v0CFQAAAAAdAAAAABAE" />
        <Box>
            <h2>Name</h2>
            <h4>last Massage</h4>
        </Box>
        <h4>Time</h4>
    </Stack>
  )
}

export default SidebarChat