//fetch todos
export function fetchTodos() {
    return (dispatch) => {
      return fetch('api/todos')
        .then(response => response.json())
        .then(todos => dispatch({ type: 'ADD_TODOS', payload: todos }));
    };
  }

export function postTodo(todoinput) {
  console.log('C');
  return (dispatch) => {
    return fetch('api/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoinput)
    }).then(response => response.json())
      .then(data => {dispatch({type: 'ADD_TODO', payload: data})});
  }
}

export function updateTodo(todoInput) {
  let url = 'api/todos/' + todoInput.id
  delete todoInput.id
  return (dispatch) => {
    return fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoInput)
    }).then(response => response.json())
      .then(data => dispatch({type: 'UPDATE_TODO', payload: data}));
  }
}

export function deleteTodo(todoInput){
  let url = 'api/todos/' + todoInput.id
  return (dispatch) => {
    return fetch(url, {
      method: 'DELETE', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoInput)
    }).then(response => response.json())
      .then(data => dispatch({type: 'DELETE_TODO', payload: data}))
  }
}



