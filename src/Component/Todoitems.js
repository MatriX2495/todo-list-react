import React, { Component } from "react";

export default class Todoitems extends Component {
  render() {
    const { title, deleteSingle, handleEdit } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        {title}
        <div>
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="text-danger ml-2" onClick={deleteSingle}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
