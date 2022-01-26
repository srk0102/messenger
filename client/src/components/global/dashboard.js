import React from 'react'

import "./dashboard.css"

//Importing reusable components
import Sidebar from '../global/sidebar/Sidebar'
import Chat from '../global/chat/Chat'

export default function Dashboard() {
  return (
    <>
    <div className="app">
      <div className="app__body">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
    </>
  )
}
