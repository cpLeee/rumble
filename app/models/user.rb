class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :conversations, through: :messages 
    has_many :connections, dependent: :destroy
    has_many :mentors, through: :connections 
    has_many :skills, through: :skills_joins 

    has_secure_password 
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
end
