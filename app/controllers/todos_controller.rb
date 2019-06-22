class TodosController < ApplicationController
	def index
		@todos = Todo.all
		render json: @todos
	end

	def show
		@todo = Todo.find(params[:id])
		render json:@todo
	end

	def create
		@todo = Todo.create(todo_params)
		render json: @todo
	end

	def update
		@todo = Todo.find(params[:id])
		@todo.update(todo_params)
		render json: @todo
	end

	def todo_params
		params.require(:todo).permit(:name, :time_to_complete, :level_of_difficulty, :completed)
	end

end