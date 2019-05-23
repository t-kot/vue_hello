Rails.application.routes.draw do
  resources :message_rooms, only: %w[index show] do
    resources :messages, only: %w[create destroy]
  end
end
