class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :background, :profession, :city, :profile_url, :username
end
