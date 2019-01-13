import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add an item"
                value={item}
                onChange={handleChange}
              />
            </div>
            {editItem ? (
              <button className="btn btn-block bg-success mt-3 text-capitalize">
                edit item
              </button>
            ) : (
              <button className="btn btn-block bg-primary mt-3 text-capitalize">
                add item
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}
