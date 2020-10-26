class User < ApplicationRecord
  attr_accessor :password

  has_secure_token :token

  has_many :articles

  validates :name, presence: true
  validates_uniqueness_of :name
  validates :encrypted_password, presence: true

  after_initialize :encrypt_password

  def authenticate(value)
    Digest::MD5.hexdigest(value) == encrypted_password
  end

  private

  def encrypt_password
    return if password.blank?

    self.encrypted_password = Digest::MD5.hexdigest(password)
  end
end
