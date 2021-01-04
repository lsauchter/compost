# frozen_string_literal: true

require 'application_responder'

class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  self.responder = ApplicationResponder
  respond_to :html, :json
end
