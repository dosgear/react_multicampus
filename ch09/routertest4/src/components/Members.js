import React, { Component } from "react";

class Members extends Component {
  goHome = () => {
    if (window.confirm("레알 이동?")) {
      this.props.history.push("/");
    }
  };

  render() {
    const { members } = this.props;
    let imgstyle = { width: 90, height: 80 };
    let list = members.map(member => {
      return (
        <div className="col-xs-4" key={member.name}>
          <img src={member.photo} className="img-thumbnail" alt={member.name} style={imgstyle} />
          <br />
          <h6>{member.name}</h6>
          <br />
          <br />
        </div>
      );
    });

    return (
      <div>
        <h2>Members</h2>
        <div className="container">
          <div className="row">{list}</div>
          <button className="btn btn-primary" onClick={this.goHome}>
            GO HOME
          </button>
        </div>
      </div>
    );
  }
}

export default Members;
