class CreatePostsModel < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name, limit: 50, null: false
      t.string :body, null: false
      t.timestamps null: false
    end
  end
end
