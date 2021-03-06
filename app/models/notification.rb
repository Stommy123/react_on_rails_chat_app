class Notification < ApplicationRecord
  belongs_to :sender, class_name: "Profile"
  belongs_to :recipient, class_name: "Profile"
  after_create_commit :broadcast_message
  scope :unread, -> { where(read_at: nil) }
  private
  def action_cable_channel
    "messages:#{[sender_id, recipient_id].sort.join(':')}"
  end
  def broadcast_message
    ActionCable.server.broadcast(action_cable_channel, {})
  end
end
