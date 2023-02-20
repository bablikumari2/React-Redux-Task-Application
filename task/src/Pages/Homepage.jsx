import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo, editTodo } from "../Redux/action";
import { Link } from "react-router-dom";
const Homepage = () => {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    try {
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`)
        .then((d) => d.json())
        .then((data) => {
          dispatch(getTodo(data));
        });
    } catch (err) {
      console.log(err);
    }
  };
  const editTodos = (id, status) => {
    let toggleStatus;
    if (status) {
      toggleStatus = false;
    } else {
      toggleStatus = true;
    }
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: toggleStatus }),
      headers: { "Content-Type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(editTodo(res));
        getTodos();
        alert("Task updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTodos = (id) => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`, {
      method: "Delete",
    });
    alert("Task deleted successfully !!");
    getTodos();
  };

  return (
    <div>
      {/* Map through the task lists here using the TaskItems component */}
      {todos.map((e, i) => {
          return (
            <div className="todoDiv" key={i}>
              <Link className="Link" to={`/todo/${e.id}`}>
                <p className="task"> {e.title} </p>
              </Link>

              <div className="btnDiv">
                <button
                  onClick={() => {
                    editTodos(e.id, e.status);
                  }}
                >
                 
                  {e.status === false ? "False" : "True"}
                </button>
                <Link className="Link" to={`/edit/${e.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => {
                    deleteTodos(e.id);
                  }}
                >
                 
                  Delete
                </button>
              </div>
              
            </div>
          );
        })}

    </div>
  );
};

export default Homepage;
