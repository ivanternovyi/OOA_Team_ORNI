class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :encrypted_password
      t.string :token
      t.index :token, name: "index_users_on_token", unique: true

      t.timestamps
    end
  end
end
