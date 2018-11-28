import React, { Component } from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

import "./styles.css";

class App extends Component {
  state = {
    tasks: [
      {
        text: "Go to the gym",
        completed: false
      },
      {
        text: "Play football",
        completed: false
      }
    ]
  };

  addTaskHandler = newTask => {
    const { tasks } = this.state;
    const newTaskArr = [...tasks, newTask];

    this.setState({
      tasks: newTaskArr
    });
  };

  crossTaskHandler = filteredTask => {
    const { tasks } = this.state;

    const filteredArr = tasks.filter(task => task.text === filteredTask.text);
    const toggleCrossTask = filteredArr[0];

    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.text === toggleCrossTask.text
          ? { ...task, completed: !task.completed }
          : task
      )
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <Navbar />
        <div className="container">
          <Form addTaskHandler={this.addTaskHandler} />
          <TaskList crossTaskHandler={this.crossTaskHandler} tasks={tasks} />
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
