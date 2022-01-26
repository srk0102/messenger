import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Rofos</h2>
                <p>This is hell</p>
            </div>

        </div>
    )
}

export default SidebarChat
