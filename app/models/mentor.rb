class Mentor < ApplicationRecord
    # has_many :connections
    has_many :users, through: :connections
    has_many :skills, through: :skills_join 
end
