Rails.application.routes.draw do
  scope '/api' do
    resources :todos, only: [:show, :index, :create]
end
end
