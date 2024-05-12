class Projects::ClientListsController < ApplicationController
  def index
    @projects = Project.all.includes(:client)

    render "projects/index"
  end
end
