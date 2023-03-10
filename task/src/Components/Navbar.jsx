import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const Navbar = () => {
  const todos = useSelector((state) => state.tasks);
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
        <div data-testid="total-tasks-count">{todos.length}</div>
      </div>
      <Link to={"/add"}>
      <div style={{ display: "flex" }}>
        
        <button data-testid="add-task">Add Task</button>
        
      </div>
      </Link>
    </div>
  );
};
