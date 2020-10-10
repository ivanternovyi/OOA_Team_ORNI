FactoryBot.define do
  factory :article do
    name { Faker::Lorem.word.capitalize}
    text { Faker::Lorem.sentence }
    article_type { Article::VALID_ARTICLE_TYPES.sample }
  end
end