import React from "react";

const TaskItems = ({ id }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
      data-testid={`task-item-${id}`}
    >
      <div
        data-testid="task-title"
        style={{ fontSize: "24px", fontWeight: "600" }}
      ></div>
      <div data-testid="task-status" style={{ fontSize: "18px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button data-testid="edit-task">Edit</button>
        <button data-testid="delete-task">Delete</button>
      </div>
    </div>
  );
};

export default TaskItems;
