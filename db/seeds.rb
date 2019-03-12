# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Profile.destroy_all
User.destroy_all
[
  ['Tommy', 'tommy@tommy.com', 'password', 'password'],
  ['Andy', 'andy@andy.com', 'password', 'password'],
  ['Don', 'don@don.com', 'password', 'password'],
  ['Angel', 'angel@angel.com', 'password', 'password'],
  ['Tim', 'tim@tim.com', 'password', 'password'],
  ['Izzy', 'izzy@izzy.com', 'password', 'password'],
  ['Patricio', 'patricio@patricio.com', 'password', 'password'],
  ['Jo', 'jo@jo.com', 'password', 'password'],
  ['Yuha', 'yuha@yuha.com', 'password', 'password'],
].each do |name, email, password, password_confirmation|
  user = User.create(email: email, password: password, password_confirmation: password_confirmation)
  Profile.create(name: name, user_id: user.id)
end
