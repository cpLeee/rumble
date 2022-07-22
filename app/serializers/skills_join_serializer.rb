class SkillsJoinSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :mentor
  has_one :skill
end
