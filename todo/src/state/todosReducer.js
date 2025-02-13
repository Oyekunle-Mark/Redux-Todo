import types from "./actionTypes";

export default function todosReducer(slice = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...slice, action.payload];
    case types.TOGGLE_COMPLETED:
      return slice.map(todo => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };

        return todo;
      });
    case types.DELETE_TODO:
      return slice.filter(todo => todo.id !== action.payload);
    default:
      return slice;
  }
}
