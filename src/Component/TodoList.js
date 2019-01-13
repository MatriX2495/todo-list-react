import React, { Component } from "react";
import Todoitems from "./Todoitems";

export default class TodoList extends Component {
  render() {
    const { items, clearList, deleteSingle, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo lists</h3>
        {items.map(items => {
          return (
            <Todoitems
              key={items.id}
              title={items.item}
              deleteSingle={() => deleteSingle(items.id)}
              handleEdit={() => handleEdit(items.id)}
            />
          );
        })}
        <button
          className="btn btn-block text-capitalize bg-danger my-3"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
