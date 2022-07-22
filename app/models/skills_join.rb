class SkillsJoin < ApplicationRecord
  belongs_to :user
  belongs_to :mentor
  belongs_to :skill
end
