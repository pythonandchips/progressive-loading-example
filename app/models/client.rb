class Client < ApplicationRecord
  has_many :projects

  def total_budget
    projects.sum(:budget)
  end
end
