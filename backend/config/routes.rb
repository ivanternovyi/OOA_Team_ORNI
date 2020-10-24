Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles
      post '/login', to: 'auth#login'
      post '/signup', to: 'auth#signup'
    end
  end
end
