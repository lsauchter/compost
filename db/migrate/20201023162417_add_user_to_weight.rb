class AddUserToWeight < ActiveRecord::Migration[5.2]
  def change
    add_reference :weights, :user, foreign_key: true
  end
end
