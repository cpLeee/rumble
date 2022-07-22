Rails.application.routes.draw do
  
  resources :messages
  resources :conversations
  resources :skills_joins
  resources :skills
  resources :connections
  resources :mentors
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }



  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy" 


end
