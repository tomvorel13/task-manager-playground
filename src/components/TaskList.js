import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, crossTaskHandler }) => {
  let taskList = tasks.map((task, index) => (
    <Task
      crossTaskHandler={crossTaskHandler}
      task={task}
      index={index}
      key={index}
    />
  ));

  return <ul className="list-group">{taskList}</ul>;
};

export default TaskList;
