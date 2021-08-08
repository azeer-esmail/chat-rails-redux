class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  def as_json(options = {})
    # nickname = (user.nickname.nil?) ? (user.email.match(/[^@]+/)[0]) : (user.nickname)

    return {
      id: id,
      author: user.email,
      content: content,
      created_at: created_at,
      channel: channel.name
    }
  end

end
