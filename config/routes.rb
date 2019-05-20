Rails.application.routes.draw do
  scope '/api' do
    get :todo, to: 'todos#index'
    get :project, to: 'projects#index'
    post :todo, to: 'todos#create'
end
end
