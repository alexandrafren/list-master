import { combineReducers } from 'redux';
import { fetchTodos, fetchProjects, postTodo, postProject } from './todoActions'

export default combineReducers({
    fetchTodos,
    fetchProjects,
    postTodo,
    postProject
})