Rails.application.routes.draw do
  root 'static#root'
  get '/pages/:id', to: 'static#root'
end
