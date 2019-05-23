Rails.application.routes.draw do
  resources :message_rooms, only: %w[index show create] do
    resources :messages, only: %w[create destroy]
  end
end
