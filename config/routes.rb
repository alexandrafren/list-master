Rails.application.routes.draw do
  scope '/api' do
    get :todo, to: 'todos#index'
end
end
