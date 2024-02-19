// TodoList.js

import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { toggleTodo, deleteTodo } from './actions/Action'; // Import action creators

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// Map state to props to get the list of todos from the Redux state
const mapStateToProps = state => ({
  todos: state.todos
});

// Map dispatch to props to dispatch actions
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

// Connect TodoList component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
