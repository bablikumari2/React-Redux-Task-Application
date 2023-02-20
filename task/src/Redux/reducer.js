
import {
  ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, 
  DELETE_TASK_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, UPDATE_TASK_FAILURE, 
  UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS
} from "./actionTypes"
// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  //write the logic to handle, get task, update task, add task, and delete task
  switch(type) {
    case ADD_TASK_SUCCESS : 
    return {
        ...state,
        tasks:[...state.tasks,payload],
    };
    case GET_TASKS_SUCCESS: 
        return {
            ...state,
             tasks:payload,
        };
        case UPDATE_TASK_SUCCESS: 
        return {
            ...state,
            tasks:[...state.tasks],
        };
        case DELETE_TASK_SUCCESS: 
        return {
            ...state,
             tasks:payload,
        };
  default: return state;
};
}

export { reducer };
