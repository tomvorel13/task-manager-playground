import React, { Component } from "react";

class Task extends Component {
  onClickHandler = task => {
    const { crossTaskHandler } = this.props;

    crossTaskHandler(task);
  };

  render() {
    const { task } = this.props;
    return (
      <li
        onClick={() => this.onClickHandler(task)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          fontStyle: task.completed ? "italic" : "normal"
        }}
        className="list-group-item list-group-item-action"
      >
        {task.text}
        <span
          style={{ fontSize: "13px" }}
          className="float-right font-weight-light"
        >
          {task.date}
        </span>
      </li>
    );
  }
}

export default Task;
