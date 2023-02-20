import React from "react";

const AddTask = () => {
  return (
    <div>
      <form>
        <input data-testid="add-task-input-box" placeholder="add task here" />
        <button data-testid="add-task-button">Add task</button>
      </form>
    </div>
  );
};

export default AddTask;
