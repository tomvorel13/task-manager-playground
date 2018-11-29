import React, { Component } from "react";

class FilterRadios extends Component {
  render() {
    return (
      <div className="my-3 text-center">
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="all"
            name="filter"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="all">
            All
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="done"
            name="filter"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="done">
            Done
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="pending"
            name="filter"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="pending">
            Pending
          </label>
        </div>
      </div>
    );
  }
}

export default FilterRadios;
