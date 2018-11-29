import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import moment from "moment";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import FilterRadios from "./components/FilterRadios";
import TaskList from "./components/TaskList";

import "./styles.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        text: "Go to the gym",
        completed: false,
        date: moment().format("Do MMM YYYY, H:mm:ss")
      },
      {
        id: uuid(),
        text: "Play football",
        completed: false,
        date: moment().format("Do MMM YYYY, H:mm:ss")
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
        task.id === toggleCrossTask.id
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
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
              <Form addTaskHandler={this.addTaskHandler} />
              <FilterRadios />
              <TaskList
                crossTaskHandler={this.crossTaskHandler}
                tasks={tasks}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
