export default function manageTodos(state = { todos: [], projects: [] }, action) {
  switch (action.type) {
    case 'ADD_TODOS':
	return { todos: action.payload };
     default:
      return state;
  }
};