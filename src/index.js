import React, { Component } from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

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

    return (
      <>
        <Navbar />
        <div className="container">
          <Form addTaskHandler={this.addTaskHandler} />
          <TaskList tasks={tasks} />
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
