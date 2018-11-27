import React, { Component } from "react";

class Form extends Component {
  state = {
    text: "",
    completed: false
  };

  onChangeHandler = e => {
    const text = e.target.value;

    this.setState({
      text
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { addTaskHandler } = this.props;

    const newTask = this.state;

    addTaskHandler(newTask);

    this.setState({
      text: "",
      completed: false
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.text}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Form;
