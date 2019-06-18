import React, { createRef } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { createTodo } from "../state/actionDispatchers";

const StyledForm = styled.form`
  background: #fff4f4;
  text-align: center;
  padding: 20px;
  max-width: 700px;
  margin: auto;

  h3 {
    color: #f072a9;
    margin: 0 0 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
  }

  input {
    width: 300px;
    height: 17px;
    background: #ffeff6;
    border: 2px solid #ffdae7;
    color: #f072a9;
    padding: 5px;
    margin: 0 5px;
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

function TodoForm({ createTodo }) {
  const todoInput = createRef();

  const submitTodo = e => {
    e.preventDefault();
    createTodo(todoInput.current.value);
    todoInput.current.value = "";
  };

  return (
    <StyledForm onSubmit={submitTodo}>
      <h3>Add a task.</h3>
      <input type="text" placeholder="...create todo" ref={todoInput} />
      <button type="submit">Add Todo</button>
    </StyledForm>
  );
}

TodoForm.propTypes = {
  createTodo: func.isRequired
};

export default connect(
  null,
  { createTodo }
)(TodoForm);
