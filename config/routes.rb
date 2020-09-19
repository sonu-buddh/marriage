Rails.application.routes.draw do
  root 'dashboard#index'
  devise_for :users

  get 'dashboard/index'
  get 'dashboard/image_grid'
  get 'dashboard/day_counter'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
