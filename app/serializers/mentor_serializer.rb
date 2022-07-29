class MentorSerializer < ActiveModel::Serializer
  attributes :id, :name, :background, :profession, :city, :profile_url, :longitude, :latitude, :favorites
end
