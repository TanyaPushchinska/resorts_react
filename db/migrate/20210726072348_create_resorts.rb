class CreateResorts < ActiveRecord::Migration[5.2]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
