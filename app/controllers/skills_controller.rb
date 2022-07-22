class SkillsController < ApplicationController

    before_action :find_skill
    
    def show
        render json: @skill
    end

    def create 
        skill= Skill.create!(skill_params)
        render json: skill, status: :created
    end

    private

    def find_skill 
        @skill=Skill.find_by(id: params[:id])
    end

    def skill_params 
        params.permit(:skill)
    end
    
end
