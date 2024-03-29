import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import About from "./About";
import SongList from "./SongList";
import Members from "./Members";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { name: "Maggie Adams", photo: "photos/Mag.png" },
        { name: "Sammie Purcell", photo: "photos/Sam.png" },
        { name: "Tim Purcell", photo: "photos/Tim.png" },
        { name: "Scott King", photo: "photos/King.png" },
        { name: "Johnny Pike", photo: "photos/JPike.jpg" },
        { name: "Toby Ruckert", photo: "photos/Toby.jpg" }
      ],
      songs: [
        {
          id: 0,
          title: "(궁서체) JOB것들을 위해... 이번만큼은 진지합니다.... ㅣ워크맨 X 사람인",
          musician: "워크맨-Workman",
          youtube_link: "byjgWjqoCvw"
        },
        { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
        { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
        { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
        { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
        { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
        { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
        { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
        { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" }
      ]
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" render={props => <About {...props} title="여우와 늙다리들" />} />
          <Route path="/members" render={props => <Members {...props} members={this.state.members} />} />
          <Route path="/songs" render={props => <SongList {...props} songs={this.state.songs} />} />
          {/*<Route path="/songs/:songid" render={props => <SongDetail {...props} songs={this.state.songs} />} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
