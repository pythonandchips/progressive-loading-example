class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.decimal :budget, default: 0
      t.decimal :cost, default: 0
      t.integer :duration, default: 0
      t.timestamps
    end
  end
end
