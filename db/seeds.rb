# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p1 = Project.create(name: "null")
p2 = Project.create(name: "Graduate from Flatiron")
todos = Todo.create(name: "Finish final project for Flatiron!", project_id: 2, time_to_complete: "several days", level_of_difficulty: "a lot" )
todo2 = Todo.create(name: "Apply for Passport", project_id: 1, time_to_complete: "an hour or less", level_of_difficulty: "a little bit")


