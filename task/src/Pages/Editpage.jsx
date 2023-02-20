import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getTodo, editTodo } from "../Redux/action";

const Editpage = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  
  const [stat, setStat] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const getData = () => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`)
      .then((d) => d.json())
      .then((res) => {
       
        console.log(res);
      });
  };

  const editTodos = (id, text, stat) => {
    if (text.length === 0 && stat.length === 0) {
      alert("Nothing to Update !!");
    } else {
      if (text.length === 0) {
        text = data.title;
      }
      
      let toggleStatus;

      if (stat.length === 0) {
        toggleStatus = data.status;
      } else {
        let stat1 = stat.toLowerCase();
        if (stat1 === "done") {
          toggleStatus = true;
        } else if (stat1 === "not done") {
          toggleStatus = false;
        } else {
          alert("Status either be done or not done !!");
        }
      }

      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: text,
          status: toggleStatus,
          
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((d) => d.json())
        .then((res) => {
          dispatch(editTodo(res));
          getData();
          setText("");
          
          setStat("");
          alert("Task updated successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form>
        <input data-testid="edit-task-title"   type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}/> 
        <select data-testid="edit-select-option" type="text"
          value={stat}
          onChange={(e) => setStat(e.target.value)}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button data-testid="edit-update"   id="submitBtn"
          onClick={() => {
            editTodos(id, text, stat);
          }}>Update</button>
      </form>
    </div>
  );
};

export default Editpage;
