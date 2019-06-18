import React from "react";
import { func, arrayOf, shape, string, bool } from "prop-types";
import { connect } from "react-redux";

import { toggleCompleted } from "../state/actionDispatchers";

function Todos({ todos, toggleCompleted }) {
  if (!todos.length) return <p>todo is empty. Add one</p>;

  const todoList = todos.map(todo => (
    <p onClick={() => toggleCompleted(todo.id)} key={todo.id}>
      {todo.text}
    </p>
  ));

  return <div>{todoList}</div>;
}

Todos.propTypes = {
  todos: arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired,
      completed: bool.isRequired
    })
  ),
  toggleCompleted: func.isRequired
};

Todos.defaultProps = {
  todos: []
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(Todos);
