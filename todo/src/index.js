import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducer from "./state/todosReducer";
import { loadState, saveState } from "./state/localStorage";

const todoReducer = combineReducers({
  todos: reducer
});

const initialTodos = loadState();

const store = createStore(
  todoReducer,
  initialTodos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
