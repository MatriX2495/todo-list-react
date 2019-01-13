import React, { Component } from "react";
import Todoinput from "./Component/Todoinput";
import TodoList from "./Component/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    id: uuid(),
    items: [],
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item
    };

    const updatedItem = [...this.state.items, newItem];

    this.setState({
      id: uuid(),
      items: updatedItem,
      item: "",
      editItem: false
    });
  };

  handleClearList = () => {
    this.setState({
      items: []
    });
  };

  handleDeleteSingle = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      id: id,
      editItem: true
    });
  };
  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-capitalize text-center">todo input</h1>
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.handleClearList}
              deleteSingle={this.handleDeleteSingle}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
