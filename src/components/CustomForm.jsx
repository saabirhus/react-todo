import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const handleFormSubmit = (e) => {
  e.preventDefault();
  confirm.log(e);
};

const CustomForm = () => {
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input" /*value={task} onInput={(e) => setTask(e.target.value)}*/
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
        <BeakerIcon className="h-6 w-6 text-blue-600" />
      </button>
    </form>
  );
};

export default CustomForm;
