# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p1 = Project.create(name: "Graduate from Flatiron")
t1 = Todo.create(name: "Finish final project for Flatiron!", project_id: 1, time_to_complete: 15, level_of_difficulty: 3)

