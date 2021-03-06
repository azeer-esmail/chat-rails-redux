# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.delete_all
User.delete_all
Channel.delete_all

general = Channel.create(name: 'general')
paris = Channel.create(name: 'paris')
react = Channel.create(name: 'react')

user1 = User.create(email: 'user1@user1.com', password: '123456', password_confirmation: '123456')
user2 = User.create(email: 'user2@user2.com', password: '123456', password_confirmation: '123456')

Message.create(content: 'hi', user: user1, channel: general)
Message.create(content: 'hello', user: user2, channel: general)

Message.create(content: 'done with react course?', user: user1, channel: react)
Message.create(content: 'yes!', user: user2, channel: react)
