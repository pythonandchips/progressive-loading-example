class ClientsController < ApplicationController
  def index
    @clients = Client.all.
      limit(20).
      offset(params.fetch(:page, 0) * 20)
  end
end
