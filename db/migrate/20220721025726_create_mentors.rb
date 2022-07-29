class CreateMentors < ActiveRecord::Migration[6.1]
  def change
    create_table :mentors do |t|
      t.string :name
      t.text :background
      t.string :profession
      t.string :city
      t.string :profile_url
      t.decimal :longitude
      t.decimal :latitude
      t.boolean :favorites

      t.timestamps
    end
  end
end
