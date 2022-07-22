class Skill < ApplicationRecord
    has_many :skills_joins, dependent: :destroy
    has_many :users, through: :skills_joins 
    has_many :mentors, through: :skills_joins 

end
