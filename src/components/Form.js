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

    if (newTask.text !== "") {
      addTaskHandler(newTask);

      this.setState({
        text: "",
        completed: false
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
