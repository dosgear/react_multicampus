import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import SongDetail from "./SongDetail";

class SongList extends Component {
  render() {
    let songs = this.props.songs;
    let list = songs.map(item => {
      return (
        <li key={item.id}>
          <Link className="btn btn-success menu" to={`/songs/${item.id}`}>
            {item.title}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h2>SongList</h2>
        <ul>{list}</ul>
        <Route path={`/songs/:songid`} render={props2 => <SongDetail {...props2} songs={this.props.songs} />} />
      </div>
    );
  }
}

export default SongList;
