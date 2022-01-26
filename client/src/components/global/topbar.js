import React from 'react'

import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';

export default function Topbar(props) {
  const{user, lastseen} = props
  return (
    <>
      <div className="col-12 border-bottom border-3">
        <div className="d-flex flex-row justify-content-around align-items-center p-1">
          <div className="d-flex flex-row col-3 p-1">
            <Avatar />
          </div>
          <div className="d-flex flex-column justify-content-center p-1 col-7">
            <h5 className="fw-bold" style={{ fontSize: "13px" }}>{user?user:"User Name"}</h5>
            <p className="text-sucess" style={{ fontSize: "8px" }}>{lastseen?lastseen:"now"}</p>
          </div>
          <div className="d-flex flex-row align-items-center col-2 p-1">
            <SearchOutlined />
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </>
  )
}
