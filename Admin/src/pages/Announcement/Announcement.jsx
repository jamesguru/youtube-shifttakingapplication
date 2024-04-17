import React, { useEffect, useState } from "react";
import "./announcement.css";
import { DeleteOutline, Description } from "@material-ui/icons";
import { publicRequest } from "../../requestMethods";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');



  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const res = await publicRequest.get("/announcements");
        setAnnouncements(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAnnouncements();
  }, []);


  const handleAddAnnouncement = async () =>{
    if(title && description){
      try {
        await publicRequest.post("/announcements", {title, description});
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }
  }
  
const handleDelete = async(id) => {
  try {
    await publicRequest.delete(`/announcements/${id}`);
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="announcement">
      <span className="announcement-header">Announcements</span>
      {announcements.map((item, index) => (
        <div className="announcement-card" key={index}>
          <span className="announcement-text">{item.title}</span>
          <span className="announcement-time">2:04:10 PM</span>
          <DeleteOutline className="delete" onClick={handleDelete(item._id)} />
        </div>
      ))}
      <button className="announcement-add">Add Announcement</button>
      <div className="announcement-input">
        <input type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddAnnouncement}>Submit</button>
      </div>
    </div>
  );
};

export default Announcement;
