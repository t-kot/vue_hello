Rails.application.routes.draw do
  resources :message_rooms, only: %w[index show create] do
    resources :messages, only: %w[create update destroy]
  end
  get 'page1' => 'page#page1'
  get 'page2' => 'page#page2'
end
