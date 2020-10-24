FactoryBot.define do
  factory :user do
    name { Faker::Lorem.word.capitalize }
    encrypted_password { Faker::Lorem.word }
  end
end
