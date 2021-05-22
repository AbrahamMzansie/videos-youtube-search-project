import axios from "axios";
const KEY = "AIzaSyDo6dfV3zr9nfxomT3Y3MF9EGPk3mMJPPw";

 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params : {
      part : "snippet",
      type: 'video',
      maxResults : 10,
      key : KEY,
  }
});