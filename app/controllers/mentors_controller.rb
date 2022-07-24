class MentorsController < ApplicationController
    before_action :find_mentor 

    def index 
        render json: Mentor.all 
    end

    def show 
        render json: @mentor
    end

    private 

    def find_mentor
        @mentor= Mentor.find_by(id: params[:id])
    end    

end
ß