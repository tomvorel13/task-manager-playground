import React, { Component } from "react";
import uuid from "uuid";
import moment from "moment";

class Form extends Component {
  state = {
    id: uuid(),
    text: "",
    completed: false,
    date: null
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
    newTask.date = moment().format("Do MMM YYYY, H:mm:ss");

    if (newTask.text !== "") {
      addTaskHandler(newTask);

      this.setState({
        id: uuid(),
        text: "",
        completed: false,
        date: null
      });
    } else {
      // Form validation
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form className="mb-5" onSubmit={this.onSubmitHandler}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                minLength="2"
                onChange={this.onChangeHandler}
                value={this.state.text}
              />
              <div className="input-group-append">
                <input
                  className="btn btn-outline-secondary"
                  type="submit"
                  value="Add"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
