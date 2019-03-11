class Profile < ApplicationRecord
  belongs_to :user
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"
  has_many :received_messages, class_name: "Message", foreign_key: "recipient_id"
  has_many :notifications, foreign_key: :recipient_id
end
