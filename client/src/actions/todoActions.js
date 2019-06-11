//fetch todos
export function fetchTodos() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TODOS' });
      return fetch('api/todo')
        .then(response => response.json())
        .then(todos => dispatch({ type: 'ADD_TODOS', payload: todos }));
    };
  }

export function postTodo(todoinput) {
  return (dispatch) => {
    dispatch({type: 'ADDING_TODO' });
    return fetch('api/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoinput)
    }).then(response => response.json())
      .then(data => dispatch({type: 'ADD_TODO', payload: data}));
  }
}

export function updateTodo(todoupdate) {
  return (dispatch) => {
    dispatch({type: 'UPDATING_TODO'});
    return fetch('api/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoupdate)
    }).then(response => response.json())
      .then(data => dispatch({type: 'UPDATE_TODO', payload: data}));
  }
}



