import React from "react"
import { Typography } from "@mui/material";

import WelcomePageIcon from "../../icons/WelcomePageIcon";

import "./WelcomePage.scss"

const WelcomePage = () => {
    return (
        <div className="WelcomePage">
            <WelcomePageIcon />
            <Typography
                sx={{
                    fontSize: "32px",
                    marginTop: "20px"
                }}
            >
                WhatsApp Web</Typography>
            <Typography>
                Send and receive messages without keeping your phone online.
                <br/>
                Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
            </Typography>
        </div>
    )
}

export default WelcomePage;