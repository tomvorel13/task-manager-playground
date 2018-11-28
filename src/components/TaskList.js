import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, crossTaskHandler }) => {
  let taskList = tasks.map(task => (
    <Task crossTaskHandler={crossTaskHandler} task={task} key={task.id} />
  ));

  return <ul className="list-group">{taskList}</ul>;
};

export default TaskList;
