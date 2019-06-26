Rails.application.routes.draw do
  scope '/api' do
    resources :todos, only: [:show, :index, :create, :update, :destroy]
end
end
