class AddToTodos < ActiveRecord::Migration[5.2]
    def change
        add_column :todos, :project_id, :integer
	add_column :todos, :time_to_complete, :integer
	add_column :todos, :level_of_difficulty, :integer
    end
end