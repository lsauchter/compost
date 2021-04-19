# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user
      @user = current_user
    end
    puts current_user.inspect
    puts @user.inspect
  end

  def app
  end
end
