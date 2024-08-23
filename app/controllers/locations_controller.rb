class LocationsController < ApplicationController
  def index
    gon.map_key = ENV['GOOGLE_MAP_API_KEY']
  end
end