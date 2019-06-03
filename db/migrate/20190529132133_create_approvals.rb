class CreateApprovals < ActiveRecord::Migration[5.1]
  def change
    create_table :approvals do |t|
      t.references :user, foreign_key: true
      t.references :merge_request, foreign_key: true

      t.timestamps
    end
  end
end
