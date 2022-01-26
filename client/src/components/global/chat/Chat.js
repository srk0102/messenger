import { AttachFile, InsertChart, InsertEmoticon, MoreVert, SearchOffOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import "./Chat.css"

function Chat() {
  const chatMsgs = [{ sender: "+91 9959732632", reciver: "+91 7981154363", msgBody: "hello prends", recived: false }, { sender: "+91 9959732632", reciver: "+91 7981154363", msgBody: "hi ra", recived: true }]
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>


        </div>
      </div>
      <div className="chat__body">
        {chatMsgs.map((chat) => (
          chat.recived === false ? (
            <p className="chat__message">
              <span className="chat__name">{chat.sender}</span>
              {chat.msgBody}
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
            </p>
          ) : (
            <p className=" chat__message chat__reciver">
              <span className="chat__name">{chat.reciver}</span>
              {chat.msgBody}
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
            </p>
          )
        ))}
      </div>
      <div className="chat__fotter">
        <InsertEmoticon />
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input placeholder="Type a message"
            type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />

      </div>
    </div>
  )
}

export default Chat
