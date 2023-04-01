import { Avatar, TextField, Typography } from "@mui/material"
import React from "react"

import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

import "./ChatPage.scss"
import baImage from "./ChatPage.scss"

const ChatPage = () => {
    return (
        <div className="ChatPage">
            <div className="ChatPage--header">
                <Avatar />
                <div className="ChatPage--header--userName">
                    <Typography>
                        User Name
                    </Typography>
                </div>
            </div>
            <div className="ChatPage--body">

            </div>
            <div className="ChatPage--footer">
                <div className="ChatPage--footer--items">
                    <TagFacesIcon />
                    <AttachFileIcon />
                    <TextField
                        fullWidth
                        placeholder="Type a massage"
                        sx={{
                            "& fieldset": { border: 'none' },
                            backgroundColor: "white",
                            borderRadius: "5px",
                        }}
                    />
                    <MicIcon />
                </div>
            </div>
        </div>
    )
}

export default ChatPage;