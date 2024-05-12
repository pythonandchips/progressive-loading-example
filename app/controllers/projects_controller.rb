class ProjectsController < ApplicationController
  def index
    @projects = Project.all.includes(:client)
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  end
end
