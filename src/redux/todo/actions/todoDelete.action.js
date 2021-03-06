import TodoActionTypes from "../todo.types";
import { todoRefresh } from "./todoRefresh.action";

const todoDeleteRequest = (id) => ({
  type: TodoActionTypes.TODO_DELETE_REQUEST,
  payload: id
});

export const todoDelete = (todoId) => {
  return (dispatch) => {
    dispatch(todoDeleteRequest());
    return fetch("http://localhost:3050/tasks/" + encodeURIComponent(todoId), {
      method: "DELETE"
    }).then(() => dispatch(todoRefresh()));
  };
};
