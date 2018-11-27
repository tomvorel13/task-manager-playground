import React from "react";

const TaskList = ({ tasks }) => {
  const taskList = tasks.map(task => <li key={task.text}>{task.text}</li>);
  return <ul>{taskList}</ul>;
};

export default TaskList;
