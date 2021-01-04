# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]
  def index
  end

  def app
  end
end
