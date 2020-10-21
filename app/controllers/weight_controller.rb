class WeightController < ApplicationController
  def index
    data = Weight.order(created_at: :desc)
    json = {
      data: data
    }

    respond_with json
  end

  def show
    respond_with total, location: nil
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
end
