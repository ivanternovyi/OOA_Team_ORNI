# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: Faker::Lorem.word.capitalize, password: Faker::Lorem.word)

50.times do
  Article.create(
    name: Faker::Lorem.word.capitalize,
    text: Faker::Lorem.sentence,
    article_type: Article::VALID_ARTICLE_TYPES.sample,
    user_id: user.id
  )
end
