class SetUserForWeight < ActiveRecord::Migration[5.2]
  def change
    Weight.where(user_id: nil).update_all(user_id: 1)
  end
end
