import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactItem extends Component {
  deleteContactItem = () => {
    this.props.deleteContact(this.props.item.no);
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="col-xs-3">
          <img
            src={this.props.item.photo}
            alt={this.props.item.name}
            className="img-responsive img-thumbnail photoWidth"
          />
        </div>
        <div className="col-xs-8">
          <span className="name">{this.props.item.name}</span>
          <br />
          <span className="glyphicon glyphicon-hand-right"></span> <span>Id : {this.props.item.no}</span>
          <br />
          <span className="glyphicon glyphicon-earphone"></span> <span>{this.props.item.tel}</span>
          <br />
          <span className="glyphicon glyphicon-map-marker"></span> <span>{this.props.item.address}</span>
          <br />
        </div>
        <div className="col-xs-1">
          <div>
            <button className="btn btn-primary" onClick={this.deleteContactItem}>
              X
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
      </li>
    );
  }
}

ContactItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactItem;
