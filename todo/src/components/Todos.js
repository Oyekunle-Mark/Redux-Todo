import React from "react";
import { func, arrayOf, shape, string, bool } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { toggleCompleted, deleteTodo } from "../state/actionDispatchers";

const StyledTodo = styled.div`
  background: #fff4f4;
  text-align: center;
  max-width: 550px;
  height: auto;
  padding: 15px;
  margin: auto;
  margin-top: 20px;
  font-size: 18px;
  color: #f072a9;

  p {
    cursor: pointer;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  button {
    width: 100px;
    height: 30px;
    background: #f072a9;
    color: #ffeff6;
    border: 2px solid #eb3b88;
    font-size: 12px;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
  }
`;

function Todos({ todos, toggleCompleted, deleteTodo }) {
  if (!todos.length)
    return (
      <StyledTodo>
        <p>todo is empty. Add one</p>
      </StyledTodo>
    );

  const todoList = todos.map(todo => {
    const style = todo.completed ? "line-through" : "none";

    return (
      <StyledTodo key={todo.id}>
        <p
          onClick={() => toggleCompleted(todo.id)}
          style={{ textDecoration: style }}
        >
          {todo.text}
        </p>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </StyledTodo>
    );
  });

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
  toggleCompleted: func.isRequired,
  deleteTodo: func.isRequired
};

Todos.defaultProps = {
  todos: []
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { toggleCompleted, deleteTodo }
)(Todos);
