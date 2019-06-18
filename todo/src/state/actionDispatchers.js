import { v4 } from "uuid";

import types from "./actionTypes";

export const createTodo = value => ({
  type: types.ADD_TODO,
  payload: {
    id: v4(),
    value,
    completed: false
  }
});

export const toggleCompleted = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id
});
