class Approval < ApplicationRecord
  belongs_to :user
  belongs_to :merge_request

  validates :merge_request_id, presence: true
  validates :user_id, presence: true, uniqueness: { scope: [:merge_request_id] }
end

