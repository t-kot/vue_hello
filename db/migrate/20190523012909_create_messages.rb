class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.references :message_room, foreign_key: true
      t.string :body

      t.timestamps
    end
  end
end
