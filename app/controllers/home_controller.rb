# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user
      @user = current_user
    end
  end
end
