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



