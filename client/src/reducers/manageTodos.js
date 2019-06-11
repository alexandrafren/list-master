export default function manageTodos(state = { todos: [], projects: [] }, action) {
  switch (action.type) {
    case 'ADD_TODOS':
      return { todos: action.payload };
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };
    case 'UPDATE_TODO':
      return state;
    default:
      return state;
  }
};