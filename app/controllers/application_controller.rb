# frozen_string_literal: true

require 'application_responder'

class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  self.responder = ApplicationResponder
  respond_to :html, :json

  private

  def after_sign_in_path_for(_resource)
    root_path
  end

  def after_sign_out_path_for(_resource_or_scope)
    new_user_session_path
  end
end
