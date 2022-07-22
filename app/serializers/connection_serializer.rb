class ConnectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :mentor
end
