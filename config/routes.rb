Rails.application.routes.draw do
  resources :appoinments
  root 'dashboard#invitation_card'
  devise_for :users

  get 'dashboard/invitation_card'
  post 'dashboard/create_invitation'
  get 'dashboard/download_card'
  get 'dashboard/index'
  get 'dashboard/image_grid'
  get "day_counter", to: 'dashboard#day_counter'
  get "contact", to: 'dashboard#contact'
  get "photograpy", to: 'dashboard#photograpy'
  post "contact_me", to: 'dashboard#contact_me'

end
