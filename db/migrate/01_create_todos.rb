class CreateTodos < ActiveRecord::Migration[5.2]
    def change
        create_table :todos do |t|
            t.string :name
            t.integer :project_id
            t.integer :time_to_complete
            t.integer :level_of_difficulty
        end
    end
end