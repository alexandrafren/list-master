//fetch todos
export function fetchTodos() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TODOS' });
      return fetch('api/todo')
        .then(response => response.json())
        .then(todos => dispatch({ type: 'ADD_TODOS', payload: todos }));
    };
  }

//fetch projects
export function fetchProjects() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PROJECTS' });
    return fetch('api/project')
      .then(response => response.json())
      .then(projects => dispatch({ type: 'ADD_PROJECT', payload: projects}));
  };
}

export function postTodo(todoinput) {
  return (dispatch) => {
    dispatch({type: 'ADDING_TODO' });
    console.log(JSON.stringify(todoinput))
    fetch('api/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoinput)
    }).then(response => response.json())
      .then(data => console.log(data))
  }
}

export function postProject() {
  return fetch('api/project', {
    method: 'POST',
    body: JSON.stringify()
  }).then((res) => res.json())
  .then((data) => console.log(data))
}


