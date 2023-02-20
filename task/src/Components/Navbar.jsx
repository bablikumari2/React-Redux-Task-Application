import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div data-testid="pending-task-count"></div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div data-testid="completed-task-count"></div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div data-testid="total-tasks-count"></div>
      </div>
      <div style={{ display: "flex" }}>
        <button data-testid="add-task">Add Task</button>
      </div>
    </div>
  );
};
