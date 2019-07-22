class CreateTodos < ActiveRecord::Migration[5.2]
    def change
        create_table :todos do |t|
            t.string :name
            t.string :time_to_complete
            t.string :level_of_difficulty
 	        t.boolean :completed
        end
    end
end