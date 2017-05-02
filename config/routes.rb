Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'functionality', to: 'pages#functionality'
  get 'pricing', to: 'pages#pricing'
end
