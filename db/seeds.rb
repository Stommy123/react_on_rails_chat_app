# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Profile.destroy_all
User.destroy_all
User.create(email: 'new@guy.com', password: 'password', password_confirmation:  'password')
p User.last
[
  ['tommy', 'tommy@tommy.com', 'password', 'password'],
  ['harry', 'timmy@timmy.com', 'password', 'password'],
  ['alexa', 'someguy@someguy.com', 'password', 'password'],
  ['natalie', 'foo@bar.com', 'password', 'password'],
  ['stevo', 'chatbot@bot.com', 'password', 'password']
].each do |name, email, password, password_confirmation|
  p email
  user = User.create(email: email, password: password, password_confirmation: password_confirmation)
  Profile.create(name: name, user_id: user.id)
end
