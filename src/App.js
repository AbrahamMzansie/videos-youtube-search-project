import React, { Component } from "react";

import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchTerm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items ,selectedVideo : response.data.items[0] });
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount(){
      this.onSearchTerm("react tutorials")
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTerm={this.onSearchTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
