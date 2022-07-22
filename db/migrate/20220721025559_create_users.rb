class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :background
      t.string :profession
      t.string :city
      t.string :profile_url
      t.string :username
      t.string :password_digest
      t.boolean :admin, default:false


      t.timestamps
    end
  end
end
