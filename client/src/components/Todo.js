import React from 'react'


const Todo = props => {
  return(
    <li><input type="checkbox" />{props.props.name}</li>
  );
};

export default Todo
