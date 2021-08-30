class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :descripion, :score, :resort_id
end
