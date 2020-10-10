require 'rails_helper'

RSpec.describe Article, type: :model do
  # Validations
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:text) }
  it { should validate_inclusion_of(:article_type).in_array(Article::VALID_ARTICLE_TYPES) }
end
