class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.boolean :read
      t.references :conversation, null: false, foreign_key: true
      t.references :sender, null: false
      t.references :receiver, null: false

      t.timestamps
    end

    add_foreign_key :messages, :users, column: :sender_id
    add_foreign_key :messages, :users, column: :receiver_id
  end
end
