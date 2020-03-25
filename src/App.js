import React, { Component } from "react";
import uuid from "uuid/v4";
//import * as uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
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
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    console.log("Clear list");
  };
  editItem = () => {
    console.log("handle edit");
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.state.clearList}
              handleDelete={this.state.handleDelete}
              handleEdit={this.state.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
