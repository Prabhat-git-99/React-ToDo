import React, { Component } from "react";
import uuid from "uuid/v4";
//import * as uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle submit");
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
              handleChange={this.state.handleChange}
              handleSubmit={this.state.handleSubmit}
              editItem={this.state.editItem}
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
