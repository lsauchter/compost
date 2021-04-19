# frozen_string_literal: true

class WeightController < ApplicationController
  before_action :authenticate_user!

  WEEK_SECONDS = 604_800

  def index
    data = current_user.weights.order(created_at: :desc)
    render json: data
  end

  def show
    if current_user.weights.any?
      render json: { total: total, average: average }, location: nil
    else
      render json: { total: 0, average: 0 }, location: nil
    end
  end

  def create
    weight = current_user.weights.new(weight_params)
    if weight.save
      render json: weight, status: :created
    else
      render json: { errors: weight.errors }, status: :unprocessable_entity
    end
  end

  def update
    weight_resource.update(weight_params)
    respond_with weight, location: nil
  end

  def destroy
    weight_resource.destroy
    head :no_content
  end

  private

  def weight_resource
    current_user.weights.find(params[:id])
  end

  def weight_params
    params.permit(:amount)
  end

  def total
    current_user.weights.sum(:amount)
  end

  def average
    weeks = ((current_user.weights.last.created_at - current_user.weights.first.created_at) / WEEK_SECONDS).round
    weeks.zero? ? total : (total / weeks).round(2)
  end
end
