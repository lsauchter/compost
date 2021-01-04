# frozen_string_literal: true

class Weight < ApplicationRecord
  belongs_to :user
  validates :amount, presence: true
end
