Rails.application.routes.draw do
  namespace :projects do
    resources :client_lists, only: [:index]
  end
  resources :clients, only: [:index]
  resources :projects, only: [:index, :show, :new]
  get "up" => "rails/health#show", as: :rails_health_check

  root "projects#index"
end
