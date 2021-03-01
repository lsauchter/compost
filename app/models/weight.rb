# frozen_string_literal: true

class Weight < ApplicationRecord
  validates :amount, presence: true
end
