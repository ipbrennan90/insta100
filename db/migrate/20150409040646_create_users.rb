class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :token
      t.string :name
      t.string :prof_pic
    end
  end
end
