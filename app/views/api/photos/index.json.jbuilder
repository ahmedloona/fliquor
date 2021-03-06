# @photos.each do |photo|
#   json.set! photo.id do
#     json.extract! photo, :title, :description, :user_id
#     if post.image.attached?
#       json.image_url url_for(photo.image)
#     end
#   end
# end
@photos.each do |photo|
  json.set! photo.id do
    json.partial! "api/photos/photo", photo: photo
    end
end


# @photos.each do |photo|
#   json.set! photo.id do
#     json.extract! photo, :id, :user_id, :title, :description, :tags, :tagjoins, :album_ids, :comments
#      if photo.image.attached?
#       json.image_url url_for(photo.image)
# end
#     end
# end
