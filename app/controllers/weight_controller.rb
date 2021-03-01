# frozen_string_literal: true

class WeightController < ApplicationController
  WEEK_SECONDS = 604_800

  def index
    data = Weight.order(created_at: :desc)
    json = {
      data: data
    }

    respond_with json
  end

  def show
    json = {
      total: total,
      average: average
    }
    respond_with json, location: nil
  end

  def create
    weight = Weight.new(weight_params)
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
    Weight.find(params[:id])
  end

  def weight_params
    params.permit(:amount)
  end

  def total
    Weight.sum(:amount)
  end

  def average
    weeks = (Weight.last.created_at - Weight.first.created_at) / WEEK_SECONDS
    (total / weeks.round).round(2)
  end
end
