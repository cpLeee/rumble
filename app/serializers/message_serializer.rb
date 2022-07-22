class MessageSerializer < ActiveModel::Serializer
  attributes :id, :read, :created_at, :updated_at
  has_one :conversation
  has_one :sender
  has_one :receiver
end
