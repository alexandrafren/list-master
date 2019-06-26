export default function manageTodos(state = { todos: [], projects: [] }, action) {
  switch (action.type) {
    case 'ADD_TODOS':
      return { todos: action.payload };
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };
    case 'DELETE_TODO':
      console.log(action)
      return { todos: action.payload }
    case 'UPDATE_TODO':
      return state.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: true
          }
        }
        return item;
      })
    default:
      return state;
  }
};
