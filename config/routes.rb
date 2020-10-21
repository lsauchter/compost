Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  constraints format: :json do
    resources :weight, only: %i[index show create update destroy]
  end

  match "*path", to: 'home#index', via: :all
end
