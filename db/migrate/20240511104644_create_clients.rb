class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name

      t.index :name, unique: true

      t.timestamps
    end

    add_reference :projects, :client
    add_index :projects, [:client_id, :name]
  end
end
