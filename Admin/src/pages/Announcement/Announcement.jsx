import React from 'react'
import './announcement.css'
import { DeleteOutline } from '@material-ui/icons'
const Announcement = () => {
  return (
    <div className='announcement'>
        <span className="announcement-header">Announcements</span>

        <div className="announcement-card">
            <span className="announcement-text">Payout</span>
            <span className="announcement-time">2:04:10 PM</span>
            <DeleteOutline  className='delete'/>
        </div>

        <button className="announcement-add">
            Add Announcement
        </button>

        <div className="announcement-input">
            <input type="text" placeholder='Enter title' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter description'></textarea>
            <button>Submit</button>
        </div>

    </div>
  )
}

export default Announcement