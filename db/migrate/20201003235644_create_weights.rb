class CreateWeights < ActiveRecord::Migration[5.2]
  def change
    create_table :weights do |t|
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.timestamps
    end
  end
end
