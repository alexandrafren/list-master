export default function managTodos(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODOS':
      return {
        state
      }
    case 'REMOVE_TODOS':
      return {
        state
      }
    case 'EDIT_TODOS':
      return {
        state
      }
    case 'ARCHIVE_TODOS':
      return {
        state
      }
    default:
        return state;
  }
};