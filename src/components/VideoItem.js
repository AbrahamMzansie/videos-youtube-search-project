import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video , onSelectVideo }) => {
 
  return (
    <div onClick = {()=>onSelectVideo(video)} className="video-item item">
      <img alt = "video image" className="ui image" src={video.snippet.thumbnails.high.url} />
      <div className="content">
       <div className = "header"> {video.snippet.title}</div>
        {video.snippet.channelTitle}
        
      </div>
    </div>
  );
};

export default VideoItem;
