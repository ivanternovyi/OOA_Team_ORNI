class Article < ApplicationRecord
  VALID_ARTICLE_TYPES = [
    'blog_post',
    'facebook_post',
    'tweet'
  ]

  validates :name, presence: true
  validates :text, presence: true
  validates :article_type, inclusion: { in: VALID_ARTICLE_TYPES }

  scope :by_keyword, -> (keyword) { by_name(keyword).or(by_text(keyword)) }
  scope :by_name, ->(name) { where('articles.name ILIKE ?', "%#{name}%") }
  scope :by_text, ->(text) { where('articles.text ILIKE ?', "%#{text}%") }
end
