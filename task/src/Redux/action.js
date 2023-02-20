//get tasks

//add task

//update task

//delete task
import {
    ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, 
    DELETE_TASK_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, UPDATE_TASK_FAILURE, 
    UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS
  } from "./actionTypes"

export const addTodo = (data) => ({
    type: ADD_TASK_SUCCESS,
    payload: data,
});

export const editTodo = (id) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: id,
});

export const getTodo = (data) => ({
    type: GET_TASKS_SUCCESS,
    payload: data,
});

export const deleteTodo = (id) => ({
    type: DELETE_TASK_SUCCESS,
    payload: id,
});