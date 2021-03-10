class CreateInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :invitations do |t|
      t.string :name
      t.string :phone
      t.string :place

      t.timestamps
    end
  end
end
