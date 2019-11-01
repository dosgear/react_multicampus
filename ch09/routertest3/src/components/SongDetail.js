import React, { Component } from "react";

class SongDetail extends Component {
  render() {
    let songs = this.props.songs;
    let songid = this.props.match.params.songid;
    let songone = songs.find(item => item.id === parseInt(songid));

    return (
      <div>
        <h2>{songone.title}</h2>
        musician: {songone.musician}
        <br />
        youtube_link: <a href={`https://youtu.be/${songone.youtube_link}`}>[링크]</a>
      </div>
    );
  }
}

export default SongDetail;
