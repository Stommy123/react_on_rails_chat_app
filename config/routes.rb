Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  resources :profiles do
    resources :messages, only: [:create, :index]
  end
  resources :notifications
end
