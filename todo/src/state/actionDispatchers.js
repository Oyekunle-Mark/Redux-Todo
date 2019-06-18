import { v4 } from "uuid";

import types from "./actionTypes";

export const createTodo = text => ({
  type: types.ADD_TODO,
  payload: {
    id: v4(),
    text,
    completed: false
  }
});

export const toggleCompleted = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id
});
