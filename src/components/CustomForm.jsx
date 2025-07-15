import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomForm = ({addTask}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    })
    setTask("");
  };
  const [task, setTask] = useState("");

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <p>{task}</p>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter task..."
        />
        <label htmlFor="task" className="label">
          Enter task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon className="h-6 w-6 text-blue-600" />
      </button>
    </form>
  );
};

export default CustomForm;
