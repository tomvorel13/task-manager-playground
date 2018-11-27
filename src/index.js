import React, { Component } from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";

import "./styles.css";

class App extends Component {
  state = {
    tasks: []
  };

  addTaskHandler = newTask => {
    const { tasks } = this.state;
    const newTaskArr = [...tasks, newTask];

    this.setState({
      tasks: newTaskArr
    });
  };

  render() {
    const { tasks } = this.state;
    const taskList = tasks.map(task => <li key={task.text}>{task.text}</li>);

    return (
      <div className="App">
        <h1>Task Manager</h1>
        <Form addTaskHandler={this.addTaskHandler} />
        {taskList}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
