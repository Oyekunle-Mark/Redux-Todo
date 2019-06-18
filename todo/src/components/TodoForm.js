import React, { createRef } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";

import { createTodo } from "../state/actionDispatchers";

function TodoForm({ createTodo }) {
  const todoInput = createRef();

  const submitTodo = e => {
    e.preventDefault();
    createTodo(todoInput.current.value);
  };

  return (
    <form onSubmit={submitTodo}>
      <input type="text" placeholder="...todo" ref={todoInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

TodoForm.propTypes = {
  createTodo: func.isRequired
};

export default connect(
  null,
  { createTodo }
)(TodoForm);
