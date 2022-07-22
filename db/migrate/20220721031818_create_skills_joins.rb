class CreateSkillsJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :skills_joins do |t|
      t.references :user, null: false, foreign_key: true
      t.references :mentor, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
