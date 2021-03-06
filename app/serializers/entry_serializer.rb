class EntrySerializer < ActiveModel::Serializer
  attributes :id, :slug, :title, :body, :author_name, :author_gravatar_email_hash,
             :created_at

  def author_name
    user ? user.username : object.author_name
  end

  def author_gravatar_email_hash
    user ? Digest::MD5.hexdigest(user.email) : ""
  end

  private

  def user
    object.user
  end
end
