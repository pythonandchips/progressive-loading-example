# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :client

  def profit
    budget - cost
  end
end
